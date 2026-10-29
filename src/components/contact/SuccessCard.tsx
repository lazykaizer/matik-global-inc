'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, RotateCcw, Copy, Check } from 'lucide-react';

interface SuccessCardProps {
  type: 'business' | 'careers';
  firstName: string;
  referenceId: string;
  onReset: () => void;
}

export function SuccessCard({ type, firstName, referenceId, onReset }: SuccessCardProps) {
  const [copied, setCopied] = React.useState(false);

  const copyRef = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(referenceId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className="p-8 sm:p-12 rounded-3xl frosted-glass border-2 border-ice-cyan/40 shadow-[0_24px_60px_-12px_rgba(7,14,29,0.95),0_0_30px_rgba(122,209,250,0.2)] flex flex-col items-center text-center gap-6 animate-in fade-in zoom-in-95 duration-300"
      role="region"
      aria-live="polite"
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shadow-[0_0_24px_rgba(52,211,153,0.3)]">
        <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
      </div>

      <div className="flex flex-col gap-2 max-w-lg">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 font-mono text-xs uppercase tracking-wider mx-auto">
          <span>SUBMISSION CONFIRMED</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text tracking-tight">
          Thank you, {firstName || 'there'}.
        </h2>
        <p className="text-muted-text text-base sm:text-lg leading-relaxed pt-1">
          {type === 'business'
            ? "We've received your message and will reply within one business day."
            : "We've received your application. If your profile fits, we'll reach out."}
        </p>
      </div>

      {/* Reference ID Pill */}
      {referenceId && (
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-950/60 border border-ice-cyan/30 text-xs sm:text-sm font-mono text-surface-text">
          <span className="text-muted-text">Reference ID:</span>
          <span className="text-ice-cyan font-bold">{referenceId}</span>
          <button
            type="button"
            onClick={copyRef}
            className="ml-1 p-1 hover:bg-blue-800/40 rounded text-muted-text hover:text-ice-cyan transition-colors"
            title="Copy reference ID"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          type="button"
          onClick={onReset}
          className="px-6 py-3.5 rounded-full font-display text-sm font-bold text-surface-text frosted-glass hover:bg-[#162A58]/60 hover:text-ice-cyan border border-blue-500/25 hover:border-ice-cyan/60 transition-all flex items-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-ice-cyan" />
          <span>Send another {type === 'business' ? 'enquiry' : 'application'}</span>
        </button>

        <Link
          href="/"
          className="px-6 py-3.5 rounded-full font-display text-sm font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] shadow-[0_0_20px_rgba(122,209,250,0.4)] hover:shadow-[0_0_30px_rgba(122,209,250,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
        >
          <span>Back to Home</span>
          <ArrowRight className="w-4 h-4 text-[#050B1A]" />
        </Link>
      </div>
    </div>
  );
}
