import React from 'react';
import Link from 'next/link';

interface PlatformCard {
  number: string;
  tile: string;
  name: string;
  description: string;
  chips: { label: string; hot?: boolean }[];
  href: string;
}

const platforms: PlatformCard[] = [
  {
    number: '01',
    tile: 'NS',
    name: 'Oracle NetSuite',
    description: 'Cloud ERP built for rapid scaling and global multi-entity consolidation.',
    chips: [
      { label: 'Mid-market' },
      { label: 'Distribution' },
      { label: 'SaaS' }
    ],
    href: '/erp'
  },
  {
    number: '02',
    tile: 'IN',
    name: 'Infor',
    description: 'Deep industry manufacturing and complex process distribution functionality.',
    chips: [
      { label: 'M3', hot: true },
      { label: 'SyteLine', hot: true },
      { label: 'Manufacturing' }
    ],
    href: '/erp'
  },
  {
    number: '03',
    tile: 'OD',
    name: 'Odoo',
    description: 'Modular open suite ideal for high-agility growth companies.',
    chips: [
      { label: 'Modular' },
      { label: 'Open suite' },
      { label: 'Fast-growing teams' }
    ],
    href: '/erp'
  },
  {
    number: '04',
    tile: 'SAP',
    name: 'SAP',
    description: 'World-standard enterprise architecture for heavily governed operations.',
    chips: [
      { label: 'Large enterprise' },
      { label: 'Global compliance' }
    ],
    href: '/erp'
  },
  {
    number: '05',
    tile: 'JDE',
    name: 'JD Edwards',
    description: 'Proven robustness for heavy equipment, capital assets, and distribution.',
    chips: [
      { label: 'Multi-entity' },
      { label: 'Construction' },
      { label: 'Project-driven' }
    ],
    href: '/erp'
  },
  {
    number: '06',
    tile: 'D365',
    name: 'Microsoft Dynamics 365',
    description: 'Native ecosystem connectivity with Office 365, Azure, and Power Platform.',
    chips: [
      { label: 'Microsoft ecosystem' },
      { label: 'Power Platform' }
    ],
    href: '/erp'
  }
];

export const ERPPlatformsSection: React.FC = () => {
  return (
    <section className="erp-sec" aria-labelledby="erp-h" id="erp-platforms">
      <div className="erp-wrap">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto 40px' }}>
          <h2
            id="erp-h"
            style={{
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: 1.2,
              letterSpacing: '-.02em',
              color: '#fff',
              margin: '0 0 14px'
            }}
            className="whitespace-normal sm:whitespace-nowrap"
          >
            ERP platforms we implement
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.6, margin: 0, color: '#C5D2EA' }}>
            Independent advice across six leading platforms.
          </p>
        </div>

        {/* 6 Platform Cards Grid */}
        <div className="erp-grid">
          {platforms.map((platform) => (
            <article key={platform.number} className="erp-card">
              <span className="erp-ghost" aria-hidden="true">
                {platform.number}
              </span>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="erp-tile" aria-hidden="true">
                  {platform.tile}
                </div>
              </div>

              <h3
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  fontSize: '26px',
                  color: '#fff',
                  margin: '8px 0 0'
                }}
              >
                {platform.name}
              </h3>

              <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.65, color: '#C5D2EA' }}>
                {platform.description}
              </p>

              <ul className="erp-chips">
                {platform.chips.map((chip, idx) => (
                  <li key={idx} className={chip.hot ? 'hot' : undefined}>
                    {chip.label}
                  </li>
                ))}
              </ul>

              <Link href={platform.href} className="erp-explore">
                Explore{' '}
                <span className="dot">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom Assessment Band */}
        <div className="erp-band flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="w-full sm:flex-1">
            <div
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                color: '#fff',
                marginBottom: '6px'
              }}
              className="text-xl sm:text-[22px]"
            >
              Not sure which platform fits?
            </div>
            <div
              style={{ lineHeight: 1.6, color: '#C5D2EA' }}
              className="text-sm sm:text-[15px] whitespace-normal"
            >
              We compare all six against your requirements and give you one clear, independent recommendation.
            </div>
          </div>

          <Link href="/contactus?type=business" className="erp-cta w-full sm:w-auto justify-center text-center">
            Book a Free ERP Assessment{' '}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
