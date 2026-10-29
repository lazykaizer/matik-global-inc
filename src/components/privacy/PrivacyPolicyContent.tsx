'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Printer, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Cookie, 
  Sparkles, 
  FileText,
  AlertCircle
} from 'lucide-react';
import { 
  PRIVACY_POLICY_HERO, 
  SHORT_VERSION_DATA, 
  PRIVACY_SECTIONS, 
  PrivacySection, 
  ContentBlock 
} from '@/content/privacyPolicyData';
import { renderWithPlaceholders } from './Placeholder';
import { TableOfContents } from './TableOfContents';
import { SectionHeading } from './SectionHeading';
import { ResponsiveTable } from './ResponsiveTable';
import { RegionTabs } from './RegionTabs';
import { ReadingProgressBar } from './ReadingProgressBar';
import { BackToTopButton } from './BackToTopButton';
import { CookieConsentModal } from './CookieConsentModal';
import { openCookieSettings } from '@/lib/cookieConsent';

export function PrivacyPolicyContent() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (typeof window !== 'undefined') {
        window.history.replaceState({}, '', '#contact');
      }
    }
  };

  const renderBlock = (block: ContentBlock, blockIdx: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <div key={blockIdx} className="flex flex-col gap-1.5 my-3">
            {block.subtitle && (
              <h3 className="font-display text-base sm:text-lg font-bold text-surface-text mt-3">
                {block.subtitle}
              </h3>
            )}
            <p className="text-[16px] sm:text-[17px] text-surface-text/90 leading-[1.8] font-normal">
              {renderWithPlaceholders(block.text || '')}
            </p>
          </div>
        );

      case 'list':
        return (
          <div key={blockIdx} className="flex flex-col gap-2.5 my-3">
            {block.subtitle && (
              <h3 className="font-display text-base sm:text-lg font-bold text-surface-text mt-3">
                {block.subtitle}
              </h3>
            )}
            {block.text && (
              <p className="text-[16px] sm:text-[17px] text-surface-text/90 leading-[1.8]">
                {renderWithPlaceholders(block.text)}
              </p>
            )}
            <ul className="flex flex-col gap-3 pl-1 sm:pl-2">
              {block.items?.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3 text-[16px] sm:text-[17px] text-surface-text/90 leading-[1.75]">
                  <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan shrink-0 mt-2.5 shadow-[0_0_6px_#7ad1fa]"></span>
                  <span>{renderWithPlaceholders(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case 'table':
        return block.table ? <ResponsiveTable key={blockIdx} data={block.table} /> : null;

      case 'regionTabs':
        return block.regionTabs ? <RegionTabs key={blockIdx} regions={block.regionTabs} /> : null;

      case 'callout':
        return (
          <div
            key={blockIdx}
            className="my-5 p-5 sm:p-6 rounded-2xl frosted-glass border-l-4 border-l-ice-cyan border-y border-r border-blue-500/20 bg-blue-500/10 shadow-lg flex flex-col gap-2"
          >
            {block.callout?.title && (
              <div className="flex items-center gap-2 text-ice-cyan font-mono text-xs uppercase tracking-wider font-bold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{block.callout.title}</span>
              </div>
            )}
            <p className="text-[15px] sm:text-[16px] text-surface-text leading-[1.75]">
              {renderWithPlaceholders(block.callout?.text || '')}
            </p>
          </div>
        );

      case 'cardGrid':
        return (
          <div key={blockIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            {block.cards?.map((card, cardIdx) => (
              <div
                key={cardIdx}
                className="p-5 rounded-2xl frosted-glass border border-blue-500/20 bg-[#0B1630]/65 shadow-md flex flex-col gap-2 hover:border-ice-cyan/35 transition-colors"
              >
                <h4 className="font-display text-sm sm:text-base font-bold text-surface-text flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan shrink-0"></span>
                  {card.title}
                </h4>
                <div className="text-xs sm:text-[13px] text-muted-text leading-relaxed whitespace-pre-line">
                  {renderWithPlaceholders(card.description)}
                </div>
              </div>
            ))}
          </div>
        );

      case 'buttonAction':
        return (
          <div key={blockIdx} className="my-5 flex flex-col gap-4">
            {block.button && (
              <div>
                {block.button.action === 'manageCookies' ? (
                  <button
                    type="button"
                    onClick={openCookieSettings}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-display text-xs sm:text-sm font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] shadow-[0_0_20px_rgba(122,209,250,0.35)] hover:shadow-[0_0_28px_rgba(122,209,250,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Cookie className="w-4 h-4" />
                    <span>{block.button.label}</span>
                  </button>
                ) : (
                  <a
                    href={block.button.href || 'mailto:privacy@maticglobals.com'}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-display text-xs sm:text-sm font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] shadow-[0_0_20px_rgba(122,209,250,0.35)] hover:shadow-[0_0_28px_rgba(122,209,250,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{block.button.label}</span>
                  </a>
                )}
              </div>
            )}

            {/* Browser cookie configuration links */}
            {block.helpLinks && (
              <div className="flex flex-col gap-2 pt-2">
                <span className="text-xs font-mono text-muted-text uppercase tracking-wider font-semibold">
                  Browser cookie management instructions:
                </span>
                <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs">
                  {block.helpLinks.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg frosted-glass border border-blue-500/25 text-surface-text hover:text-ice-cyan hover:border-ice-cyan/40 transition-colors font-mono text-[12px]"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      id="privacypolicy-page"
      className="radial-bg min-h-screen relative antialiased selection:bg-diamond-blue selection:text-white text-surface-text w-full print:bg-white print:text-black"
      style={{
        backgroundColor: '#050B1A',
        color: '#E1E8F8',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Clean @media print rules */}
      <style>{`
        @media print {
          body, #privacypolicy-page {
            background: #ffffff !important;
            color: #111111 !important;
            font-family: Georgia, serif !important;
          }
          header, footer, nav, aside, button, .print\\:hidden {
            display: none !important;
          }
          a {
            color: #000000 !important;
            text-decoration: underline !important;
          }
          a[href^="http"]:after {
            content: " (" attr(href) ")";
            font-size: 0.85em;
            color: #555555;
          }
          [data-placeholder="true"] {
            border: 1px dashed #666666 !important;
            background: transparent !important;
            color: #333333 !important;
          }
          table {
            border: 1px solid #cccccc !important;
            border-collapse: collapse !important;
            width: 100% !important;
          }
          th, td {
            border: 1px solid #cccccc !important;
            padding: 8px !important;
            color: #000000 !important;
          }
        }
      `}</style>

      {/* Skip to Content Link */}
      <a
        href="#privacy-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-diamond-blue focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to content
      </a>

      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Cookie Consent Modal */}
      <CookieConsentModal />

      {/* Floating Back to Top Button */}
      <BackToTopButton />

      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden print:hidden">
        <div className="absolute -top-[15%] left-[25%] w-[700px] h-[700px] rounded-full bg-[#3D8BFF]/10 blur-[150px]"></div>
        <div className="absolute top-[35%] -right-[10%] w-[650px] h-[650px] rounded-full bg-[#7FD6FF]/10 blur-[160px]"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[600px] h-[600px] rounded-full bg-[#3D8BFF]/08 blur-[140px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(172,199,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(172,199,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="w-full pt-6 sm:pt-8 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-10 lg:gap-14 pb-24">
        {/* =========================================================================
            1. COMPACT HERO
            ========================================================================= */}
        <section className="w-full flex flex-col gap-5 max-w-4xl pt-2">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-surface-text tracking-tight leading-tight">
            {PRIVACY_POLICY_HERO.title}
          </h1>

          {/* Date Chips */}
          <div className="flex flex-wrap items-center gap-3">
            {PRIVACY_POLICY_HERO.chips.map((chip, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full frosted-glass border border-blue-500/30 text-xs font-mono text-muted-text"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
                <span>{chip.label}:</span>
                <span className="text-surface-text font-semibold">{renderWithPlaceholders(chip.value)}</span>
              </span>
            ))}
          </div>

          <p className="text-muted-text text-base sm:text-lg max-w-3xl leading-relaxed">
            {PRIVACY_POLICY_HERO.intro}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 print:hidden">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl frosted-glass border border-blue-500/30 hover:border-ice-cyan/40 text-xs font-mono text-surface-text hover:text-ice-cyan transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-ice-cyan" />
              <span>Print or save as PDF</span>
            </button>
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl frosted-glass border border-blue-500/30 hover:border-ice-cyan/40 text-xs font-mono text-surface-text hover:text-ice-cyan transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-ice-cyan" />
              <span>Contact the Privacy Office</span>
            </button>
          </div>
        </section>

        {/* =========================================================================
            2. THE SHORT VERSION (5 Cards + Note)
            ========================================================================= */}
        <section aria-labelledby="short-version-heading" className="w-full flex flex-col gap-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ice-cyan font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <h2 id="short-version-heading">The short version</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {SHORT_VERSION_DATA.cards.map((card) => (
              <div
                key={card.id}
                className="p-4 sm:p-5 rounded-2xl frosted-glass border border-blue-500/25 bg-[#0B1630]/75 shadow-md flex flex-col gap-2 hover:border-ice-cyan/40 transition-colors"
              >
                <div className="flex items-center gap-2 font-display text-sm font-bold text-surface-text">
                  <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan shrink-0"></span>
                  <span>{card.title}</span>
                </div>
                <p className="text-xs text-muted-text leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl frosted-glass border border-blue-500/15 bg-blue-500/05 flex items-center gap-2 text-xs text-muted-text/90 italic">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
            <span>{SHORT_VERSION_DATA.note}</span>
          </div>
        </section>

        {/* =========================================================================
            3. MAIN TWO-COLUMN READING LAYOUT
            Left: Sticky TOC (Desktop 280px) | Right: Reading column (max-w-[760px])
            ========================================================================= */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-14 pt-4">
          {/* Table of Contents */}
          <TableOfContents sections={PRIVACY_SECTIONS} />

          {/* Reading Column */}
          <main
            id="privacy-content"
            tabIndex={-1}
            className="flex-1 w-full max-w-[760px] flex flex-col gap-10 focus:outline-none"
          >
            {PRIVACY_SECTIONS.map((section) => (
              <article key={section.id} className="flex flex-col gap-3">
                <SectionHeading
                  id={section.id}
                  number={section.number}
                  title={section.title}
                />

                <div className="flex flex-col gap-2 pt-1">
                  {section.blocks.map((block, blockIdx) => renderBlock(block, blockIdx))}
                </div>
              </article>
            ))}
          </main>
        </div>

      </div>
    </div>
  );
}
