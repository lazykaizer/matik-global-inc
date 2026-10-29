'use client';

import React, { useState } from 'react';
import { Link2, Check } from 'lucide-react';

interface SectionHeadingProps {
  id: string;
  number: number;
  title: string;
}

export function SectionHeading({ id, number, title }: SectionHeadingProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    if (typeof window === 'undefined') return;
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="relative group/heading flex items-start justify-between gap-4 pt-6 pb-2 border-b border-blue-500/15 scroll-mt-36 lg:scroll-mt-28" id={id}>
      <h2 className="font-display text-xl sm:text-2xl lg:text-[26px] font-bold text-surface-text tracking-tight flex items-baseline gap-2.5">
        <span className="font-mono text-sm sm:text-base text-ice-cyan/80 font-normal">
          {number}.
        </span>
        <span>{title}</span>
      </h2>

      <div className="flex items-center gap-2 mt-1">
        <div aria-live="polite" className="text-xs font-mono text-ice-cyan">
          {copied ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-ice-cyan/15 border border-ice-cyan/30 text-[11px] font-semibold animate-in fade-in duration-150">
              <Check className="w-3 h-3 text-ice-cyan" />
              Copied link
            </span>
          ) : null}
        </div>

        <button
          type="button"
          onClick={handleCopyLink}
          aria-label={`Copy link to section ${number}: ${title}`}
          title="Copy link to this section"
          className="print:hidden w-8 h-8 rounded-lg flex items-center justify-center text-muted-text hover:text-ice-cyan hover:bg-blue-500/15 border border-transparent hover:border-blue-500/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ice-cyan cursor-pointer opacity-70 group-hover/heading:opacity-100"
        >
          <Link2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
