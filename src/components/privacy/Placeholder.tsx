'use client';

import React from 'react';
import { SHOW_PLACEHOLDER_STYLING } from '@/content/privacyPolicyData';

interface PlaceholderProps {
  children: React.ReactNode;
}

export function Placeholder({ children }: PlaceholderProps) {
  if (!SHOW_PLACEHOLDER_STYLING) {
    return <span>{children}</span>;
  }

  return (
    <span
      className="inline-flex items-center px-2 py-0.5 my-0.5 rounded-md border border-dashed border-ice-cyan/45 bg-blue-500/10 text-ice-cyan/90 font-mono text-[13px] tracking-tight align-baseline select-all cursor-help transition-colors hover:border-ice-cyan/70 hover:bg-blue-500/15"
      title="Needs confirmation before launch"
      data-placeholder="true"
    >
      <span className="sr-only">Placeholder: </span>
      {children}
    </span>
  );
}

/**
 * Helper to parse any string containing [[...]] and render `<Placeholder>` for the bracketed sections
 */
export function renderWithPlaceholders(text: string): React.ReactNode {
  if (!text) return null;

  // Split by [[...]] keeping delimiters
  const parts = text.split(/(\[\[.*?\]\])/g);

  return parts.map((part, index) => {
    if (part.startsWith('[[') && part.endsWith(']]')) {
      return <Placeholder key={index}>{part}</Placeholder>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}
