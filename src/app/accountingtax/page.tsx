import React from 'react';
import type { Metadata } from 'next';
import { AccTaxContent } from '@/components/acctax/AccTaxContent';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Accounting and Taxation Services | Executive Wealth & Institutional Finance',
  description: 'Finance that keeps pace with growth. Accounting operations, GAAP & IFRS financial reporting, tax readiness, and fractional CFO advisory for growth-stage and regulated enterprises.',
  keywords: [
    'Accounting and Taxation',
    'Financial Reporting',
    'GAAP and IFRS Reporting',
    'Corporate Tax Planning',
    'Fractional CFO Advisory',
    'Month-End Close Optimization',
    'Internal Controls and Audit Readiness',
    'Matic Global Solutions'
  ],
  openGraph: {
    title: 'Accounting & Taxation Services | Matic Global Solutions Inc',
    description: 'Finance that keeps pace with growth. Accounting, financial reporting, and CFO-level advisory for growth-stage enterprises.',
    url: 'https://www.maticglobal.com/accountingtax',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accounting & Taxation Services | Matic Global Solutions Inc',
    description: 'Finance that keeps pace with growth. Institutional financial operations and advisory.',
  }
};

export default function AccountingTaxPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    serviceType: 'Enterprise Accounting, Tax Advisory, and CFO Operations',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: 'https://www.maticglobal.com'
    },
    areaServed: 'Global',
    description: 'Accounting operations, financial reporting, corporate tax readiness, cash flow forecasting, and CFO advisory services engineered for high-growth and regulated enterprises.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Accounting and Taxation Capabilities',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Accounting Operations & Month-End Close'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'GAAP & IFRS Financial Reporting'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate Tax Readiness & Advisory'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Planning, Budgeting & Financial Modeling'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cash Flow & Investor Reporting'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fractional CFO Advisory'
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AccTaxContent />
    </>
  );
}
