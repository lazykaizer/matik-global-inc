'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Send, Loader2, AlertCircle, FileCheck2 } from 'lucide-react';
import { CONTACT_CONSTANTS } from '@/lib/contactConstants';
import {
  businessEnquirySchema,
  isFreeMail,
  MAX_RFP_SIZE_BYTES,
  BusinessEnquiryValues,
} from '@/lib/contactValidation';
import { FormField } from './FormField';
import { ChipGroup } from './ChipGroup';
import { FileDropzone } from './FileDropzone';

interface BusinessEnquiryFormProps {
  onSuccess: (referenceId: string, firstName: string) => void;
  savedState?: Partial<BusinessEnquiryValues>;
  onStateChange?: (state: Partial<BusinessEnquiryValues>) => void;
}

export function BusinessEnquiryForm({
  onSuccess,
  savedState,
  onStateChange,
}: BusinessEnquiryFormProps) {
  // Form values state
  const [formData, setFormData] = useState<BusinessEnquiryValues>({
    type: 'business',
    fullName: savedState?.fullName || '',
    workEmail: savedState?.workEmail || '',
    phoneCountryCode: savedState?.phoneCountryCode || '+1',
    phone: savedState?.phone || '',
    company: savedState?.company || '',
    jobTitle: savedState?.jobTitle || '',
    industry: savedState?.industry || '',
    companySize: savedState?.companySize || '',
    serviceOfInterest: savedState?.serviceOfInterest || '',
    erpPlatforms: savedState?.erpPlatforms || [],
    timeline: savedState?.timeline || '',
    message: savedState?.message || '',
    consent: savedState?.consent || false,
    honeypot: '',
    submitTimestamp: 0,
  });

  const [rfpFile, setRfpFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorSummary, setErrorSummary] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mountTimeRef = useRef<number>(0);

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  // Input references for focusing first error
  const fullNameRef = useRef<HTMLInputElement>(null);
  const workEmailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  // Sync state to parent so tab switching doesn't lose data
  useEffect(() => {
    onStateChange?.(formData);
  }, [formData, onStateChange]);

  const handleChange = (field: keyof BusinessEnquiryValues, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const isFreeMailDetected = formData.workEmail && isFreeMail(formData.workEmail);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setErrorSummary(null);
    setErrors({});

    // Client-side Zod validation
    const currentTimestamp = mountTimeRef.current || Date.now();
    const submissionData = {
      ...formData,
      submitTimestamp: currentTimestamp,
    };

    const result = businessEnquirySchema.safeParse(submissionData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      const flattened = result.error.flatten().fieldErrors;
      for (const [key, messages] of Object.entries(flattened)) {
        if (messages && messages.length > 0) {
          fieldErrors[key] = messages[0];
        }
      }
      setErrors(fieldErrors);
      setErrorSummary('Please review and correct the highlighted fields below.');

      // Auto-focus first error field
      if (fieldErrors.fullName) fullNameRef.current?.focus();
      else if (fieldErrors.workEmail) workEmailRef.current?.focus();
      else if (fieldErrors.company) companyRef.current?.focus();
      else if (fieldErrors.serviceOfInterest) serviceRef.current?.focus();
      else if (fieldErrors.message) messageRef.current?.focus();
      else if (fieldErrors.consent) consentRef.current?.focus();
      else errorSummaryRef.current?.scrollIntoView({ behavior: 'smooth' });

      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append('type', 'business');
      payload.append('fullName', formData.fullName);
      payload.append('workEmail', formData.workEmail);
      payload.append('phoneCountryCode', formData.phoneCountryCode);
      if (formData.phone) payload.append('phone', formData.phone);
      payload.append('company', formData.company);
      if (formData.jobTitle) payload.append('jobTitle', formData.jobTitle);
      if (formData.industry) payload.append('industry', formData.industry);
      if (formData.companySize) payload.append('companySize', formData.companySize);
      payload.append('serviceOfInterest', formData.serviceOfInterest);
      if (formData.erpPlatforms) {
        formData.erpPlatforms.forEach((p) => payload.append('erpPlatforms', p));
      }
      if (formData.timeline) payload.append('timeline', formData.timeline);
      payload.append('message', formData.message);
      payload.append('consent', String(formData.consent));
      payload.append('honeypot', formData.honeypot || '');
      payload.append('submitTimestamp', String(currentTimestamp));

      if (rfpFile) {
        payload.append('attachment', rfpFile);
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: payload,
      });

      const json = await res.json();

      if (res.ok && json.success) {
        const firstName = formData.fullName.split(' ')[0] || formData.fullName;
        onSuccess(json.referenceId || 'MGS-BIZ-OK', firstName);
      } else {
        setErrorSummary(
          json.error || `Something went wrong. Please try again or email us directly at ${CONTACT_CONSTANTS.placeholders.email}.`
        );
      }
    } catch (err) {
      setErrorSummary(
        `Something went wrong. Please try again or email us directly at ${CONTACT_CONSTANTS.placeholders.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full p-6 sm:p-10 rounded-3xl frosted-glass border border-blue-500/25 shadow-[0_20px_50px_rgba(7,14,29,0.95)] flex flex-col gap-8">
      {/* Form Header */}
      <div className="flex flex-col gap-2 pb-2 border-b border-blue-500/15">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
          PROJECT ENQUIRY
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-text tracking-tight">
          Tell us about your project
        </h2>
        <p className="text-muted-text text-sm">
          Provide your enterprise requirements and we will assemble the right practice leads.
        </p>
      </div>

      {/* Global Error Summary Banner */}
      {errorSummary && (
        <div
          ref={errorSummaryRef}
          role="alert"
          aria-live="assertive"
          className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in"
        >
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="font-bold text-rose-200">Action Required</span>
            <span>{errorSummary}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
        {/* Honeypot field (hidden from view) */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={(e) => handleChange('honeypot', e.target.value)}
          className="sr-only"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Row 1: Full Name & Work Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField id="fullName" label="Full name" required error={errors.fullName}>
            <input
              ref={fullNameRef}
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="e.g. Alex Morgan"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border text-sm text-surface-text placeholder:text-muted-text/50 outline-none transition-all ${
                errors.fullName
                  ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500'
                  : 'border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40'
              }`}
            />
          </FormField>

          <FormField
            id="workEmail"
            label="Work email"
            required
            error={errors.workEmail}
            warning={
              isFreeMailDetected
                ? 'We recommend using your company work email for faster institutional onboarding.'
                : undefined
            }
          >
            <input
              ref={workEmailRef}
              id="workEmail"
              type="email"
              autoComplete="email"
              placeholder="alex@company.com"
              value={formData.workEmail}
              onChange={(e) => handleChange('workEmail', e.target.value)}
              className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border text-sm text-surface-text placeholder:text-muted-text/50 outline-none transition-all ${
                errors.workEmail
                  ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500'
                  : 'border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40'
              }`}
            />
          </FormField>
        </div>

        {/* Row 2: Phone with Country Code & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField id="phone" label="Phone" hint="Optional">
            <div className="flex items-center gap-2">
              <select
                id="phoneCountryCode"
                value={formData.phoneCountryCode}
                onChange={(e) => handleChange('phoneCountryCode', e.target.value)}
                className="min-h-[44px] px-2.5 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 text-surface-text text-xs sm:text-sm font-mono outline-none hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40 shrink-0"
                aria-label="Country Calling Code"
              >
                {CONTACT_CONSTANTS.countryCodes.map((c) => (
                  <option key={c.code} value={c.code} className="bg-[#050B1A] text-surface-text">
                    {c.code} ({c.country})
                  </option>
                ))}
              </select>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(555) 000-0000"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40 text-sm text-surface-text placeholder:text-muted-text/50 outline-none transition-all"
              />
            </div>
          </FormField>

          <FormField id="company" label="Company" required error={errors.company}>
            <input
              ref={companyRef}
              id="company"
              type="text"
              autoComplete="organization"
              placeholder="e.g. Acme Therapeutics"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
              className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border text-sm text-surface-text placeholder:text-muted-text/50 outline-none transition-all ${
                errors.company
                  ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500'
                  : 'border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40'
              }`}
            />
          </FormField>
        </div>

        {/* Row 3: Job Title & Industry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField id="jobTitle" label="Job title" hint="Optional">
            <input
              id="jobTitle"
              type="text"
              autoComplete="organization-title"
              placeholder="e.g. VP of Operations / Founder"
              value={formData.jobTitle}
              onChange={(e) => handleChange('jobTitle', e.target.value)}
              className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40 text-sm text-surface-text placeholder:text-muted-text/50 outline-none transition-all"
            />
          </FormField>

          <FormField id="industry" label="Industry" hint="Optional">
            <select
              id="industry"
              value={formData.industry}
              onChange={(e) => handleChange('industry', e.target.value)}
              className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40 text-sm text-surface-text outline-none transition-all"
            >
              <option value="" className="bg-[#050B1A] text-muted-text">
                Select your industry...
              </option>
              {CONTACT_CONSTANTS.business.industries.map((ind) => (
                <option key={ind} value={ind} className="bg-[#050B1A] text-surface-text">
                  {ind}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        {/* Row 4: Company Size & Service of Interest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField id="companySize" label="Company size" hint="Optional">
            <select
              id="companySize"
              value={formData.companySize}
              onChange={(e) => handleChange('companySize', e.target.value)}
              className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40 text-sm text-surface-text outline-none transition-all"
            >
              <option value="" className="bg-[#050B1A] text-muted-text">
                Select employee range...
              </option>
              {CONTACT_CONSTANTS.business.companySizes.map((size) => (
                <option key={size} value={size} className="bg-[#050B1A] text-surface-text">
                  {size} employees
                </option>
              ))}
            </select>
          </FormField>

          <FormField
            id="serviceOfInterest"
            label="Service of interest"
            required
            error={errors.serviceOfInterest}
          >
            <select
              ref={serviceRef}
              id="serviceOfInterest"
              value={formData.serviceOfInterest}
              onChange={(e) => handleChange('serviceOfInterest', e.target.value)}
              className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border text-sm text-surface-text outline-none transition-all ${
                errors.serviceOfInterest
                  ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500'
                  : 'border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40'
              }`}
            >
              <option value="" className="bg-[#050B1A] text-muted-text">
                Select primary service...
              </option>
              {CONTACT_CONSTANTS.business.servicesOfIterest.map((svc) => (
                <option key={svc} value={svc} className="bg-[#050B1A] text-surface-text">
                  {svc}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        {/* Conditional: ERP platform multi-select chip group if "ERP" is selected */}
        {formData.serviceOfInterest === 'ERP' && (
          <div className="p-4 sm:p-5 rounded-2xl bg-blue-950/30 border border-ice-cyan/30 flex flex-col gap-2 animate-in fade-in duration-200">
            <ChipGroup
              label="ERP platform (optional)"
              options={CONTACT_CONSTANTS.business.erpPlatforms}
              selected={formData.erpPlatforms || []}
              onChange={(vals) => handleChange('erpPlatforms', vals)}
              multiple
            />
          </div>
        )}

        {/* Row 5: Timeline */}
        <FormField id="timeline" label="Timeline" hint="Optional">
          <select
            id="timeline"
            value={formData.timeline}
            onChange={(e) => handleChange('timeline', e.target.value)}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40 text-sm text-surface-text outline-none transition-all"
          >
            <option value="" className="bg-[#050B1A] text-muted-text">
              When do you plan to kick off?
            </option>
            {CONTACT_CONSTANTS.business.timelines.map((time) => (
              <option key={time} value={time} className="bg-[#050B1A] text-surface-text">
                {time}
              </option>
            ))}
          </select>
        </FormField>

        {/* Row 6: Message with Live Character Counter */}
        <FormField
          id="message"
          label="Message"
          required
          error={errors.message}
          hint={`${formData.message.length} / 2000 chars (min 20)`}
        >
          <textarea
            ref={messageRef}
            id="message"
            rows={4}
            maxLength={2000}
            placeholder="Tell us about your operational context, existing systems, compliance mandates, or timeline expectations..."
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className={`w-full p-4 rounded-xl bg-[#050B1A]/80 border text-sm text-surface-text placeholder:text-muted-text/50 outline-none resize-y transition-all ${
              errors.message
                ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500'
                : 'border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40'
            }`}
          />
        </FormField>

        {/* Row 7: Optional Attachment (RFP or Brief) */}
        <FileDropzone
          label="Project brief or RFP (optional)"
          allowedExtensions={['.pdf', '.doc', '.docx']}
          maxSizeBytes={MAX_RFP_SIZE_BYTES}
          maxSizeLabel="10 MB"
          file={rfpFile}
          onFileChange={setRfpFile}
          hint="PDF, DOC, DOCX up to 10 MB"
        />

        {/* Row 8: Consent Checkbox */}
        <div className="flex flex-col gap-1 pt-1">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              ref={consentRef}
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={(e) => handleChange('consent', e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-blue-500/40 bg-[#050B1A] text-ice-cyan focus:ring-ice-cyan focus:ring-offset-0 cursor-pointer shrink-0"
            />
            <span className="text-xs text-muted-text leading-relaxed">
              I agree to the{' '}
              <Link href="/privacypolicy" className="text-ice-cyan underline hover:text-white transition-colors">
                Privacy Policy
              </Link>{' '}
              and consent to Matic Global Solutions contacting me about my enquiry.*
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-rose-400 font-mono flex items-center gap-1 mt-0.5 ml-7">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.consent}</span>
            </p>
          )}
        </div>

        {/* Submit Button & Response Note */}
        <div className="flex flex-col items-center sm:items-start gap-3 pt-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto min-h-[48px] px-9 py-3.5 rounded-full font-display text-sm font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] shadow-[0_0_24px_rgba(122,209,250,0.4)] hover:shadow-[0_0_36px_rgba(122,209,250,0.7)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#050B1A]" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#050B1A]" />
                <span>Send Message</span>
              </>
            )}
          </button>
          <span className="text-xs font-mono text-muted-text">
            We reply within one business day.
          </span>
        </div>
      </form>
    </div>
  );
}
