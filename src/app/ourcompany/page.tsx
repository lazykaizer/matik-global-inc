import React from 'react';
import type { Metadata } from 'next';
import { OurCompanyContent } from '@/components/company/OurCompanyContent';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Our Company | Kinetic Architecture & Institutional Foundation | Matic Global Solutions Inc',
  description: 'Compete like a global enterprise without the overhead. Matic Global Solutions is an AI-first technology, compliance and finance partner for life sciences, biotech, and growth-stage companies in regulated industries.',
  keywords: [
    'Matic Global Solutions',
    'Our Company',
    'About Matic Global',
    'AI-First Technology Partner',
    'Regulated Industries Technology',
    'Life Sciences IT Partner',
    'ERP Advisory Practice',
    'Audit Readiness & Compliance',
    'Enterprise Strategy'
  ],
  openGraph: {
    title: 'Our Company | Kinetic Architecture & Institutional Foundation | Matic Global Solutions Inc',
    description: 'Compete like a global enterprise without the overhead. AI-first technology, compliance, and finance partner for regulated industries.',
    url: 'https://www.maticglobal.com/ourcompany',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Company | Matic Global Solutions Inc',
    description: 'Compete like a global enterprise without the overhead. AI-first technology, compliance, and finance partner for regulated industries.',
  }
};

export default function OurCompanyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: 'https://www.maticglobal.com',
      logo: 'https://www.maticglobal.com/images/logo.png',
      description: 'Matic Global Solutions Inc is an AI-first technology, compliance, and finance partner for life sciences and growth-stage companies in regulated industries.',
      foundingDate: '2024',
      areaServed: 'Global',
      knowsAbout: [
        'Artificial Intelligence & Machine Learning',
        'Enterprise Resource Planning (ERP)',
        'Custom Application Development',
        'Regulatory Compliance & Governance',
        'Financial Operations & Taxation'
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OurCompanyContent />
    </>
  );
}
