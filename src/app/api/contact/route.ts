import { NextRequest, NextResponse } from 'next/server';
import {
  businessEnquirySchema,
  fullCareersSchema,
  ALLOWED_DOCUMENT_MIMES,
  ALLOWED_ADDITIONAL_MIMES,
  MAX_RFP_SIZE_BYTES,
  MAX_RESUME_SIZE_BYTES,
} from '@/lib/contactValidation';
import {
  generateReferenceId,
  storeUploadedFile,
  sendNotificationEmail,
  sendAutoReplyEmail,
  AttachmentMeta,
} from '@/lib/contactDelivery';

// In-memory sliding window rate limiter per IP (max 10 requests per 10 minutes)
const ipRequestMap = new Map<string, { count: number; firstSeen: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = ipRequestMap.get(ip);

  if (!record) {
    ipRequestMap.set(ip, { count: 1, firstSeen: now });
    return true;
  }

  if (now - record.firstSeen > RATE_LIMIT_WINDOW_MS) {
    ipRequestMap.set(ip, { count: 1, firstSeen: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

// Clean up stale rate limit entries periodically
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of ipRequestMap.entries()) {
      if (now - record.firstSeen > RATE_LIMIT_WINDOW_MS) {
        ipRequestMap.delete(ip);
      }
    }
  }, 5 * 60 * 1000);
}

// Allowed extension mapping
const ALLOWED_DOC_EXTENSIONS = ['.pdf', '.doc', '.docx'];
const ALLOWED_ALL_EXTENSIONS = ['.pdf', '.doc', '.docx', '.png', '.jpg', '.jpeg'];

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_');
}

function hasValidExtension(filename: string, allowedExtensions: string[]): boolean {
  const lower = filename.toLowerCase();
  return allowedExtensions.some((ext) => lower.endsWith(ext));
}

