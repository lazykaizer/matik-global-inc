/**
 * Contact Delivery Adapters
 * Handles email notifications and file storage with provider swappability
 */

export interface AttachmentMeta {
  filename: string;
  mimeType: string;
  sizeBytes: number;
  buffer?: Buffer;
}

export interface BusinessSubmissionPayload {
  type: 'business';
  referenceId: string;
  fullName: string;
  workEmail: string;
  phone?: string;
  company: string;
  jobTitle?: string;
  industry?: string;
  companySize?: string;
  serviceOfInterest: string;
  erpPlatforms?: string[];
  timeline?: string;
  message: string;
  attachment?: AttachmentMeta;
}

export interface CareersSubmissionPayload {
  type: 'careers';
  referenceId: string;
  applyingAs: string;
  areasOfInterest: string[];
  roleInterest?: string;
  fullName: string;
  email: string;
  phone: string;
  currentLocation: string;
  linkedInUrl?: string;
  portfolioUrl?: string;
  experienceYears: string;
  currentRoleCompany?: string;
  primarySkills: string[];
  certifications?: string;
  highestEducation?: string;
  earliestStartDate?: string;
  noticePeriod?: string;
  engagementPreference?: string;
  hoursPerWeek?: string;
  expectedRate?: string;
  rateCurrency?: string;
  rateUnit?: string;
  workAuthorization?: string;
  coverLetterText?: string;
  whyMatic?: string;
  howHeard?: string;
  talentNetworkOptIn: boolean;
  resumeFile?: AttachmentMeta;
  coverLetterFile?: AttachmentMeta;
  additionalFiles?: AttachmentMeta[];
}

export function generateReferenceId(type: 'business' | 'careers'): string {
  const prefix = type === 'business' ? 'MGS-BIZ' : 'MGS-CAR';
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  const timestamp = Date.now().toString(36).substring(3, 7).toUpperCase();
  return `${prefix}-${timestamp}${random}`;
}

/**
 * Storage Adapter Interface & Implementation
 */
export async function storeUploadedFile(
  file: AttachmentMeta,
  referenceId: string
): Promise<{ fileUrl: string; fileKey: string }> {
  const storageBucket = process.env.STORAGE_BUCKET;
  const storageKey = process.env.STORAGE_KEY;

  // Sanitized safe file name
  const safeFilename = file.filename.replace(/[^a-zA-Z0-9._-]/g, '_');
  const fileKey = `submissions/${referenceId}/${Date.now()}_${safeFilename}`;

  if (storageBucket && storageKey) {
    // TODO: Connect real S3 / Cloud Storage / Azure Blob SDK here
    // e.g. await s3.putObject({ Bucket: storageBucket, Key: fileKey, Body: file.buffer, ContentType: file.mimeType })
    return {
      fileUrl: `https://${storageBucket}.storage.provider/${fileKey}`,
      fileKey,
    };
  }

  // Graceful development fallback
  if (process.env.NODE_ENV !== 'production') {
    // In dev mode, return a safe internal mock link
    return {
      fileUrl: `[mock-storage-dev]/${fileKey}`,
      fileKey,
    };
  }

  return {
    fileUrl: `[pending-storage-config]/${fileKey}`,
    fileKey,
  };
}

/**
 * Mail Delivery Adapter Interface & Implementation
 */
export async function sendNotificationEmail(
  payload: BusinessSubmissionPayload | CareersSubmissionPayload
): Promise<{ success: boolean }> {
  const contactToEmail = process.env.CONTACT_TO_EMAIL || 'info@maticglobal.com';
  const careersToEmail = process.env.CAREERS_TO_EMAIL || 'careers@maticglobal.com';
  const emailApiKey = process.env.EMAIL_PROVIDER_API_KEY;
  const fromEmail = process.env.FROM_EMAIL || 'no-reply@maticglobal.com';

  const isBusiness = payload.type === 'business';
  const targetInbox = isBusiness ? contactToEmail : careersToEmail;
  const subject = isBusiness
    ? `New business enquiry: ${payload.company}`
    : `New application: ${payload.fullName}, ${payload.applyingAs}`;

  // Log clean non-sensitive summary in development
  console.log(`[Contact Delivery] Prepared notification email to ${targetInbox} | Subject: "${subject}" | Ref: ${payload.referenceId}`);

  if (emailApiKey) {
    // TODO: Connect production email provider API (Resend, SendGrid, Postmark, AWS SES)
    // await resend.emails.send({ from: fromEmail, to: targetInbox, subject, text: ... })
    return { success: true };
  }

  // Graceful development simulation
  return { success: true };
}

/**
 * Auto-reply acknowledgment email to submitter
 */
export async function sendAutoReplyEmail(
  email: string,
  fullName: string,
  type: 'business' | 'careers',
  referenceId: string
): Promise<{ success: boolean }> {
  const firstName = fullName.split(' ')[0] || 'there';
  const subject = type === 'business'
    ? `Thank you for contacting Matic Global Solutions [Ref: ${referenceId}]`
    : `Application received: Matic Global Solutions [Ref: ${referenceId}]`;

  console.log(`[Contact Delivery] Prepared auto-reply to ${email} | Subject: "${subject}" | Ref: ${referenceId}`);

  // In production, trigger templated transactional auto-reply
  return { success: true };
}
