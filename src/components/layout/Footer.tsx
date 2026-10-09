'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Logo } from '@/components/ui/Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const year = 2026;

  return (
    <footer className="w-full flex flex-col mt-auto relative z-10 bg-[#0B1120] text-gray-300 border-t border-gray-800">
      {/* Top Area */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Override logo colors for dark background */}
            <div className="brightness-0 invert">
              <Logo />
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed max-w-sm">
              We provide the digital backbone for life sciences, manufacturing, consumer products, financial services, and growth-stage SMBs to scale seamlessly.
            </p>
            <div className="flex gap-4 mt-2">
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href={siteConfig.socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Solutions Column (Span 3) */}
          <div className="lg:col-span-3 lg:col-start-6 flex flex-col gap-6">
            <h3 className="text-white font-bold tracking-wider uppercase text-sm">Engagement Models</h3>
            <ul className="flex flex-col gap-4">
              {siteConfig.services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.path}
                    className="text-gray-400 hover:text-white text-[15px] transition-all hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-white font-bold tracking-wider uppercase text-sm">Contact Us</h3>
            <ul className="flex flex-col gap-5">
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`} className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 mt-0.5 text-gray-500 group-hover:text-[var(--primary)] transition-colors" />
                  <span className="text-[15px] break-all">{siteConfig.contactEmail}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contactPhone}`} className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 mt-0.5 text-gray-500 group-hover:text-[var(--primary)] transition-colors" />
                  <span className="text-[15px]">{siteConfig.contactPhone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 text-gray-500 flex-shrink-0" />
                <span className="text-[15px] leading-relaxed">
                  Headquartered in the US, with global delivery centers supporting our clients worldwide.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50 bg-[#070b14]">
        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            Copyright &copy; {year} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacypolicy" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="text-gray-500 text-sm hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