export async function POST(request: NextRequest) {
  // 1. IP Rate Limiting
  const clientIp =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1';

  if (!checkRateLimit(clientIp)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a few minutes before trying again.' },
      { status: 429 }
    );
  }

  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json(
        { error: 'Invalid content type. Expected multipart/form-data.' },
        { status: 400 }
      );
    }

    const formData = await request.formData();
    const type = formData.get('type') as string;

    // 2. Honeypot check
    const honeypot = formData.get('honeypot');
    if (honeypot && typeof honeypot === 'string' && honeypot.length > 0) {
      // Silently discard spam without leaking hints
      return NextResponse.json({ success: true, referenceId: 'MGS-SPAM-PREVENTED' });
    }

    // 3. Time-to-submit check (bot trap: if filled in under 2 seconds)
    const submitTimestampStr = formData.get('submitTimestamp') as string;
    if (submitTimestampStr) {
      const submitTimestamp = parseInt(submitTimestampStr, 10);
      const elapsedMs = Date.now() - submitTimestamp;
      if (elapsedMs < 1800) {
        return NextResponse.json({ success: true, referenceId: 'MGS-SPAM-PREVENTED' });
      }
    }

    // =========================================================================
    // CASE A: BUSINESS ENQUIRY
    // =========================================================================
    if (type === 'business') {
      const rawData = {
        type: 'business' as const,
        fullName: formData.get('fullName') as string,
        workEmail: formData.get('workEmail') as string,
        phoneCountryCode: (formData.get('phoneCountryCode') as string) || '+1',
        phone: (formData.get('phone') as string) || undefined,
        company: formData.get('company') as string,
        jobTitle: (formData.get('jobTitle') as string) || undefined,
        industry: (formData.get('industry') as string) || undefined,
        companySize: (formData.get('companySize') as string) || undefined,
        serviceOfInterest: formData.get('serviceOfInterest') as string,
        erpPlatforms: formData.getAll('erpPlatforms') as string[],
        timeline: (formData.get('timeline') as string) || undefined,
        message: formData.get('message') as string,
        consent: formData.get('consent') === 'true',
        honeypot: (formData.get('honeypot') as string) || '',
      };

      const parseResult = businessEnquirySchema.safeParse(rawData);
      if (!parseResult.success) {
        return NextResponse.json(
          { error: 'Validation failed', details: parseResult.error.flatten().fieldErrors },
          { status: 400 }
        );
      }

      const validData = parseResult.data;
      const referenceId = generateReferenceId('business');

      // Process optional attachment (RFP or project brief)
      const attachmentFile = formData.get('attachment') as File | null;
      let attachmentMeta: AttachmentMeta | undefined = undefined;

      if (attachmentFile && attachmentFile.size > 0) {
        // Enforce size limit
        if (attachmentFile.size > MAX_RFP_SIZE_BYTES) {
          return NextResponse.json(
            { error: 'Attachment file size exceeds 10 MB limit.' },
            { status: 400 }
          );
        }

        // Enforce extension and MIME type
        const safeName = sanitizeFilename(attachmentFile.name);
        if (!hasValidExtension(safeName, ALLOWED_DOC_EXTENSIONS)) {
          return NextResponse.json(
            { error: 'Attachment must be a PDF, DOC, or DOCX document.' },
            { status: 400 }
          );
        }

        if (!ALLOWED_DOCUMENT_MIMES.includes(attachmentFile.type)) {
          return NextResponse.json(
            { error: 'Invalid document MIME type detected.' },
            { status: 400 }
          );
        }

        // TODO: Pass file buffer through ClamAV or enterprise virus scanning pipeline here

        const arrayBuffer = await attachmentFile.arrayBuffer();
        attachmentMeta = {
          filename: safeName,
          mimeType: attachmentFile.type,
          sizeBytes: attachmentFile.size,
          buffer: Buffer.from(arrayBuffer),
        };

        await storeUploadedFile(attachmentMeta, referenceId);
      }

      const fullPhone = validData.phone ? `${validData.phoneCountryCode} ${validData.phone}` : undefined;

      await sendNotificationEmail({
        type: 'business',
        referenceId,
        fullName: validData.fullName,
        workEmail: validData.workEmail,
        phone: fullPhone,
        company: validData.company,
        jobTitle: validData.jobTitle,
        industry: validData.industry,
        companySize: validData.companySize,
        serviceOfInterest: validData.serviceOfInterest,
        erpPlatforms: validData.erpPlatforms,
        timeline: validData.timeline,
        message: validData.message,
        attachment: attachmentMeta,
      });

      await sendAutoReplyEmail(validData.workEmail, validData.fullName, 'business', referenceId);

      return NextResponse.json({
        success: true,
        referenceId,
        message: 'Business enquiry received successfully.',
      });
    }

    // =========================================================================
    // CASE B: WORK WITH US (CAREERS)
    // =========================================================================
    if (type === 'careers') {
      const rawData = {
        type: 'careers' as const,
        applyingAs: formData.get('applyingAs') as 'Full-time' | 'Freelancer / Contractor' | 'Internship',
        areasOfInterest: formData.getAll('areasOfInterest') as string[],
        roleInterest: (formData.get('roleInterest') as string) || undefined,
        fullName: formData.get('fullName') as string,
        email: formData.get('email') as string,
        phoneCountryCode: (formData.get('phoneCountryCode') as string) || '+1',
        phone: formData.get('phone') as string,
        currentLocation: formData.get('currentLocation') as string,
        linkedInUrl: (formData.get('linkedInUrl') as string) || undefined,
        portfolioUrl: (formData.get('portfolioUrl') as string) || undefined,
        experienceYears: formData.get('experienceYears') as string,
        currentRoleCompany: (formData.get('currentRoleCompany') as string) || undefined,
        primarySkills: formData.getAll('primarySkills') as string[],
        certifications: (formData.get('certifications') as string) || undefined,
        highestEducation: (formData.get('highestEducation') as string) || undefined,
        earliestStartDate: (formData.get('earliestStartDate') as string) || undefined,
        noticePeriod: (formData.get('noticePeriod') as string) || undefined,
        engagementPreference: (formData.get('engagementPreference') as string) || undefined,
        hoursPerWeek: (formData.get('hoursPerWeek') as string) || undefined,
        expectedRate: (formData.get('expectedRate') as string) || undefined,
        rateCurrency: (formData.get('rateCurrency') as string) || 'USD',
        rateUnit: (formData.get('rateUnit') as string) || 'per hour',
        workAuthorization: (formData.get('workAuthorization') as string) || undefined,
        coverLetterText: (formData.get('coverLetterText') as string) || undefined,
        whyMatic: (formData.get('whyMatic') as string) || undefined,
        howHeard: (formData.get('howHeard') as string) || undefined,
        consent: formData.get('consent') === 'true',
        talentNetworkOptIn: formData.get('talentNetworkOptIn') === 'true',
        honeypot: (formData.get('honeypot') as string) || '',
      };

      const parseResult = fullCareersSchema.safeParse(rawData);
      if (!parseResult.success) {
        return NextResponse.json(
          { error: 'Validation failed', details: parseResult.error.flatten().fieldErrors },
          { status: 400 }
        );
      }

      const validData = parseResult.data;
      const referenceId = generateReferenceId('careers');

      // Process mandatory Resume
      const resumeFile = formData.get('resume') as File | null;
      if (!resumeFile || resumeFile.size === 0) {
        return NextResponse.json(
          { error: 'Resume file is required.' },
          { status: 400 }
        );
      }

      if (resumeFile.size > MAX_RESUME_SIZE_BYTES) {
        return NextResponse.json(
          { error: 'Resume exceeds maximum 5 MB size limit.' },
          { status: 400 }
        );
      }

      const safeResumeName = sanitizeFilename(resumeFile.name);
      if (!hasValidExtension(safeResumeName, ALLOWED_DOC_EXTENSIONS)) {
        return NextResponse.json(
          { error: 'Resume must be a PDF, DOC, or DOCX document.' },
          { status: 400 }
        );
      }

      if (!ALLOWED_DOCUMENT_MIMES.includes(resumeFile.type)) {
        return NextResponse.json(
          { error: 'Invalid resume file type detected.' },
          { status: 400 }
        );
      }

      // TODO: Enterprise virus scanning hook for resumeFile

      const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());
      const resumeMeta: AttachmentMeta = {
        filename: safeResumeName,
        mimeType: resumeFile.type,
        sizeBytes: resumeFile.size,
        buffer: resumeBuffer,
      };
      await storeUploadedFile(resumeMeta, referenceId);

      // Optional Cover Letter File
      const coverLetterFile = formData.get('coverLetterFile') as File | null;
      let coverLetterMeta: AttachmentMeta | undefined = undefined;
      if (coverLetterFile && coverLetterFile.size > 0) {
        if (coverLetterFile.size <= MAX_RESUME_SIZE_BYTES) {
          const safeCoverName = sanitizeFilename(coverLetterFile.name);
          if (hasValidExtension(safeCoverName, ALLOWED_DOC_EXTENSIONS) && ALLOWED_DOCUMENT_MIMES.includes(coverLetterFile.type)) {
            coverLetterMeta = {
              filename: safeCoverName,
              mimeType: coverLetterFile.type,
              sizeBytes: coverLetterFile.size,
              buffer: Buffer.from(await coverLetterFile.arrayBuffer()),
            };
            await storeUploadedFile(coverLetterMeta, referenceId);
          }
        }
      }

      // Optional Additional Files (up to 2 files)
      const additionalFiles = formData.getAll('additionalFiles') as File[];
      const additionalMetas: AttachmentMeta[] = [];
      for (const addFile of additionalFiles.slice(0, 2)) {
        if (addFile && addFile.size > 0 && addFile.size <= MAX_RESUME_SIZE_BYTES) {
          const safeAddName = sanitizeFilename(addFile.name);
          if (hasValidExtension(safeAddName, ALLOWED_ALL_EXTENSIONS) && ALLOWED_ADDITIONAL_MIMES.includes(addFile.type)) {
            const meta: AttachmentMeta = {
              filename: safeAddName,
              mimeType: addFile.type,
              sizeBytes: addFile.size,
              buffer: Buffer.from(await addFile.arrayBuffer()),
            };
            await storeUploadedFile(meta, referenceId);
            additionalMetas.push(meta);
          }
        }
      }

      const fullPhone = `${validData.phoneCountryCode} ${validData.phone}`;

      await sendNotificationEmail({
        type: 'careers',
        referenceId,
        applyingAs: validData.applyingAs,
        areasOfInterest: validData.areasOfInterest,
        roleInterest: validData.roleInterest,
        fullName: validData.fullName,
        email: validData.email,
        phone: fullPhone,
        currentLocation: validData.currentLocation,
        linkedInUrl: validData.linkedInUrl,
        portfolioUrl: validData.portfolioUrl,
        experienceYears: validData.experienceYears,
        currentRoleCompany: validData.currentRoleCompany,
        primarySkills: validData.primarySkills,
        certifications: validData.certifications,
        highestEducation: validData.highestEducation,
        earliestStartDate: validData.earliestStartDate,
        noticePeriod: validData.noticePeriod,
        engagementPreference: validData.engagementPreference,
        hoursPerWeek: validData.hoursPerWeek,
        expectedRate: validData.expectedRate,
        rateCurrency: validData.rateCurrency,
        rateUnit: validData.rateUnit,
        workAuthorization: validData.workAuthorization,
        coverLetterText: validData.coverLetterText,
        whyMatic: validData.whyMatic,
        howHeard: validData.howHeard,
        talentNetworkOptIn: validData.talentNetworkOptIn,
        resumeFile: resumeMeta,
        coverLetterFile: coverLetterMeta,
        additionalFiles: additionalMetas,
      });

      await sendAutoReplyEmail(validData.email, validData.fullName, 'careers', referenceId);

      return NextResponse.json({
        success: true,
        referenceId,
        message: 'Application submitted successfully.',
      });
    }

    return NextResponse.json({ error: 'Invalid submission type.' }, { status: 400 });
  } catch (error) {
    console.error('[API /contact] Internal submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected server error occurred. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
