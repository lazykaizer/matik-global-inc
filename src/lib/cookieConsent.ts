'use client';

/**
 * Cookie Consent Management System
 * Stores choices in first-party cookie `mg_consent` (6 months, SameSite=Lax).
 * 
 * TODO: Gate future analytics or marketing tags behind getConsent().
 */

export interface CookieConsentState {
  strictlyNecessary: true; // Always locked on
  functionality: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

const COOKIE_NAME = 'mg_consent';
const SIX_MONTHS_DAYS = 180;

export const DEFAULT_CONSENT: CookieConsentState = {
  strictlyNecessary: true,
  functionality: true,
  analytics: false,
  marketing: false,
  timestamp: 0,
};

/**
 * Read consent state from first-party cookie
 */
export function getConsent(): CookieConsentState | null {
  if (typeof document === 'undefined') return null;

  try {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split('=');
      if (key === COOKIE_NAME && value) {
        const parsed = JSON.parse(decodeURIComponent(value));
        return {
          strictlyNecessary: true,
          functionality: Boolean(parsed.functionality),
          analytics: Boolean(parsed.analytics),
          marketing: Boolean(parsed.marketing),
          timestamp: Number(parsed.timestamp) || Date.now(),
        };
      }
    }
  } catch {
    // If malformed or blocked, fall through
  }

  return null;
}

/**
 * Write consent state to first-party cookie (6 months, SameSite=Lax)
 */
export function setConsent(preferences: Partial<CookieConsentState>): void {
  if (typeof document === 'undefined') return;

  const state: CookieConsentState = {
    strictlyNecessary: true,
    functionality: preferences.functionality ?? true,
    analytics: preferences.analytics ?? false,
    marketing: preferences.marketing ?? false,
    timestamp: Date.now(),
  };

  const serialized = encodeURIComponent(JSON.stringify(state));
  const maxAge = SIX_MONTHS_DAYS * 24 * 60 * 60; // in seconds
  const secure = typeof window !== 'undefined' && window.location.protocol === 'https:' ? '; Secure' : '';

  document.cookie = `${COOKIE_NAME}=${serialized}; max-age=${maxAge}; path=/; SameSite=Lax${secure}`;

  // Notify active listeners
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: state }));
  }
}

/**
 * Event-based trigger to open the Cookie Consent dialog from anywhere in the app
 */
export function openCookieSettings(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  }
}
