'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Send,
  Loader2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Edit2,
  FileText,
  CheckCircle2,
  Paperclip,
  X,
} from 'lucide-react';
import { CONTACT_CONSTANTS } from '@/lib/contactConstants';
import {
  careersStep1Schema,
  careersStep2Schema,
  careersStep3Schema,
  fullCareersSchema,
  MAX_RESUME_SIZE_BYTES,
  CareersFormValues,
} from '@/lib/contactValidation';
import { FormField } from './FormField';
import { ChipGroup } from './ChipGroup';
import { TagInput } from './TagInput';
import { FileDropzone } from './FileDropzone';
import { Stepper, CareerStep } from './Stepper';

interface WorkWithUsFormProps {
  onSuccess: (referenceId: string, firstName: string) => void;
  savedState?: Partial<CareersFormValues>;
  onStateChange?: (state: Partial<CareersFormValues>) => void;
}

export function WorkWithUsForm({
  onSuccess,
  savedState,
  onStateChange,
}: WorkWithUsFormProps) {
  const [currentStep, setCurrentStep] = useState<CareerStep>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // In-memory form state
  const [formData, setFormData] = useState<CareersFormValues>({
    type: 'careers',
    applyingAs: (savedState?.applyingAs as any) || 'Full-time',
    areasOfInterest: savedState?.areasOfInterest || ['AI and ML'],
    roleInterest: savedState?.roleInterest || '',
    fullName: savedState?.fullName || '',
    email: savedState?.email || '',
    phoneCountryCode: savedState?.phoneCountryCode || '+1',
    phone: savedState?.phone || '',
    currentLocation: savedState?.currentLocation || '',
    linkedInUrl: savedState?.linkedInUrl || '',
    portfolioUrl: savedState?.portfolioUrl || '',
    experienceYears: savedState?.experienceYears || '',
    currentRoleCompany: savedState?.currentRoleCompany || '',
    primarySkills: savedState?.primarySkills || [],
    certifications: savedState?.certifications || '',
    highestEducation: savedState?.highestEducation || '',
    earliestStartDate: savedState?.earliestStartDate || '',
    noticePeriod: savedState?.noticePeriod || '',
    engagementPreference: savedState?.engagementPreference || 'Hourly',
    hoursPerWeek: savedState?.hoursPerWeek || '',
    expectedRate: savedState?.expectedRate || '',
    rateCurrency: savedState?.rateCurrency || 'USD',
    rateUnit: savedState?.rateUnit || 'per hour',
    workAuthorization: savedState?.workAuthorization || '',
    coverLetterText: savedState?.coverLetterText || '',
    whyMatic: savedState?.whyMatic || '',
    howHeard: savedState?.howHeard || '',
    consent: savedState?.consent || false,
    talentNetworkOptIn: savedState?.talentNetworkOptIn ?? true,
    honeypot: '',
    submitTimestamp: 0,
  });

  // Files in memory
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [additionalFiles, setAdditionalFiles] = useState<File[]>([]);
  const [coverInputMode, setCoverInputMode] = useState<'text' | 'file'>('text');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorSummary, setErrorSummary] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mountTimeRef = useRef<number>(0);

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  // Sync state to parent so tab switching doesn't lose data
  useEffect(() => {
    onStateChange?.(formData);
  }, [formData, onStateChange]);

  const handleChange = (field: keyof CareersFormValues, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  // Compute skill suggestions dynamically based on selected areas
  const dynamicSuggestions = React.useMemo(() => {
    const list: string[] = [];
    formData.areasOfInterest.forEach((area) => {
      const match = CONTACT_CONSTANTS.careers.skillSuggestions[area];
      if (match) list.push(...match);
    });
    return Array.from(new Set(list));
  }, [formData.areasOfInterest]);

  // Step 1 validation
  const validateStep1 = () => {
    const res = careersStep1Schema.safeParse({
      applyingAs: formData.applyingAs,
      areasOfInterest: formData.areasOfInterest,
      roleInterest: formData.roleInterest,
      fullName: formData.fullName,
      email: formData.email,
      phoneCountryCode: formData.phoneCountryCode,
      phone: formData.phone,
      currentLocation: formData.currentLocation,
      linkedInUrl: formData.linkedInUrl,
      portfolioUrl: formData.portfolioUrl,
    });

    if (!res.success) {
      const errMap: Record<string, string> = {};
      const flat = res.error.flatten().fieldErrors;
      for (const [k, v] of Object.entries(flat)) {
        if (v && v.length > 0) errMap[k] = v[0];
      }
      setErrors(errMap);
      setErrorSummary('Please complete all required fields in Step 1.');
      return false;
    }
    setErrors({});
    setErrorSummary(null);
    return true;
  };

  // Step 2 validation
  const validateStep2 = () => {
    const res = careersStep2Schema.safeParse({
      experienceYears: formData.experienceYears,
      currentRoleCompany: formData.currentRoleCompany,
      primarySkills: formData.primarySkills,
      certifications: formData.certifications,
      highestEducation: formData.highestEducation,
    });

    if (!res.success) {
      const errMap: Record<string, string> = {};
      const flat = res.error.flatten().fieldErrors;
      for (const [k, v] of Object.entries(flat)) {
        if (v && v.length > 0) errMap[k] = v[0];
      }
      setErrors(errMap);
      setErrorSummary('Please complete all required fields in Step 2.');
      return false;
    }
    setErrors({});
    setErrorSummary(null);
    return true;
  };

  // Step 3 validation
  const validateStep3 = () => {
    const errMap: Record<string, string> = {};

    if (!resumeFile) {
      errMap.resume = 'Please upload your resume (PDF, DOC, or DOCX up to 5 MB)';
    }

    const res = careersStep3Schema.safeParse({
      earliestStartDate: formData.earliestStartDate,
      noticePeriod: formData.noticePeriod,
      engagementPreference: formData.engagementPreference,
      hoursPerWeek: formData.hoursPerWeek,
      expectedRate: formData.expectedRate,
      rateCurrency: formData.rateCurrency,
      rateUnit: formData.rateUnit,
      workAuthorization: formData.workAuthorization,
      coverLetterText: formData.coverLetterText,
      whyMatic: formData.whyMatic,
      howHeard: formData.howHeard,
      consent: formData.consent,
      talentNetworkOptIn: formData.talentNetworkOptIn,
      honeypot: formData.honeypot,
    });

    if (!res.success) {
      const flat = res.error.flatten().fieldErrors;
      for (const [k, v] of Object.entries(flat)) {
        if (v && v.length > 0) errMap[k] = v[0];
      }
    }

    if (Object.keys(errMap).length > 0) {
      setErrors(errMap);
      setErrorSummary('Please check the required fields and consent in Step 3.');
      return false;
    }

    setErrors({});
    setErrorSummary(null);
    return true;
  };

  // Next Step handler
  const handleNext = () => {
    if (currentStep === 1) {
      if (!validateStep1()) return;
      setCompletedSteps((prev) => Array.from(new Set([...prev, 1])));
      setCurrentStep(2);
      containerRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (currentStep === 2) {
      if (!validateStep2()) return;
      setCompletedSteps((prev) => Array.from(new Set([...prev, 2])));
      setCurrentStep(3);
      containerRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (currentStep === 3) {
      if (!validateStep3()) return;
      setCompletedSteps((prev) => Array.from(new Set([...prev, 3])));
      setCurrentStep(4); // Move to Review
      containerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Back Step handler
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as CareerStep);
      containerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Direct Jump from Review
  const jumpToStep = (step: CareerStep) => {
    setCurrentStep(step);
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Add additional file (up to 2 files)
  const handleAddAdditionalFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFile = e.target.files[0];
      if (additionalFiles.length >= 2) return;
      if (newFile.size > MAX_RESUME_SIZE_BYTES) {
        alert('File exceeds 5 MB limit');
        return;
      }
      setAdditionalFiles((prev) => [...prev, newFile]);
    }
  };

  const removeAdditionalFile = (idx: number) => {
    setAdditionalFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  // Final Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validateStep1() || !validateStep2() || !validateStep3()) {
      return;
    }

    setIsSubmitting(true);
    setErrorSummary(null);

    try {
      const payload = new FormData();
      payload.append('type', 'careers');
      payload.append('applyingAs', formData.applyingAs);
      formData.areasOfInterest.forEach((a) => payload.append('areasOfInterest', a));
      if (formData.roleInterest) payload.append('roleInterest', formData.roleInterest);
      payload.append('fullName', formData.fullName);
      payload.append('email', formData.email);
      payload.append('phoneCountryCode', formData.phoneCountryCode);
      payload.append('phone', formData.phone);
      payload.append('currentLocation', formData.currentLocation);
      if (formData.linkedInUrl) payload.append('linkedInUrl', formData.linkedInUrl);
      if (formData.portfolioUrl) payload.append('portfolioUrl', formData.portfolioUrl);
      payload.append('experienceYears', formData.experienceYears);
      if (formData.currentRoleCompany) payload.append('currentRoleCompany', formData.currentRoleCompany);
      formData.primarySkills.forEach((s) => payload.append('primarySkills', s));
      if (formData.certifications) payload.append('certifications', formData.certifications);
      if (formData.highestEducation) payload.append('highestEducation', formData.highestEducation);
      if (formData.earliestStartDate) payload.append('earliestStartDate', formData.earliestStartDate);
      if (formData.noticePeriod) payload.append('noticePeriod', formData.noticePeriod);
      if (formData.engagementPreference) payload.append('engagementPreference', formData.engagementPreference);
      if (formData.hoursPerWeek) payload.append('hoursPerWeek', formData.hoursPerWeek);
      if (formData.expectedRate) payload.append('expectedRate', formData.expectedRate);
      payload.append('rateCurrency', formData.rateCurrency);
      payload.append('rateUnit', formData.rateUnit);
      if (formData.workAuthorization) payload.append('workAuthorization', formData.workAuthorization);
      if (formData.coverLetterText) payload.append('coverLetterText', formData.coverLetterText);
      if (formData.whyMatic) payload.append('whyMatic', formData.whyMatic);
      if (formData.howHeard) payload.append('howHeard', formData.howHeard);
      payload.append('consent', String(formData.consent));
      payload.append('talentNetworkOptIn', String(formData.talentNetworkOptIn));
      payload.append('honeypot', formData.honeypot || '');
      const currentTimestamp = mountTimeRef.current || Date.now();
      payload.append('submitTimestamp', String(currentTimestamp));

      if (resumeFile) payload.append('resume', resumeFile);
      if (coverLetterFile) payload.append('coverLetterFile', coverLetterFile);
      additionalFiles.forEach((file) => payload.append('additionalFiles', file));

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: payload,
      });

      const json = await res.json();

      if (res.ok && json.success) {
        const firstName = formData.fullName.split(' ')[0] || formData.fullName;
        onSuccess(json.referenceId || 'MGS-CAR-OK', firstName);
      } else {
        setErrorSummary(
          json.error || `Something went wrong. Please try again or email us at ${CONTACT_CONSTANTS.placeholders.careersEmail}.`
        );
      }
    } catch (err) {
      setErrorSummary(
        `Something went wrong. Please try again or email us at ${CONTACT_CONSTANTS.placeholders.careersEmail}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full p-6 sm:p-10 rounded-3xl frosted-glass border border-blue-500/25 shadow-[0_20px_50px_rgba(7,14,29,0.95)] flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex flex-col gap-2 pb-2 border-b border-blue-500/15">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
          TALENT APPLICATION
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-text tracking-tight">
          Apply or join our talent network
        </h2>
        <p className="text-muted-text text-xs sm:text-sm">
          No open role that fits? Apply anyway and we&apos;ll keep you in our talent network.
        </p>
      </div>

      {/* Stepper Component */}
      <Stepper
        currentStep={currentStep}
        onStepClick={jumpToStep}
        completedSteps={completedSteps}
      />

      {/* Error Summary Banner */}
      {errorSummary && (
        <div
          role="alert"
          aria-live="assertive"
          className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in"
        >
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="font-bold text-rose-200">Attention Required</span>
            <span>{errorSummary}</span>
          </div>
        </div>
      )}

      {/* =======================================================================
          STEP 1: ABOUT YOU
          ======================================================================= */}
      {currentStep === 1 && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-200">
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-lg sm:text-xl font-bold text-surface-text">
              Step 1: About you
            </h3>
            <p className="text-xs text-muted-text">
              Tell us how you would like to work with Matic Global Solutions.
            </p>
          </div>

          {/* I'm applying as */}
          <ChipGroup
            label="I'm applying as"
            options={CONTACT_CONSTANTS.careers.applyingAs}
            selected={formData.applyingAs}
            onChange={(val) => handleChange('applyingAs', val)}
            required
            error={errors.applyingAs}
          />

          {/* Areas of interest */}
          <ChipGroup
            label="Areas of interest"
            options={CONTACT_CONSTANTS.careers.areasOfInterest}
            selected={formData.areasOfInterest}
            onChange={(vals) => handleChange('areasOfInterest', vals)}
            multiple
            required
            error={errors.areasOfInterest}
          />

          {/* Role you're interested in */}
          <FormField
            id="roleInterest"
            label="Role you're interested in"
            hint="Optional"
          >
            <input
              id="roleInterest"
              type="text"
              placeholder="e.g. ERP Consultant, ML Engineer, Tax Analyst"
              value={formData.roleInterest}
              onChange={(e) => handleChange('roleInterest', e.target.value)}
              className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40 text-sm text-surface-text placeholder:text-muted-text/50 outline-none transition-all"
            />
          </FormField>

          {/* Row: Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField id="fullName" label="Full name" required error={errors.fullName}>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                placeholder="Alex Morgan"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border text-sm text-surface-text outline-none transition-all ${
                  errors.fullName
                    ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500'
                    : 'border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40'
                }`}
              />
            </FormField>

            <FormField id="email" label="Email" required error={errors.email}>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="alex@domain.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border text-sm text-surface-text outline-none transition-all ${
                  errors.email
                    ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500'
                    : 'border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan focus:ring-2 focus:ring-ice-cyan/40'
                }`}
              />
            </FormField>
          </div>

          {/* Row: Phone & Current Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField id="phone" label="Phone" required error={errors.phone}>
              <div className="flex items-center gap-2">
                <select
                  id="phoneCountryCode"
                  value={formData.phoneCountryCode}
                  onChange={(e) => handleChange('phoneCountryCode', e.target.value)}
                  className="min-h-[44px] px-2.5 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 text-surface-text text-xs sm:text-sm font-mono outline-none hover:border-blue-500/50 focus:border-ice-cyan shrink-0"
                >
                  {CONTACT_CONSTANTS.countryCodes.map((c) => (
                    <option key={c.code} value={c.code} className="bg-[#050B1A] text-surface-text">
                      {c.code}
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
                  className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border text-sm text-surface-text outline-none transition-all ${
                    errors.phone
                      ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500'
                      : 'border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan'
                  }`}
                />
              </div>
            </FormField>

            <FormField
              id="currentLocation"
              label="Current location"
              required
              error={errors.currentLocation}
              hint="City and Country"
            >
              <input
                id="currentLocation"
                type="text"
                placeholder="e.g. Austin, TX, USA or London, UK"
                value={formData.currentLocation}
                onChange={(e) => handleChange('currentLocation', e.target.value)}
                className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border text-sm text-surface-text outline-none transition-all ${
                  errors.currentLocation
                    ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500'
                    : 'border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan'
                }`}
              />
            </FormField>
          </div>

          {/* Row: LinkedIn & Portfolio URLs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField id="linkedInUrl" label="LinkedIn URL" hint="Optional" error={errors.linkedInUrl}>
              <input
                id="linkedInUrl"
                type="url"
                placeholder="https://linkedin.com/in/username"
                value={formData.linkedInUrl}
                onChange={(e) => handleChange('linkedInUrl', e.target.value)}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan text-sm text-surface-text placeholder:text-muted-text/50 outline-none transition-all"
              />
            </FormField>

            <FormField
              id="portfolioUrl"
              label="Portfolio / GitHub / website URL"
              hint="Optional"
              error={errors.portfolioUrl}
            >
              <input
                id="portfolioUrl"
                type="url"
                placeholder="https://github.com/username or portfolio"
                value={formData.portfolioUrl}
                onChange={(e) => handleChange('portfolioUrl', e.target.value)}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan text-sm text-surface-text placeholder:text-muted-text/50 outline-none transition-all"
              />
            </FormField>
          </div>

          {/* Next Button */}
          <div className="flex justify-end pt-4 border-t border-blue-500/15">
            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3.5 rounded-full font-display text-sm font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] shadow-[0_0_20px_rgba(122,209,250,0.4)] hover:shadow-[0_0_30px_rgba(122,209,250,0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Next: Experience</span>
              <ArrowRight className="w-4 h-4 text-[#050B1A]" />
            </button>
          </div>
        </div>
      )}

      {/* =======================================================================
          STEP 2: EXPERIENCE
          ======================================================================= */}
      {currentStep === 2 && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-200">
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-lg sm:text-xl font-bold text-surface-text">
              Step 2: Professional experience
            </h3>
            <p className="text-xs text-muted-text">
              Highlight your domain mastery, tooling, and track record.
            </p>
          </div>

          {/* Row: Total Experience & Current Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              id="experienceYears"
              label="Total years of experience"
              required
              error={errors.experienceYears}
            >
              <select
                id="experienceYears"
                value={formData.experienceYears}
                onChange={(e) => handleChange('experienceYears', e.target.value)}
                className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border text-sm text-surface-text outline-none transition-all ${
                  errors.experienceYears
                    ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500'
                    : 'border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan'
                }`}
              >
                <option value="" className="bg-[#050B1A] text-muted-text">
                  Select experience band...
                </option>
                {CONTACT_CONSTANTS.careers.experienceRanges.map((r) => (
                  <option key={r} value={r} className="bg-[#050B1A] text-surface-text">
                    {r} years
                  </option>
                ))}
              </select>
            </FormField>

            <FormField
              id="currentRoleCompany"
              label="Current or most recent role and company"
              hint="Optional"
            >
              <input
                id="currentRoleCompany"
                type="text"
                placeholder="e.g. Senior ERP Architect at Globex Corp"
                value={formData.currentRoleCompany}
                onChange={(e) => handleChange('currentRoleCompany', e.target.value)}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan text-sm text-surface-text placeholder:text-muted-text/50 outline-none transition-all"
              />
            </FormField>
          </div>

          {/* Primary Skills Tag Input */}
          <TagInput
            label="Primary skills"
            tags={formData.primarySkills}
            onChange={(tags) => handleChange('primarySkills', tags)}
            suggestions={dynamicSuggestions}
            minTags={1}
            maxTags={15}
            required
            error={errors.primarySkills}
            placeholder="Type a skill and press Enter (e.g. NetSuite, PyTorch, HIPAA)..."
          />

          {/* Row: Certifications & Highest Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField id="certifications" label="Certifications" hint="Optional">
              <input
                id="certifications"
                type="text"
                placeholder="e.g. NetSuite Certified, AWS Solutions Architect, CPA"
                value={formData.certifications}
                onChange={(e) => handleChange('certifications', e.target.value)}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan text-sm text-surface-text placeholder:text-muted-text/50 outline-none transition-all"
              />
            </FormField>

            <FormField id="highestEducation" label="Highest education" hint="Optional">
              <select
                id="highestEducation"
                value={formData.highestEducation}
                onChange={(e) => handleChange('highestEducation', e.target.value)}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan text-sm text-surface-text outline-none transition-all"
              >
                <option value="" className="bg-[#050B1A] text-muted-text">
                  Select highest level...
                </option>
                {CONTACT_CONSTANTS.careers.highestEducation.map((edu) => (
                  <option key={edu} value={edu} className="bg-[#050B1A] text-surface-text">
                    {edu}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-blue-500/15">
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-muted-text hover:text-surface-text frosted-glass border border-blue-500/20 hover:border-blue-500/40 flex items-center gap-2 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3.5 rounded-full font-display text-sm font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] shadow-[0_0_20px_rgba(122,209,250,0.4)] hover:shadow-[0_0_30px_rgba(122,209,250,0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Next: Resume &amp; Availability</span>
              <ArrowRight className="w-4 h-4 text-[#050B1A]" />
            </button>
          </div>
        </div>
      )}

      {/* =======================================================================
          STEP 3: RESUME AND AVAILABILITY
          ======================================================================= */}
      {currentStep === 3 && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-200">
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-lg sm:text-xl font-bold text-surface-text">
              Step 3: Resume and availability
            </h3>
            <p className="text-xs text-muted-text">
              Attach your credentials and specify timing and engagement models.
            </p>
          </div>

          {/* Resume Upload */}
          <FileDropzone
            label="Resume"
            required
            allowedExtensions={['.pdf', '.doc', '.docx']}
            maxSizeBytes={MAX_RESUME_SIZE_BYTES}
            maxSizeLabel="5 MB"
            file={resumeFile}
            onFileChange={setResumeFile}
            error={errors.resume}
            hint="PDF, DOC, DOCX up to 5 MB"
          />

          {/* Cover Letter (Text or File Option) */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono uppercase tracking-wider text-muted-text font-semibold flex items-center gap-2">
                <span>Cover letter</span>
                <span className="text-[11px] font-normal text-muted-text/70">(Optional)</span>
              </label>
              <div className="flex items-center gap-1 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setCoverInputMode('text')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    coverInputMode === 'text'
                      ? 'bg-blue-500/20 text-ice-cyan font-bold border border-ice-cyan/30'
                      : 'text-muted-text hover:text-white'
                  }`}
                >
                  Text
                </button>
                <button
                  type="button"
                  onClick={() => setCoverInputMode('file')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    coverInputMode === 'file'
                      ? 'bg-blue-500/20 text-ice-cyan font-bold border border-ice-cyan/30'
                      : 'text-muted-text hover:text-white'
                  }`}
                >
                  File Upload
                </button>
              </div>
            </div>

            {coverInputMode === 'text' ? (
              <div className="flex flex-col gap-1">
                <textarea
                  id="coverLetterText"
                  rows={3}
                  maxLength={1500}
                  placeholder="Share a concise summary of why your skills match our engineering and advisory priorities..."
                  value={formData.coverLetterText}
                  onChange={(e) => handleChange('coverLetterText', e.target.value)}
                  className="w-full p-4 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan text-sm text-surface-text placeholder:text-muted-text/50 outline-none resize-y transition-all"
                />
                <span className="text-[11px] font-mono text-muted-text text-right">
                  {formData.coverLetterText?.length || 0} / 1500 chars
                </span>
              </div>
            ) : (
              <FileDropzone
                label="Cover letter document"
                allowedExtensions={['.pdf', '.doc', '.docx']}
                maxSizeBytes={MAX_RESUME_SIZE_BYTES}
                maxSizeLabel="5 MB"
                file={coverLetterFile}
                onFileChange={setCoverLetterFile}
                hint="PDF, DOC, DOCX up to 5 MB"
              />
            )}
          </div>

          {/* Additional Documents (up to 2 files) */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono uppercase tracking-wider text-muted-text font-semibold">
                Additional documents (optional)
              </label>
              <span className="text-[11px] font-mono text-muted-text">
                {additionalFiles.length} / 2 files (max 5 MB each)
              </span>
            </div>

            {additionalFiles.length > 0 && (
              <div className="flex flex-col gap-2">
                {additionalFiles.map((f, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2 rounded-lg bg-blue-950/40 border border-blue-500/20 text-xs text-surface-text">
                    <span className="truncate max-w-xs">{f.name} ({(f.size / (1024 * 1024)).toFixed(1)} MB)</span>
                    <button
                      type="button"
                      onClick={() => removeAdditionalFile(i)}
                      className="p-1 text-rose-400 hover:text-rose-300"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {additionalFiles.length < 2 && (
              <label className="w-full py-3 px-4 rounded-xl border border-dashed border-blue-500/30 hover:border-ice-cyan/50 text-xs font-mono text-muted-text hover:text-ice-cyan flex items-center justify-center gap-2 cursor-pointer transition-colors">
                <Paperclip className="w-4 h-4 text-ice-cyan" />
                <span>Add portfolio or certificate (PDF, DOC, DOCX, PNG, JPG)</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  onChange={handleAddAdditionalFile}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Row: Earliest Start Date & Notice Period */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField id="earliestStartDate" label="Earliest start date" hint="Optional">
              <input
                id="earliestStartDate"
                type="date"
                value={formData.earliestStartDate}
                onChange={(e) => handleChange('earliestStartDate', e.target.value)}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan text-sm text-surface-text outline-none transition-all"
              />
            </FormField>

            {/* If Full-time or Internship: Notice Period */}
            {(formData.applyingAs === 'Full-time' || formData.applyingAs === 'Internship') && (
              <FormField id="noticePeriod" label="Notice period" hint="Optional">
                <select
                  id="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={(e) => handleChange('noticePeriod', e.target.value)}
                  className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 hover:border-blue-500/50 focus:border-ice-cyan text-sm text-surface-text outline-none transition-all"
                >
                  <option value="" className="bg-[#050B1A] text-muted-text">
                    Select notice period...
                  </option>
                  {CONTACT_CONSTANTS.careers.noticePeriods.map((np) => (
                    <option key={np} value={np} className="bg-[#050B1A] text-surface-text">
                      {np}
                    </option>
                  ))}
                </select>
              </FormField>
            )}
          </div>

          {/* Conditional: Freelancer / Contractor Fields */}
          {formData.applyingAs === 'Freelancer / Contractor' && (
            <div className="p-5 rounded-2xl bg-blue-950/30 border border-ice-cyan/30 flex flex-col gap-4 animate-in fade-in">
              <span className="text-xs font-mono uppercase tracking-wider text-ice-cyan font-bold">
                Contract Engagement Preferences
              </span>

              <ChipGroup
                label="Engagement preference"
                options={CONTACT_CONSTANTS.careers.engagementPreferences}
                selected={formData.engagementPreference || 'Hourly'}
                onChange={(val) => handleChange('engagementPreference', val)}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField id="hoursPerWeek" label="Hours per week available" hint="Optional">
                  <select
                    id="hoursPerWeek"
                    value={formData.hoursPerWeek}
                    onChange={(e) => handleChange('hoursPerWeek', e.target.value)}
                    className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 text-sm text-surface-text outline-none"
                  >
                    <option value="" className="bg-[#050B1A] text-muted-text">
                      Select availability...
                    </option>
                    {CONTACT_CONSTANTS.careers.hoursAvailable.map((h) => (
                      <option key={h} value={h} className="bg-[#050B1A] text-surface-text">
                        {h} hrs/week
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField id="expectedRate" label="Expected rate" hint="Optional">
                  <div className="flex items-center gap-1.5">
                    <select
                      value={formData.rateCurrency}
                      onChange={(e) => handleChange('rateCurrency', e.target.value)}
                      className="min-h-[44px] px-2 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 text-xs font-mono text-surface-text outline-none shrink-0"
                    >
                      {CONTACT_CONSTANTS.careers.currencies.map((c) => (
                        <option key={c} value={c} className="bg-[#050B1A] text-surface-text">
                          {c}
                        </option>
                      ))}
                    </select>
                    <input
                      id="expectedRate"
                      type="number"
                      placeholder="e.g. 100"
                      value={formData.expectedRate}
                      onChange={(e) => handleChange('expectedRate', e.target.value)}
                      className="w-full min-h-[44px] px-3 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 text-sm text-surface-text outline-none"
                    />
                    <select
                      value={formData.rateUnit}
                      onChange={(e) => handleChange('rateUnit', e.target.value)}
                      className="min-h-[44px] px-2 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 text-xs font-mono text-surface-text outline-none shrink-0"
                    >
                      {CONTACT_CONSTANTS.careers.rateUnits.map((u) => (
                        <option key={u} value={u} className="bg-[#050B1A] text-surface-text">
                          {u}
                        </option>
                      ))}
                    </select>
                  </div>
                </FormField>
              </div>
            </div>
          )}

          {/* Row: Work Authorization & How Did You Hear */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField id="workAuthorization" label="Work authorization / location" hint="Optional">
              <select
                id="workAuthorization"
                value={formData.workAuthorization}
                onChange={(e) => handleChange('workAuthorization', e.target.value)}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 text-sm text-surface-text outline-none"
              >
                <option value="" className="bg-[#050B1A] text-muted-text">
                  Location preference...
                </option>
                {CONTACT_CONSTANTS.careers.workAuthorization.map((loc) => (
                  <option key={loc} value={loc} className="bg-[#050B1A] text-surface-text">
                    {loc}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField id="howHeard" label="How did you hear about us?" hint="Optional">
              <select
                id="howHeard"
                value={formData.howHeard}
                onChange={(e) => handleChange('howHeard', e.target.value)}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 text-sm text-surface-text outline-none"
              >
                <option value="" className="bg-[#050B1A] text-muted-text">
                  Select referral source...
                </option>
                {CONTACT_CONSTANTS.careers.howHeard.map((src) => (
                  <option key={src} value={src} className="bg-[#050B1A] text-surface-text">
                    {src}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          {/* Why Matic */}
          <FormField
            id="whyMatic"
            label="Why do you want to work with us?"
            hint={`${formData.whyMatic?.length || 0} / 1000 chars (optional)`}
          >
            <textarea
              id="whyMatic"
              rows={3}
              maxLength={1000}
              placeholder="What attracts you to our regulated AI and ERP engineering focus?"
              value={formData.whyMatic}
              onChange={(e) => handleChange('whyMatic', e.target.value)}
              className="w-full p-4 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 text-sm text-surface-text placeholder:text-muted-text/50 outline-none resize-y"
            />
          </FormField>

          {/* Mandatory Privacy Consent */}
          <div className="flex flex-col gap-1 pt-1">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                id="careerConsent"
                checked={formData.consent}
                onChange={(e) => handleChange('consent', e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-blue-500/40 bg-[#050B1A] text-ice-cyan focus:ring-ice-cyan cursor-pointer shrink-0"
              />
              <span className="text-xs text-muted-text leading-relaxed">
                I agree to the{' '}
                <Link href="/privacypolicy" className="text-ice-cyan underline hover:text-white transition-colors">
                  Privacy Policy
                </Link>{' '}
                and consent to Matic Global Solutions storing and processing my application data to consider me for roles.*
              </span>
            </label>
            {errors.consent && (
              <p className="text-xs text-rose-400 font-mono flex items-center gap-1 mt-0.5 ml-7">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.consent}</span>
              </p>
            )}
          </div>

          {/* Optional Talent Network Checkbox */}
          <div className="flex items-start gap-3 select-none">
            <input
              type="checkbox"
              id="talentNetworkOptIn"
              checked={formData.talentNetworkOptIn}
              onChange={(e) => handleChange('talentNetworkOptIn', e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-blue-500/40 bg-[#050B1A] text-ice-cyan focus:ring-ice-cyan cursor-pointer shrink-0"
            />
            <label htmlFor="talentNetworkOptIn" className="text-xs text-muted-text leading-relaxed cursor-pointer">
              Keep me in your talent network for future roles.
            </label>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-blue-500/15">
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-muted-text hover:text-surface-text frosted-glass border border-blue-500/20 hover:border-blue-500/40 flex items-center gap-2 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="px-8 py-3.5 rounded-full font-display text-sm font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] shadow-[0_0_20px_rgba(122,209,250,0.4)] hover:shadow-[0_0_30px_rgba(122,209,250,0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Review Application</span>
              <ArrowRight className="w-4 h-4 text-[#050B1A]" />
            </button>
          </div>
        </div>
      )}

      {/* =======================================================================
          STEP 4: FINAL READ-ONLY REVIEW & SUBMIT PANEL
          ======================================================================= */}
      {currentStep === 4 && (
        <div className="flex flex-col gap-6 animate-in fade-in duration-200">
          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-emerald-400 uppercase tracking-widest font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              VERIFY YOUR SUBMISSION
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-surface-text">
              Review Application Details
            </h3>
            <p className="text-xs text-muted-text">
              Check that all information and attached documents are accurate before submission.
            </p>
          </div>

          {/* Review Box: Step 1 */}
          <div className="p-5 rounded-2xl frosted-glass border border-blue-500/25 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-blue-500/15">
              <span className="text-xs font-mono uppercase tracking-wider text-ice-cyan font-bold">
                1. About You
              </span>
              <button
                type="button"
                onClick={() => jumpToStep(1)}
                className="text-xs font-mono text-muted-text hover:text-ice-cyan flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-muted-text block">Applying As:</span>
                <span className="font-medium text-surface-text">{formData.applyingAs}</span>
              </div>
              <div>
                <span className="text-muted-text block">Areas:</span>
                <span className="font-medium text-surface-text">{formData.areasOfInterest.join(', ')}</span>
              </div>
              <div>
                <span className="text-muted-text block">Name:</span>
                <span className="font-medium text-surface-text">{formData.fullName}</span>
              </div>
              <div>
                <span className="text-muted-text block">Email:</span>
                <span className="font-medium text-surface-text">{formData.email}</span>
              </div>
              <div>
                <span className="text-muted-text block">Phone:</span>
                <span className="font-medium text-surface-text">{formData.phoneCountryCode} {formData.phone}</span>
              </div>
              <div>
                <span className="text-muted-text block">Location:</span>
                <span className="font-medium text-surface-text">{formData.currentLocation}</span>
              </div>
              {formData.linkedInUrl && (
                <div className="sm:col-span-2 truncate">
                  <span className="text-muted-text block">LinkedIn:</span>
                  <span className="font-medium text-ice-cyan truncate">{formData.linkedInUrl}</span>
                </div>
              )}
            </div>
          </div>

          {/* Review Box: Step 2 */}
          <div className="p-5 rounded-2xl frosted-glass border border-blue-500/25 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-blue-500/15">
              <span className="text-xs font-mono uppercase tracking-wider text-ice-cyan font-bold">
                2. Experience
              </span>
              <button
                type="button"
                onClick={() => jumpToStep(2)}
                className="text-xs font-mono text-muted-text hover:text-ice-cyan flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-muted-text block">Experience:</span>
                <span className="font-medium text-surface-text">{formData.experienceYears} years</span>
              </div>
              <div>
                <span className="text-muted-text block">Education:</span>
                <span className="font-medium text-surface-text">{formData.highestEducation || 'Not specified'}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-muted-text block mb-1">Primary Skills:</span>
                <div className="flex flex-wrap gap-1.5">
                  {formData.primarySkills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-blue-500/20 text-ice-cyan font-mono text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              {formData.certifications && (
                <div className="sm:col-span-2">
                  <span className="text-muted-text block">Certifications:</span>
                  <span className="font-medium text-surface-text">{formData.certifications}</span>
                </div>
              )}
            </div>
          </div>

          {/* Review Box: Step 3 */}
          <div className="p-5 rounded-2xl frosted-glass border border-blue-500/25 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-blue-500/15">
              <span className="text-xs font-mono uppercase tracking-wider text-ice-cyan font-bold">
                3. Documents &amp; Terms
              </span>
              <button
                type="button"
                onClick={() => jumpToStep(3)}
                className="text-xs font-mono text-muted-text hover:text-ice-cyan flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-muted-text block">Resume File:</span>
                <span className="font-medium text-ice-cyan flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  {resumeFile ? resumeFile.name : 'Not attached'}
                </span>
              </div>
              <div>
                <span className="text-muted-text block">Earliest Start:</span>
                <span className="font-medium text-surface-text">{formData.earliestStartDate || 'Flexible'}</span>
              </div>
              {formData.applyingAs === 'Freelancer / Contractor' && (
                <div>
                  <span className="text-muted-text block">Rate:</span>
                  <span className="font-medium text-surface-text">
                    {formData.expectedRate ? `${formData.expectedRate} ${formData.rateCurrency} / ${formData.rateUnit}` : 'Negotiable'}
                  </span>
                </div>
              )}
              <div>
                <span className="text-muted-text block">Talent Network:</span>
                <span className="font-medium text-surface-text">{formData.talentNetworkOptIn ? 'Opted In' : 'Single Application Only'}</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-4 border-t border-blue-500/15">
            <button
              type="button"
              onClick={() => jumpToStep(3)}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-muted-text hover:text-surface-text frosted-glass border border-blue-500/20 hover:border-blue-500/40 flex items-center gap-2 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-9 py-3.5 rounded-full font-display text-sm font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] shadow-[0_0_24px_rgba(122,209,250,0.5)] hover:shadow-[0_0_36px_rgba(122,209,250,0.75)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#050B1A]" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#050B1A]" />
                  <span>Submit Application</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
