import React from 'react';
import { siteConfig } from '@/config/site';

export default function Disclaimer() {
  const lastUpdated = "October 9, 2026";

  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <h1 className="text-[36px] md:text-[48px] font-bold text-[var(--primary)] mb-4 font-heading">Disclaimer</h1>
        <p className="text-[var(--text-muted)] mb-12">Last Updated: {lastUpdated}</p>

        <div className="space-y-8 text-[var(--text)] leading-relaxed text-justify">
          <section>
            <h2 className="text-[24px] font-bold mb-4 font-heading text-[var(--primary-dark)]">1. General Information</h2>
            <p>
              The information provided by {siteConfig.name} ("we," "us," or "our") on our website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold mb-4 font-heading text-[var(--primary-dark)]">2. Professional Advice</h2>
            <p>
              The site cannot and does not contain specific IT, legal, financial, or tax advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice other than within a formally executed engagement agreement. The use or reliance of any information contained on this site is solely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold mb-4 font-heading text-[var(--primary-dark)]">3. External Links</h2>
            <p>
              The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold mb-4 font-heading text-[var(--primary-dark)]">4. Liability</h2>
            <p>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
