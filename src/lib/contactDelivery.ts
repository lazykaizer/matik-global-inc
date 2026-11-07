import { Resend } from 'resend';

/**
 * Contact Delivery Adapters
 * Handles email notifications and file storage with Resend API
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

export interface AssessmentSubmissionPayload {
  type: 'assessment';
  referenceId: string;
  serviceType: string;
  serviceTitle: string;
  fullName: string;
  workEmail: string;
  phone?: string;
  companyName?: string;
  timeline?: string;
  details: Record<string, string | string[]>;
}

export function generateReferenceId(type: string): string {
  let prefix = 'MGS-LEAD';
  if (type === 'business') prefix = 'MGS-BIZ';
  else if (type === 'careers') prefix = 'MGS-CAR';
  else if (type === 'aiml') prefix = 'MGS-AIML';
  else if (type === 'erp') prefix = 'MGS-ERP';
  else if (type === 'applications' || type === 'appdev') prefix = 'MGS-APP';
  else if (type === 'compliance') prefix = 'MGS-CMP';
  else if (type === 'accountingtax' || type === 'acctax') prefix = 'MGS-FIN';
  else if (type === 'assessment') prefix = 'MGS-ASSESS';

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

  const safeFilename = file.filename.replace(/[^a-zA-Z0-9._-]/g, '_');
  const fileKey = `submissions/${referenceId}/${Date.now()}_${safeFilename}`;

  if (storageBucket && storageKey) {
    return {
      fileUrl: `https://${storageBucket}.storage.provider/${fileKey}`,
      fileKey,
    };
  }

  // Development mock fallback
  if (process.env.NODE_ENV !== 'production') {
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
 * Resend Client initialization
 */
function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY || process.env.EMAIL_PROVIDER_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

/**
 * Mail Delivery Adapter Interface & Implementation via Resend
 */
