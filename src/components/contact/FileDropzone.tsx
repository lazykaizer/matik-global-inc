'use client';

import React, { useState, useRef } from 'react';
import { UploadCloud, FileText, CheckCircle2, X, AlertCircle } from 'lucide-react';

interface FileDropzoneProps {
  label: string;
  required?: boolean;
  maxSizeBytes?: number;
  maxSizeLabel?: string;
  allowedExtensions: string[];
  file: File | null;
  onFileChange: (file: File | null) => void;
  hint?: string;
  error?: string;
}

export function FileDropzone({
  label,
  required = false,
  maxSizeBytes = 5 * 1024 * 1024,
  maxSizeLabel = '5 MB',
  allowedExtensions,
  file,
  onFileChange,
  hint,
  error: externalError,
}: FileDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [internalError, setInternalError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(file ? 100 : 0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const displayError = externalError || internalError;

  const validateAndSetFile = (candidate: File | null) => {
    setInternalError(null);
    if (!candidate) {
      onFileChange(null);
      setUploadProgress(0);
      return;
    }

    // Check size
    if (candidate.size > maxSizeBytes) {
      setInternalError(`File exceeds ${maxSizeLabel} limit (${(candidate.size / (1024 * 1024)).toFixed(1)} MB)`);
      return;
    }

    // Check extension
    const ext = '.' + candidate.name.split('.').pop()?.toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      setInternalError(`Unsupported file format. Please upload ${allowedExtensions.join(', ')}`);
      return;
    }

    // Simulate swift smooth upload progress
    setUploadProgress(10);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 30;
      });
    }, 40);

    onFileChange(candidate);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFileChange(null);
    setUploadProgress(0);
    setInternalError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex items-center justify-between">
        <label className="text-xs font-mono uppercase tracking-wider text-muted-text font-semibold flex items-center gap-1 select-none">
          <span>{label}</span>
          {required && <span className="text-ice-cyan text-sm">*</span>}
        </label>
        {hint && (
          <span className="text-[11px] font-mono text-muted-text/70">{hint}</span>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept={allowedExtensions.join(',')}
        onChange={handleFileSelect}
        className="hidden"
      />

      {!file ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`w-full p-6 sm:p-7 rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer flex flex-col items-center justify-center text-center gap-2 group ${
            isDragging
              ? 'border-ice-cyan bg-blue-500/15 scale-[1.01]'
              : displayError
              ? 'border-rose-500/50 bg-rose-500/5'
              : 'border-blue-500/30 hover:border-ice-cyan/60 bg-[#0B1630]/40 hover:bg-[#101E40]/60'
          }`}
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-ice-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold text-surface-text">
              <span className="text-ice-cyan underline underline-offset-2">Browse files</span> or drag &amp; drop here
            </p>
            <p className="text-xs font-mono text-muted-text">
              {allowedExtensions.join(', ').toUpperCase()} &bull; Max {maxSizeLabel}
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full p-4 rounded-xl frosted-glass border border-ice-cyan/40 bg-[#0B1630]/70 flex flex-col gap-2.5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-ice-cyan flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium text-surface-text truncate">
                  {file.name}
                </span>
                <span className="text-[11px] font-mono text-muted-text">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB &bull; Ready
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <button
                type="button"
                onClick={removeFile}
                className="w-8 h-8 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Remove uploaded file"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          {uploadProgress < 100 && (
            <div className="w-full bg-blue-950/60 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-ice-cyan h-full transition-all duration-150 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}
        </div>
      )}

      {displayError && (
        <p className="text-xs text-rose-400 font-mono flex items-center gap-1 mt-0.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{displayError}</span>
        </p>
      )}
    </div>
  );
}
