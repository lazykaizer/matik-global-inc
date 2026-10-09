import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export type ServicePageProps = {
  title: string;
  intro: string;
  bgImageUrl: string;
  offers: { icon: React.ReactNode; title: string; description: string }[];
  technologies: string[];
  relatedSlugs: string[];
};

export function ServicePageTemplate({ title, intro, bgImageUrl, offers, technologies, relatedSlugs }: ServicePageProps) {
  const relatedServices = siteConfig.services.filter(s => relatedSlugs.includes(s.path.replace('/', '')));

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full py-24 md:py-32 bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        />
        <div className="absolute inset-0 bg-[var(--hero-overlay)]" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumbs */}
          <div className="text-gray-300 text-sm mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Engagement Models</span>
            <span className="mx-2">/</span>
            <span className="text-white">{title}</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.1] mb-6">{title}</h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">{intro}</p>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="w-full bg-[var(--bg)] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--primary)] mb-12 text-center font-heading">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-soft border border-gray-100 flex flex-col items-start hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[var(--primary)] mb-6">
                  {offer.icon}
                </div>
                <h3 className="text-[20px] font-bold text-[var(--text)] mb-3 font-heading">{offer.title}</h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-justify">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="w-full bg-white py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--text)] mb-10 text-center font-heading">Technologies & Frameworks</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map(tech => (
              <span key={tech} className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-[var(--text)] font-semibold shadow-sm hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How we engage */}
      <section className="w-full bg-[var(--primary)] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-16 text-center font-heading">How We Engage</h2>
          <div className="flex flex-col md:flex-row justify-between gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-[var(--primary-dark)] z-0"></div>
            
            {['Discover', 'Design', 'Deliver', 'Optimize'].map((step, idx) => (
              <div key={step} className="flex flex-col items-center relative z-10 md:w-1/4">
                <div className="w-12 h-12 rounded-full bg-white text-[var(--primary)] flex items-center justify-center font-bold text-xl mb-4 border-4 border-[var(--primary)] shadow-sm">
                  {idx + 1}
                </div>
                <h3 className="text-white text-xl font-bold mb-2 font-heading">{step}</h3>
                <p className="text-gray-200 text-center text-sm px-4">
                  {idx === 0 && 'We start by understanding your unique requirements, regulatory landscape, and business objectives.'}
                  {idx === 1 && 'Our experts architect a robust, compliant, and scalable solution tailored to your enterprise.'}
                  {idx === 2 && 'Agile implementation ensures rapid time-to-market without compromising on quality or security.'}
                  {idx === 3 && 'Continuous monitoring, support, and refinement to maximize ROI and operational efficiency.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="w-full bg-[var(--bg)] py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--primary)] mb-10 font-heading">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map(service => (
                <Link key={service.name} href={service.path} className="bg-white p-6 rounded-md shadow-sm border border-gray-100 hover:border-[var(--primary)] transition-colors group">
                  <h3 className="text-[18px] font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors font-heading mb-2">{service.name}</h3>
                  <p className="text-[var(--primary)] font-semibold text-sm flex items-center gap-1">Learn more <span className="group-hover:translate-x-1 transition-transform">→</span></p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Band */}
      <section className="w-full bg-white py-16 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--text)] mb-6 font-heading">Ready to get started?</h2>
          <p className="text-[18px] text-[var(--text-muted)] max-w-2xl mb-8">
            Talk to our experts today to see how we can build a scalable and secure foundation for your business.
          </p>
          <Link 
            href="/contactus" 
            className="inline-flex items-center justify-center bg-[var(--primary)] text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-[var(--primary-dark)] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
