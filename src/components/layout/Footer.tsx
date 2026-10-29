'use client';

import React from 'react';
import { siteConfig } from '@/config/site';
import { Logo } from '@/components/ui/Logo';
import { openCookieSettings } from '@/lib/cookieConsent';
import BeamWordmarkFooter, { FooterColumn, FooterSocial } from '@/components/ui/beam-wordmark-footer';

export function Footer() {
  const year = 2026;

  const socials: FooterSocial[] = [
    { label: "LinkedIn", href: siteConfig.socialLinks.linkedin, icon: "linkedin" },
    { label: "X", href: siteConfig.socialLinks.x, icon: "x" },
    { label: "Facebook", href: siteConfig.socialLinks.facebook, icon: "facebook" },
    { label: "Instagram", href: siteConfig.socialLinks.instagram, icon: "instagram" },
  ];

  const columns: FooterColumn[] = [
    {
      title: "Core Services",
      links: [
        { label: "AI and ML", href: "/aiml" },
        { label: "ERP Solutions", href: "/erp" },
        { label: "Application Development", href: "/applications" },
        { label: "Compliance", href: "/compliances" },
        { label: "Accounting and Taxation", href: "/accountingtax" },
      ],
    },
    {
      title: "Contact & Scale",
      links: [
        { label: "About Our Team", href: "/ourcompany" },
        { label: "Inquiries & Support", href: "/contactus" },
        { label: "Privacy Policy", href: "/privacypolicy" },
        { label: "Manage Cookies", href: "#cookies" },
      ],
    },
  ];

  const handleLinkClick = (label: string, href?: string) => {
    if (label === "Manage Cookies" || href === "#cookies") {
      openCookieSettings();
    }
  };

  return (
    <BeamWordmarkFooter
      brand="Matic Global Solutions"
      wordmark="Matic Global Solutions"
      company={siteConfig.name}
      year={year}
      logo={<Logo inverted={true} />}
      description="Matic Global Solutions brings AI-first technology, ERP execution, and regulatory compliance know-how to high-growth companies navigating complex operational environments."
      socials={socials}
      columns={columns}
      onLinkClick={handleLinkClick}
      background="#050B1A"
      accent="#3d8bff"
      wordTop="#245bd8"
      wordFoot="#050B1A"
      className="mt-auto border-t border-blue-500/15"
    />
  );
}
