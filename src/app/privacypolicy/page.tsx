import React from 'react';
import { siteConfig } from '@/config/site';

export default function PrivacyPolicy() {
  const lastUpdated = "October 9, 2026";

  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <h1 className="text-[36px] md:text-[48px] font-bold text-[var(--primary)] mb-4 font-heading">Privacy Policy</h1>
        <p className="text-[var(--text-muted)] mb-12">Last Updated: {lastUpdated}</p>

        <div className="space-y-8 text-[var(--text)] leading-relaxed text-justify">
          <section>
            <h2 className="text-[24px] font-bold mb-4 font-heading text-[var(--primary-dark)]">1. Introduction</h2>
            <p>
              Welcome to {siteConfig.name} ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tells you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold mb-4 font-heading text-[var(--primary-dark)]">2. The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] font-bold mb-4 font-heading text-[var(--primary-dark)]">3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] font-bold mb-4 font-heading text-[var(--primary-dark)]">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-bold mb-4 font-heading text-[var(--primary-dark)]">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
            <p className="mt-4">
              If you wish to exercise any of the rights set out above, please contact us at <a href={`mailto:${siteConfig.contactEmail}`} className="text-[var(--primary)] underline hover:text-[var(--primary-dark)]">{siteConfig.contactEmail}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
