import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { ContactContent } from '@/components/contact/ContactContent';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Us | Enterprise Advisory & Career Opportunities | Matic Global Solutions Inc',
  description: "Let's talk. Whether you need an AI-first technology, compliance and finance partner, or want to join our team, you're in the right place.",
  keywords: [
    'Contact Matic Global Solutions',
    'Enterprise AI Consulting',
    'ERP Advisory Enquiries',
    'Compliance Consultation',
    'Careers at Matic Global',
    'Life Sciences Technology Partner',
  ],
  openGraph: {
    title: 'Contact Us | Matic Global Solutions Inc',
    description: "Let's talk. Enterprise technology partnership or careers in AI, ERP, and compliance.",
    url: 'https://www.maticglobal.com/contactus',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Matic Global Solutions Inc',
    description: "Let's talk. Technology partner and career opportunities in AI, ERP, and compliance.",
  },
};

async function ContactDataLoader({
  searchParams,
}: {
  searchParams?: Promise<{ type?: string }>;
}) {
  const resolved = searchParams ? await searchParams : {};
  const initialTab = resolved?.type === 'careers' ? 'careers' : 'business';
  return <ContactContent initialTab={initialTab} />;
}

export default function ContactUsPage({
  searchParams,
}: {
  searchParams?: Promise<{ type?: string }>;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Matic Global Solutions Inc',
    description: 'Direct communications channel for enterprise business inquiries, RFP submissions, and career applications.',
    url: 'https://www.maticglobal.com/contactus',
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: 'https://www.maticglobal.com',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support and enterprise sales',
          email: siteConfig.contactEmail,
          telephone: siteConfig.contactPhone,
        },
        {
          '@type': 'ContactPoint',
          contactType: 'talent and recruitment',
          email: 'careers@maticglobal.com',
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<ContactContent initialTab="business" />}>
        <ContactDataLoader searchParams={searchParams} />
      </Suspense>
    </>
  );
}
