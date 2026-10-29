import React from 'react';
import type { Metadata } from 'next';
import { AIMLContent } from '@/components/aiml/AIMLContent';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'AI & Machine Learning Services | Kinetic Bento & Enterprise MLOps',
  description: 'Taking AI from idea to production for life sciences and regulated enterprises. High-governance data pipelines, validated custom models, sovereign LLM engineering, and robust MLOps.',
  keywords: [
    'AI and Machine Learning',
    'Enterprise AI Consulting',
    'Life Sciences AI',
    'Generative AI LLM Engineering',
    'MLOps Production Engineering',
    'Data Engineering Pipelines',
    'AI Governance and Responsible AI',
    'Matic Global Solutions'
  ],
  openGraph: {
    title: 'AI & Machine Learning Services | Matic Global Solutions Inc',
    description: 'AI that makes it past the pilot. Production-grade models, high-governance data engineering, and enterprise MLOps.',
    url: 'https://www.maticglobal.com/aiml',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Machine Learning Services | Matic Global Solutions Inc',
    description: 'AI that makes it past the pilot. We take models from idea to enterprise production.',
  }
};

export default function AIMLPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Artificial Intelligence and Machine Learning Engineering',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: 'https://www.maticglobal.com'
    },
    areaServed: 'Global',
    description: 'End-to-end artificial intelligence and machine learning consulting: strategy, data engineering, model development, LLM fine-tuning, MLOps, and responsible AI governance.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI & ML Capabilities',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Strategy and Readiness'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Data Engineering'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Model Development and Validation'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Generative AI and LLM Engineering'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MLOps and Production Engineering'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Governance and Responsible AI'
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
      <AIMLContent />
    </>
  );
}
