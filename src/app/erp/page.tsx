import React from 'react';
import type { Metadata } from 'next';
import { ERPContent } from '@/components/erp/ERPContent';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'ERP Solutions | Frosted Glassmorphism Architecture',
  description: 'Consulting, implementation and managed services across Oracle NetSuite, SAP S/4HANA, Infor CloudSuite, IBM Maximo, JD Edwards EnterpriseOne and Microsoft Dynamics 365.',
  keywords: [
    'ERP Solutions',
    'Oracle NetSuite Consulting',
    'SAP S/4HANA Implementation',
    'Infor CloudSuite',
    'IBM Maximo',
    'JD Edwards EnterpriseOne',
    'Microsoft Dynamics 365',
    'Zero Handoff ERP',
    'Matic Global Solutions'
  ],
  openGraph: {
    title: 'ERP Solutions | Matic Global Solutions Inc',
    description: 'Choose the right ERP. Get it live without handoff gaps. Advisory, execution, and continuous support across tier-1 platforms.',
    url: 'https://www.maticglobal.com/erp',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP Solutions | Matic Global Solutions Inc',
    description: 'Choose the right ERP. Get it live without handoff gaps.',
  }
};

export default function ERPPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Enterprise Resource Planning Consulting and Implementation',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: 'https://www.maticglobal.com'
    },
    areaServed: 'Global',
    description: 'Strategic consulting, agile implementation, cloud migration, and managed services for Oracle NetSuite, SAP S/4HANA, Infor, IBM Maximo, JDE, and Microsoft Dynamics 365.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ERP Lifecycle Offerings',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Strategy and Platform Selection'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Implementation and Configuration'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Upgrades and Cloud Migration'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Integration and Development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Managed Services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Analytics and Reporting'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Training and Change Management'
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
      <ERPContent />
    </>
  );
}