export async function sendNotificationEmail(
  payload: BusinessSubmissionPayload | CareersSubmissionPayload | AssessmentSubmissionPayload
): Promise<{ success: boolean; error?: string }> {
  const contactToEmail = process.env.CONTACT_TO_EMAIL || 'kaizer400051@gmail.com';
  const careersToEmail = process.env.CAREERS_TO_EMAIL || 'kaizer400051@gmail.com';
  const fromEmail = process.env.FROM_EMAIL || 'Matic Global <onboarding@resend.dev>';

  let targetInbox = contactToEmail;
  let subject = '';

  if (payload.type === 'business') {
    targetInbox = contactToEmail;
    subject = `[New Lead] ${payload.company} — ${payload.serviceOfInterest} (${payload.referenceId})`;
  } else if (payload.type === 'careers') {
    targetInbox = careersToEmail;
    subject = `[New Applicant] ${payload.fullName} — ${payload.applyingAs} (${payload.referenceId})`;
  } else if (payload.type === 'assessment') {
    targetInbox = contactToEmail;
    subject = `[Assessment Booked] ${payload.fullName} (${payload.companyName || 'New Lead'}) — ${payload.serviceTitle} (${payload.referenceId})`;
  }

  console.log(`[Contact Delivery] Sending email to ${targetInbox} | Subject: "${subject}" | Ref: ${payload.referenceId}`);

  const resend = getResendClient();
  if (!resend) {
    console.warn('[Contact Delivery] No RESEND_API_KEY set; running in local mock mode.');
    return { success: true };
  }

  try {
    const attachments: Array<{ filename: string; content: Buffer }> = [];
    let htmlContent = '';
    let replyTo = '';

    if (payload.type === 'business') {
      replyTo = payload.workEmail;

      if (payload.attachment?.buffer) {
        attachments.push({
          filename: payload.attachment.filename,
          content: payload.attachment.buffer,
        });
      }

      htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6fa; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: #070e1d; padding: 24px 32px; color: #ffffff; }
    .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; color: #7FD6FF; }
    .header p { margin: 0; font-size: 13px; color: #91A3C4; }
    .body { padding: 32px; }
    .badge { display: inline-block; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; text-transform: uppercase; background: #e0f2fe; color: #0284c7; margin-bottom: 20px; }
    .ref-box { background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 12px 16px; margin-bottom: 24px; font-size: 13px; color: #64748b; }
    .ref-id { font-family: monospace; font-weight: 700; color: #0f172a; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    th { text-align: left; padding: 10px 12px; font-size: 12px; text-transform: uppercase; color: #64748b; border-bottom: 1px solid #e2e8f0; width: 35%; }
    td { padding: 10px 12px; font-size: 14px; color: #1e293b; border-bottom: 1px solid #e2e8f0; font-weight: 500; }
    .message-box { background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 4px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 20px; white-space: pre-wrap; }
    .footer { background: #f8fafc; padding: 16px 32px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Matic Global Solutions</h1>
      <p>New Business Lead / Project Inquiry</p>
    </div>
    <div class="body">
      <span class="badge">Business Enquiry</span>
      <div class="ref-box">Reference ID: <span class="ref-id">${payload.referenceId}</span></div>
      <table>
        <tr><th>Full Name</th><td>${payload.fullName}</td></tr>
        <tr><th>Work Email</th><td><a href="mailto:${payload.workEmail}" style="color: #2563eb;">${payload.workEmail}</a></td></tr>
        <tr><th>Phone</th><td>${payload.phone || 'Not provided'}</td></tr>
        <tr><th>Company</th><td><strong>${payload.company}</strong></td></tr>
        <tr><th>Job Title</th><td>${payload.jobTitle || 'Not provided'}</td></tr>
        <tr><th>Industry</th><td>${payload.industry || 'Not provided'}</td></tr>
        <tr><th>Company Size</th><td>${payload.companySize || 'Not provided'}</td></tr>
        <tr><th>Service of Interest</th><td><strong style="color: #0284c7;">${payload.serviceOfInterest}</strong></td></tr>
        ${payload.serviceOfInterest === 'ERP' && payload.erpPlatforms && payload.erpPlatforms.length > 0 ? `<tr><th>ERP Platforms</th><td>${payload.erpPlatforms.join(', ')}</td></tr>` : ''}
        <tr><th>Timeline</th><td>${payload.timeline || 'Not specified'}</td></tr>
      </table>
      <h3 style="font-size: 14px; margin-bottom: 8px; color: #0f172a;">Project Scope / Message:</h3>
      <div class="message-box">${payload.message}</div>
      ${payload.attachment ? `<p style="font-size: 13px; color: #0284c7; font-weight: 600;">📎 Attached RFP / Brief: ${payload.attachment.filename} (${Math.round(payload.attachment.sizeBytes / 1024)} KB)</p>` : ''}
    </div>
    <div class="footer">
      Sent from Matic Global Contact System • Reply directly to this email to reach the client.
    </div>
  </div>
</body>
</html>`;
    } else if (payload.type === 'careers') {
      replyTo = payload.email;

      if (payload.resumeFile?.buffer) {
        attachments.push({
          filename: payload.resumeFile.filename,
          content: payload.resumeFile.buffer,
        });
      }
      if (payload.coverLetterFile?.buffer) {
        attachments.push({
          filename: payload.coverLetterFile.filename,
          content: payload.coverLetterFile.buffer,
        });
      }
      if (payload.additionalFiles) {
        payload.additionalFiles.forEach((file) => {
          if (file.buffer) {
            attachments.push({
              filename: file.filename,
              content: file.buffer,
            });
          }
        });
      }

      htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6fa; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: #070e1d; padding: 24px 32px; color: #ffffff; }
    .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; color: #7FD6FF; }
    .header p { margin: 0; font-size: 13px; color: #91A3C4; }
    .body { padding: 32px; }
    .badge { display: inline-block; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; text-transform: uppercase; background: #ecfdf5; color: #059669; margin-bottom: 20px; }
    .ref-box { background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 12px 16px; margin-bottom: 24px; font-size: 13px; color: #64748b; }
    .ref-id { font-family: monospace; font-weight: 700; color: #0f172a; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    th { text-align: left; padding: 10px 12px; font-size: 12px; text-transform: uppercase; color: #64748b; border-bottom: 1px solid #e2e8f0; width: 35%; }
    td { padding: 10px 12px; font-size: 14px; color: #1e293b; border-bottom: 1px solid #e2e8f0; font-weight: 500; }
    .message-box { background: #f8fafc; border-left: 4px solid #10b981; border-radius: 4px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; margin-bottom: 20px; white-space: pre-wrap; }
    .footer { background: #f8fafc; padding: 16px 32px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Matic Global Solutions</h1>
      <p>New Career Application / Talent Submission</p>
    </div>
    <div class="body">
      <span class="badge">Career Application</span>
      <div class="ref-box">Reference ID: <span class="ref-id">${payload.referenceId}</span></div>
      <table>
        <tr><th>Candidate Name</th><td><strong>${payload.fullName}</strong></td></tr>
        <tr><th>Email</th><td><a href="mailto:${payload.email}" style="color: #2563eb;">${payload.email}</a></td></tr>
        <tr><th>Phone</th><td>${payload.phone}</td></tr>
        <tr><th>Applying As</th><td><strong>${payload.applyingAs}</strong></td></tr>
        <tr><th>Role / Interest</th><td>${payload.roleInterest || payload.areasOfInterest?.join(', ') || 'Not specified'}</td></tr>
        <tr><th>Location</th><td>${payload.currentLocation}</td></tr>
        <tr><th>Experience</th><td>${payload.experienceYears}</td></tr>
        <tr><th>Current Role</th><td>${payload.currentRoleCompany || 'Not provided'}</td></tr>
        <tr><th>Primary Skills</th><td>${payload.primarySkills?.join(', ') || 'Not specified'}</td></tr>
        <tr><th>LinkedIn</th><td>${payload.linkedInUrl ? `<a href="${payload.linkedInUrl}" target="_blank" style="color: #0284c7;">${payload.linkedInUrl}</a>` : 'Not provided'}</td></tr>
        <tr><th>Portfolio / GitHub</th><td>${payload.portfolioUrl ? `<a href="${payload.portfolioUrl}" target="_blank" style="color: #0284c7;">${payload.portfolioUrl}</a>` : 'Not provided'}</td></tr>
        <tr><th>Expected Rate / Comp</th><td>${payload.expectedRate ? `${payload.rateCurrency || 'USD'} ${payload.expectedRate} ${payload.rateUnit || ''}` : 'Open'}</td></tr>
        <tr><th>Earliest Start Date</th><td>${payload.earliestStartDate || payload.noticePeriod || 'Immediate'}</td></tr>
        <tr><th>Work Auth</th><td>${payload.workAuthorization || 'Not specified'}</td></tr>
      </table>
      ${payload.coverLetterText ? `
        <h3 style="font-size: 14px; margin-bottom: 8px; color: #0f172a;">Cover Letter:</h3>
        <div class="message-box">${payload.coverLetterText}</div>
      ` : ''}
      ${payload.whyMatic ? `
        <h3 style="font-size: 14px; margin-bottom: 8px; color: #0f172a;">Why Matic:</h3>
        <div class="message-box">${payload.whyMatic}</div>
      ` : ''}
      ${payload.resumeFile ? `<p style="font-size: 13px; color: #059669; font-weight: 600;">📎 Resume Attached: ${payload.resumeFile.filename} (${Math.round(payload.resumeFile.sizeBytes / 1024)} KB)</p>` : ''}
    </div>
    <div class="footer">
      Sent from Matic Global Careers System • Reply directly to this email to reach the applicant.
    </div>
  </div>
</body>
</html>`;
    } else if (payload.type === 'assessment') {
      replyTo = payload.workEmail;

      const detailRows = Object.entries(payload.details || {})
        .map(([k, v]) => `<tr><th>${k}</th><td>${Array.isArray(v) ? v.join(', ') : (v || 'Not specified')}</td></tr>`)
        .join('');

      htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6fa; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
    .header { background: #070e1d; padding: 24px 32px; color: #ffffff; border-bottom: 2px solid #3d8bff; }
    .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 700; color: #7FD6FF; }
    .header p { margin: 0; font-size: 13px; color: #91A3C4; }
    .body { padding: 32px; }
    .badge { display: inline-block; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 600; text-transform: uppercase; background: #e0f2fe; color: #0284c7; margin-bottom: 20px; }
    .ref-box { background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 12px 16px; margin-bottom: 24px; font-size: 13px; color: #64748b; }
    .ref-id { font-family: monospace; font-weight: 700; color: #0f172a; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    th { text-align: left; padding: 10px 12px; font-size: 12px; text-transform: uppercase; color: #64748b; border-bottom: 1px solid #e2e8f0; width: 40%; }
    td { padding: 10px 12px; font-size: 14px; color: #1e293b; border-bottom: 1px solid #e2e8f0; font-weight: 500; }
    .footer { background: #f8fafc; padding: 16px 32px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Matic Global Solutions</h1>
      <p>Assessment Booking & Diagnostic Submission</p>
    </div>
    <div class="body">
      <span class="badge">${payload.serviceTitle}</span>
      <div class="ref-box">Reference ID: <span class="ref-id">${payload.referenceId}</span></div>
      <table>
        <tr><th>Client Name</th><td><strong>${payload.fullName}</strong></td></tr>
        <tr><th>Work Email</th><td><a href="mailto:${payload.workEmail}" style="color: #2563eb;">${payload.workEmail}</a></td></tr>
        <tr><th>Company</th><td><strong>${payload.companyName || 'Not provided'}</strong></td></tr>
        <tr><th>Service Stream</th><td><strong style="color: #0284c7;">${payload.serviceTitle}</strong></td></tr>
        ${payload.timeline ? `<tr><th>Target Timeline</th><td>${payload.timeline}</td></tr>` : ''}
        ${detailRows}
      </table>
    </div>
    <div class="footer">
      Sent from Matic Global Solutions Assessment Diagnostic Engine • Reply to reach the lead.
    </div>
  </div>
</body>
</html>`;
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: targetInbox,
      replyTo: replyTo || undefined,
      subject,
      html: htmlContent,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('[Contact Delivery] Resend API Error:', error);
      return { success: false, error: error.message };
    }

    console.log('[Contact Delivery] Email successfully sent via Resend! ID:', data?.id);
    return { success: true };
  } catch (err: any) {
    console.error('[Contact Delivery] Unexpected error sending email via Resend:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Auto-reply acknowledgment email to submitter
 */
export async function sendAutoReplyEmail(
  email: string,
  fullName: string,
  type: 'business' | 'careers' | 'assessment',
  referenceId: string,
  serviceTitle?: string
): Promise<{ success: boolean }> {
  const resend = getResendClient();
  if (!resend) return { success: true };

  const firstName = fullName.split(' ')[0] || 'there';
  const fromEmail = process.env.FROM_EMAIL || 'Matic Global <onboarding@resend.dev>';
  const subject = type === 'business'
    ? `We've received your inquiry — Matic Global Solutions [Ref: ${referenceId}]`
    : type === 'careers'
    ? `Application received — Matic Global Solutions [Ref: ${referenceId}]`
    : `Assessment request received: ${serviceTitle || 'Diagnostic'} — Matic Global Solutions [Ref: ${referenceId}]`;

  const isBusiness = type === 'business';
  const isAssessment = type === 'assessment';

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050b1a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #050b1a; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,0.35);">
          
          <!-- Branded Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #070e1d 0%, #0d1e3d 100%); padding: 36px 32px; border-bottom: 2px solid #1988EB;">
              <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0 0 6px 0; letter-spacing: -0.3px;">
                Matic Global <span style="color: #7FD6FF;">Solutions</span>
              </h1>
              <p style="color: #91A3C4; font-size: 13px; margin: 0; font-weight: 400;">
                Enterprise Digital Transformation, AI & Hyperscaler Systems
              </p>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding: 36px 32px;">
              <h2 style="font-size: 18px; font-weight: 700; color: #0f172a; margin: 0 0 16px 0;">
                Hello ${firstName},
              </h2>

              <p style="font-size: 15px; line-height: 1.6; color: #475569; margin: 0 0 24px 0;">
                ${
                  isAssessment
                    ? `Thank you for booking an assessment for <strong>${serviceTitle || 'our service stream'}</strong> with <strong>Matic Global Solutions</strong>. We have received your diagnostic submission and our senior practice architects are reviewing your requirements.`
                    : isBusiness
                    ? 'Thank you for contacting <strong>Matic Global Solutions</strong>. We have successfully received your project inquiry and requirements.'
                    : 'Thank you for your interest in joining <strong>Matic Global Solutions</strong>. We have received your application materials and resume.'
                }
              </p>

              <!-- Reference Badge Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: #f0f7ff; border: 1px solid #bfdbfe; border-radius: 12px; margin-bottom: 28px;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #0369a1; margin-bottom: 4px;">
                      Your Reference Tracking ID
                    </div>
                    <div style="font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace; font-size: 18px; font-weight: 700; color: #0c4a6e;">
                      ${referenceId}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Next Steps Roadmap -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 28px;">
                <tr>
                  <td style="padding: 22px 24px;">
                    <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: #334155; margin-bottom: 16px;">
                      What happens next?
                    </div>

                    ${
                      isAssessment
                        ? `
                        <div style="margin-bottom: 12px; font-size: 13px; line-height: 1.5; color: #475569;">
                          <strong style="color: #0f172a;">1. Diagnostic Evaluation:</strong> Our principal practice lead evaluates your technology stack and scope criteria.
                        </div>
                        <div style="margin-bottom: 12px; font-size: 13px; line-height: 1.5; color: #475569;">
                          <strong style="color: #0f172a;">2. Production Roadmap:</strong> We will reach out within <strong>1 business day</strong> with an initial feasibility roadmap and schedule your discovery session.
                        </div>
                        <div style="font-size: 13px; line-height: 1.5; color: #475569;">
                          <strong style="color: #0f172a;">3. Enterprise NDA:</strong> All shared technical information and project context are protected under mutual non-disclosure.
                        </div>
                        `
                        : isBusiness
                        ? `
                        <div style="margin-bottom: 12px; font-size: 13px; line-height: 1.5; color: #475569;">
                          <strong style="color: #0f172a;">1. Architecture Review:</strong> Our senior enterprise consultants review your scope and platform considerations.
                        </div>
                        <div style="margin-bottom: 12px; font-size: 13px; line-height: 1.5; color: #475569;">
                          <strong style="color: #0f172a;">2. Discovery Session:</strong> We will reach out within <strong>1 business day</strong> to align on timelines and schedule a technical discovery call.
                        </div>
                        <div style="font-size: 13px; line-height: 1.5; color: #475569;">
                          <strong style="color: #0f172a;">3. Confidentiality:</strong> All project data and shared RFPs are held strictly under mutual non-disclosure standards.
                        </div>
                        `
                        : `
                        <div style="margin-bottom: 12px; font-size: 13px; line-height: 1.5; color: #475569;">
                          <strong style="color: #0f172a;">1. Profile Evaluation:</strong> Our engineering talent team assesses your skill profile against current project needs.
                        </div>
                        <div style="margin-bottom: 12px; font-size: 13px; line-height: 1.5; color: #475569;">
                          <strong style="color: #0f172a;">2. Next Steps:</strong> If your experience aligns with our requirements, our recruiter will contact you for an introductory discussion.
                        </div>
                        <div style="font-size: 13px; line-height: 1.5; color: #475569;">
                          <strong style="color: #0f172a;">3. Talent Network:</strong> Even if there is no immediate match, your profile remains safely in our active talent directory for upcoming openings.
                        </div>
                        `
                    }
                  </td>
                </tr>
              </table>

              <p style="font-size: 14px; color: #64748b; line-height: 1.5; margin: 0 0 6px 0;">
                If you have immediate questions, simply reply directly to this email or write to us at <a href="mailto:info@maticglobal.com" style="color: #0284c7; text-decoration: none; font-weight: 600;">info@maticglobal.com</a>.
              </p>

              <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid #f1f5f9;">
                <p style="margin: 0; font-size: 14px; font-weight: 600; color: #0f172a;">
                  Warm regards,
                </p>
                <p style="margin: 2px 0 0 0; font-size: 13px; color: #64748b;">
                  The Matic Global Solutions Team
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.6;">
                © ${new Date().getFullYear()} Matic Global Solutions Inc. All rights reserved.<br/>
                Enterprise AI, Cloud & ERP Advisory Services
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject,
      html,
    });
    console.log(`[Contact Delivery] Auto-reply confirmation email sent to ${email}`);
  } catch (err: any) {
    console.warn('[Contact Delivery] Auto-reply note (domain unverified for external recipient):', err?.message || err);
  }

  return { success: true };
}
