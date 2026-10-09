'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const year = 2026;

  return (
    <footer className="w-full flex flex-col mt-auto relative z-10 bg-[var(--surface)] border-t border-gray-100">
      {/* Top Area */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:w-1/3">
            <Logo />
            <div className="flex gap-4">
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[var(--text)] text-white flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[var(--text)] text-white flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href={siteConfig.socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-[var(--text)] text-white flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[var(--text)] text-white flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col md:w-2/3 md:items-start lg:ml-24">
            <h2 className="text-[var(--text)] text-[36px] md:text-[44px] font-bold mb-8">Engagement Models</h2>
            <nav className="flex flex-col gap-4">
              {siteConfig.services.map((service) => (
                <Link 
                  key={service.name} 
                  href={service.path}
                  className="text-[var(--text)] text-[18px] md:text-[20px] font-medium underline hover:text-[var(--primary)] transition-colors w-fit"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[var(--primary)] py-6 w-full">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white text-sm">
            Copyright &copy; {year} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacypolicy" className="text-white text-sm underline hover:text-gray-200 transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="text-white text-sm underline hover:text-gray-200 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
