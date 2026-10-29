import React from 'react';
import type { Metadata } from 'next';
import { AppDevContent } from '@/components/appdev/AppDevContent';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Application Development | Enterprise Software & Cloud-Native Systems',
  description: 'Software your team can ship, and your auditor can trust. Custom web apps, native mobile, scalable APIs, and legacy modernization engineered for regulated enterprises.',
  keywords: [
    'Application Development',
    'Enterprise Web Applications',
    'Mobile App Development',
    'API Architecture',
    'Legacy Modernization',
    'DevSecOps',
    'Regulated Software Development',
    'Matic Global Solutions'
  ],
  openGraph: {
    title: 'Application Development | Matic Global Solutions Inc',
    description: 'Software your team can ship, and your auditor can trust. Custom web, mobile, and cloud-native software engineering.',
    url: 'https://www.maticglobal.com/applications',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Application Development | Matic Global Solutions Inc',
    description: 'Software your team can ship, and your auditor can trust. High-assurance software engineering.',
  }
};

export default function ApplicationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Enterprise Application Development & Engineering',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: 'https://www.maticglobal.com'
    },
    areaServed: 'Global',
    description: 'Custom web, mobile, API, and legacy modernization solutions engineered for high performance, compliance, and cloud scale.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Application Development Capabilities',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Web Applications'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'API Development & Integration'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Legacy Modernization'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Secure by Design DevSecOps'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'QA & Continuous Delivery'
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
      <AppDevContent />
    </>
  );
}
