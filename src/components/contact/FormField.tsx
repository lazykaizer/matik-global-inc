'use client';

import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  warning?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  id,
  label,
  required,
  error,
  warning,
  hint,
  children,
  className = '',
}: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      <div className="flex items-center justify-between">
        <label 
          htmlFor={id} 
          className="text-xs font-mono uppercase tracking-wider text-muted-text font-semibold flex items-center gap-1 select-none"
        >
          <span>{label}</span>
          {required && <span className="text-ice-cyan text-sm" aria-hidden="true">*</span>}
        </label>
        {hint && (
          <span className="text-[11px] font-mono text-muted-text/70">{hint}</span>
        )}
      </div>

      {children}

      {/* Inline warning (non-blocking) */}
      {warning && !error && (
        <p className="text-xs text-amber-300/90 font-mono flex items-center gap-1 mt-0.5" role="status">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          <span>{warning}</span>
        </p>
      )}

      {/* Inline error (blocking) */}
      {error && (
        <p 
          id={`${id}-error`} 
          className="text-xs text-rose-400 font-mono flex items-center gap-1 mt-0.5 animate-in fade-in" 
          role="alert" 
          aria-live="polite"
        >
          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-rose-400" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
