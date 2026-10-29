'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top of Privacy Policy"
      className="print:hidden fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-40 p-3 rounded-full frosted-glass border border-ice-cyan/40 bg-[#0B1630]/90 text-ice-cyan shadow-[0_4px_24px_rgba(7,14,29,0.85)] hover:bg-blue-500/25 hover:border-ice-cyan/70 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ice-cyan cursor-pointer group"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      <span className="sr-only">Back to top</span>
    </button>
  );
}
