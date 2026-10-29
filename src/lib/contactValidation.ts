import { z } from 'zod';
import { CONTACT_CONSTANTS } from './contactConstants';

// Business Enquiry Validation Schema
export const businessEnquirySchema = z.object({
  type: z.literal('business').default('business'),
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters)'),
  workEmail: z
    .string()
    .trim()
    .email('Please enter a valid work email address'),
  phoneCountryCode: z.string().default('+1'),
  phone: z.string().trim().optional().or(z.literal('')),
  company: z
    .string()
    .trim()
    .min(2, 'Please enter your company name'),
  jobTitle: z.string().trim().optional().or(z.literal('')),
  industry: z.string().optional().or(z.literal('')),
  companySize: z.string().optional().or(z.literal('')),
  serviceOfInterest: z
    .string()
    .min(1, 'Please select a service of interest'),
  erpPlatforms: z.array(z.string()).optional().default([]),
  timeline: z.string().optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(20, 'Please provide more details (minimum 20 characters)')
    .max(2000, 'Message cannot exceed 2000 characters'),
  consent: z
    .boolean()
    .refine((val) => val === true, 'You must agree to the Privacy Policy to proceed'),
  honeypot: z
    .string()
    .max(0, 'Spam detection triggered')
    .optional()
    .or(z.literal('')),
  submitTimestamp: z.number().optional(),
});

export type BusinessEnquiryValues = z.infer<typeof businessEnquirySchema>;

// Work With Us Step 1 Schema
export const careersStep1Schema = z.object({
  applyingAs: z.enum(['Full-time', 'Freelancer / Contractor', 'Internship'] as const, {
    message: 'Please select how you are applying',
  }),
  areasOfInterest: z
    .array(z.string())
    .min(1, 'Please select at least one area of interest'),
  roleInterest: z.string().trim().optional().or(z.literal('')),
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address'),
  phoneCountryCode: z.string().default('+1'),
  phone: z
    .string()
    .trim()
    .min(5, 'Please enter a valid phone number'),
  currentLocation: z
    .string()
    .trim()
    .min(2, 'Please enter your current city and country'),
  linkedInUrl: z
    .string()
    .trim()
    .optional()
    .or(z.literal(''))
    .refine(
      (val) => !val || /^https?:\/\/(www\.)?linkedin\.com\/.+/i.test(val),
      'Please enter a valid LinkedIn URL (https://linkedin.com/...)'
    ),
  portfolioUrl: z
    .string()
    .trim()
    .optional()
    .or(z.literal(''))
    .refine(
      (val) => !val || /^https?:\/\/.+/i.test(val),
      'Please enter a valid URL starting with http:// or https://'
    ),
});

// Work With Us Step 2 Schema
export const careersStep2Schema = z.object({
  experienceYears: z
    .string()
    .min(1, 'Please select your total years of experience'),
  currentRoleCompany: z.string().trim().optional().or(z.literal('')),
  primarySkills: z
    .array(z.string())
    .min(1, 'Please add at least 1 primary skill')
    .max(15, 'Maximum 15 skills allowed'),
  certifications: z.string().trim().optional().or(z.literal('')),
  highestEducation: z.string().optional().or(z.literal('')),
});

// Work With Us Step 3 Schema
export const careersStep3Schema = z.object({
  earliestStartDate: z.string().optional().or(z.literal('')),
  noticePeriod: z.string().optional().or(z.literal('')),
  engagementPreference: z.string().optional().or(z.literal('')),
  hoursPerWeek: z.string().optional().or(z.literal('')),
  expectedRate: z.string().optional().or(z.literal('')),
  rateCurrency: z.string().default('USD'),
  rateUnit: z.string().default('per hour'),
  workAuthorization: z.string().optional().or(z.literal('')),
  coverLetterText: z
    .string()
    .max(1500, 'Cover letter text must be under 1500 characters')
    .optional()
    .or(z.literal('')),
  whyMatic: z
    .string()
    .max(1000, 'Text must be under 1000 characters')
    .optional()
    .or(z.literal('')),
  howHeard: z.string().optional().or(z.literal('')),
  consent: z
    .boolean()
    .refine((val) => val === true, 'You must consent to data processing to apply'),
  talentNetworkOptIn: z.boolean().optional().default(false),
  honeypot: z
    .string()
    .max(0, 'Spam detection triggered')
    .optional()
    .or(z.literal('')),
  submitTimestamp: z.number().optional(),
});

// Full Careers Schema (Combines all steps)
export const fullCareersSchema = z.object({
  type: z.literal('careers').default('careers'),
  ...careersStep1Schema.shape,
  ...careersStep2Schema.shape,
  ...careersStep3Schema.shape,
});

export type CareersFormValues = z.infer<typeof fullCareersSchema>;

// Allowed File Types
export const ALLOWED_DOCUMENT_MIMES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export const ALLOWED_ADDITIONAL_MIMES = [
  ...ALLOWED_DOCUMENT_MIMES,
  'image/png',
  'image/jpeg',
  'image/jpg',
];

export const MAX_RFP_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB
export const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

export function isFreeMail(email: string): boolean {
  if (!email || !email.includes('@')) return false;
  const domain = email.split('@')[1]?.toLowerCase();
  return CONTACT_CONSTANTS.freeMailDomains.some((d) => domain === d || domain.endsWith('.' + d));
}
