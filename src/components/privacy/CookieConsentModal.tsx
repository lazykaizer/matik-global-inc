'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, ShieldCheck, Check, Lock } from 'lucide-react';
import { getConsent, setConsent, CookieConsentState } from '@/lib/cookieConsent';

export function CookieConsentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [functionality, setFunctionality] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Initialize from existing cookie if present
  useEffect(() => {
    const existing = getConsent();
    if (existing) {
      setFunctionality(existing.functionality);
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }

    const handleOpen = () => {
      const current = getConsent();
      if (current) {
        setFunctionality(current.functionality);
        setAnalytics(current.analytics);
        setMarketing(current.marketing);
      }
      setIsOpen(true);
    };

    window.addEventListener('open-cookie-settings', handleOpen);
    return () => window.removeEventListener('open-cookie-settings', handleOpen);
  }, []);

  // Focus trap & Escape listener
  useEffect(() => {
    if (!isOpen) return;

    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSave = () => {
    setConsent({
      strictlyNecessary: true,
      functionality,
      analytics,
      marketing,
    });
    setIsOpen(false);
  };

  const handleAcceptAll = () => {
    setFunctionality(true);
    setAnalytics(true);
    setMarketing(true);
    setConsent({
      strictlyNecessary: true,
      functionality: true,
      analytics: true,
      marketing: true,
    });
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    setFunctionality(false);
    setAnalytics(false);
    setMarketing(false);
    setConsent({
      strictlyNecessary: true,
      functionality: false,
      analytics: false,
      marketing: false,
    });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050B1A]/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        ref={modalRef}
        className="w-full max-w-xl rounded-2xl frosted-glass border border-blue-500/30 bg-[#0B1630]/95 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col max-h-[90dvh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-blue-500/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="cookie-modal-title" className="font-display text-lg sm:text-xl font-bold text-surface-text">
                Cookie Preferences
              </h2>
              <p className="text-xs text-muted-text">
                Manage how we use cookies and personal data on this device
              </p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close cookie preferences"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-text hover:text-surface-text hover:bg-blue-500/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ice-cyan cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories List */}
        <div className="p-5 sm:p-6 flex flex-col gap-5 overflow-y-auto">
          {/* Strictly Necessary */}
          <div className="p-4 rounded-xl frosted-glass border border-blue-500/20 flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-semibold text-surface-text">
                  Strictly Necessary
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-ice-cyan/15 text-ice-cyan border border-ice-cyan/30 font-bold">
                  <Lock className="w-2.5 h-2.5" />
                  Always Active
                </span>
              </div>
              <p className="text-xs text-muted-text leading-relaxed">
                Essential for website security, page routing, and remembering accessibility settings. These cannot be disabled.
              </p>
            </div>
            <input
              type="checkbox"
              checked
              disabled
              aria-label="Strictly necessary cookies always active"
              className="mt-1 w-5 h-5 rounded accent-diamond-blue opacity-80 cursor-not-allowed"
            />
          </div>

          {/* Functionality */}
          <label className="p-4 rounded-xl frosted-glass border border-blue-500/20 flex items-start justify-between gap-4 cursor-pointer hover:border-ice-cyan/30 transition-colors">
            <div className="flex flex-col gap-1">
              <span className="font-display text-sm font-semibold text-surface-text">
                Functionality
              </span>
              <p className="text-xs text-muted-text leading-relaxed">
                Remembers your choices such as preferred language, region, and layout settings across sessions.
              </p>
            </div>
            <input
              type="checkbox"
              checked={functionality}
              onChange={(e) => setFunctionality(e.target.checked)}
              className="mt-1 w-5 h-5 rounded accent-diamond-blue cursor-pointer focus-visible:ring-2 focus-visible:ring-ice-cyan"
            />
          </label>

          {/* Performance & Analytics */}
          <label className="p-4 rounded-xl frosted-glass border border-blue-500/20 flex items-start justify-between gap-4 cursor-pointer hover:border-ice-cyan/30 transition-colors">
            <div className="flex flex-col gap-1">
              <span className="font-display text-sm font-semibold text-surface-text">
                Performance & Analytics
              </span>
              <p className="text-xs text-muted-text leading-relaxed">
                Aggregated, anonymized statistics that help us understand page usage, resolve technical errors, and optimize reading flow.
              </p>
            </div>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
              className="mt-1 w-5 h-5 rounded accent-diamond-blue cursor-pointer focus-visible:ring-2 focus-visible:ring-ice-cyan"
            />
          </label>

          {/* Marketing */}
          <label className="p-4 rounded-xl frosted-glass border border-blue-500/20 flex items-start justify-between gap-4 cursor-pointer hover:border-ice-cyan/30 transition-colors">
            <div className="flex flex-col gap-1">
              <span className="font-display text-sm font-semibold text-surface-text">
                Marketing & Outreach
              </span>
              <p className="text-xs text-muted-text leading-relaxed">
                Measures outreach effectiveness for webinars and publications. We do not sell personal data to data brokers.
              </p>
            </div>
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="mt-1 w-5 h-5 rounded accent-diamond-blue cursor-pointer focus-visible:ring-2 focus-visible:ring-ice-cyan"
            />
          </label>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-blue-500/20 bg-[#070E1D] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleRejectAll}
            className="px-4 py-2.5 rounded-xl border border-blue-500/30 hover:border-blue-500/50 text-xs font-mono text-muted-text hover:text-surface-text transition-colors cursor-pointer text-center"
          >
            Reject Non-Essential
          </button>
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={handleSave}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-blue-500/40 bg-blue-500/15 hover:bg-blue-500/25 text-xs font-mono text-surface-text hover:text-ice-cyan transition-colors cursor-pointer text-center"
            >
              Save Preferences
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-display text-xs font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] shadow-[0_0_15px_rgba(122,209,250,0.35)] hover:shadow-[0_0_22px_rgba(122,209,250,0.55)] transition-all cursor-pointer text-center"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
