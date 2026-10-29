import React from 'react';
import type { Metadata } from 'next';
import { ComplianceContent } from '@/components/compliance/ComplianceContent';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Enterprise Compliances & Regulatory Governance | Matic Global Solutions Inc',
  description: 'Be audit-ready before the auditor arrives. We turn GDPR, CCPA, HIPAA, SOC 2, ISO 27001, and GxP into controls your team can run every day, with verified documentation and evidence.',
  keywords: [
    'Enterprise Compliance',
    'Regulatory Governance',
    'SOC 2 Type II Readiness',
    'ISO 27001 Certification',
    'GDPR and CCPA Privacy',
    'HIPAA Compliance',
    'GxP 21 CFR Part 11',
    'Audit Support & Readiness',
    'Third-Party Risk Management',
    'Matic Global Solutions'
  ],
  openGraph: {
    title: 'Enterprise Compliances & Regulatory Enclave | Matic Global Solutions Inc',
    description: 'Be audit-ready before the auditor arrives. Continuous compliance frameworks, GRC platforms, and audit readiness for regulated enterprises.',
    url: 'https://www.maticglobal.com/compliances',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Compliances & Regulatory Governance | Matic Global Solutions Inc',
    description: 'Be audit-ready before the auditor arrives. Controls, policies, and continuous audit readiness.',
  }
};

export default function CompliancesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    serviceType: 'Regulatory Compliance and Governance Consulting',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: 'https://www.maticglobal.com'
    },
    areaServed: 'Global',
    description: 'Turn complex global regulations including GDPR, CCPA, HIPAA, SOC 2, ISO 27001, and GxP into operational IT controls, automated evidence gathering, and audit readiness.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Enterprise Compliance Capabilities',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Regulatory Readiness & Gap Assessment'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Governance, Risk and Compliance (GRC) Implementation'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Audit Support & External Liaison'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Operational Policy Development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Data Privacy & DSAR Automation'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Third-Party Vendor Risk Management'
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
      <ComplianceContent />
    </>
  );
}
