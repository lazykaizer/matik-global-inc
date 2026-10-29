import React from 'react';
import type { Metadata } from 'next';
import { PrivacyPolicyContent } from '@/components/privacy/PrivacyPolicyContent';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy | Matic Global Solutions',
  description: 'How Matic Global Solutions Inc. collects, uses and protects personal information, and the choices you have.',
  keywords: [
    'Matic Global Privacy Policy',
    'Data Protection Policy',
    'GDPR compliance',
    'California Privacy Rights',
    'DPDP Act India',
    'Enterprise Data Security',
  ],
  alternates: {
    canonical: 'https://www.maticglobal.com/privacypolicy',
  },
  openGraph: {
    title: 'Privacy Policy | Matic Global Solutions',
    description: 'How Matic Global Solutions Inc. collects, uses and protects personal information, and the choices you have.',
    url: 'https://www.maticglobal.com/privacypolicy',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Matic Global Solutions',
    description: 'How Matic Global Solutions Inc. collects, uses and protects personal information, and the choices you have.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy | Matic Global Solutions',
    description: 'How Matic Global Solutions Inc. collects, uses and protects personal information, and the choices you have.',
    url: 'https://www.maticglobal.com/privacypolicy',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: 'https://www.maticglobal.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PrivacyPolicyContent />
    </>
  );
}
