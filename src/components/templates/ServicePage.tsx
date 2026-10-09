'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
      <section className="w-full bg-[#F8FAFC] py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[36px] md:text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0C5A96] to-[#2F7BFF] mb-4 font-heading leading-tight"
            >
              What We Offer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Comprehensive solutions designed to tackle your most complex challenges.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-[#0C5A96]/30 hover:shadow-[0_20px_40px_rgb(12,90,150,0.12)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-start overflow-hidden"
              >
                {/* Glowing Top Line */}
                <div className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-[#0C5A96] to-[#2F7BFF] group-hover:w-full transition-all duration-700 ease-out" />
                
                <div className="w-16 h-16 rounded-2xl bg-blue-50/80 text-[#0C5A96] flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-[#0C5A96] group-hover:to-[#2F7BFF] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg transition-all duration-500">
                  {React.cloneElement(offer.icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
                </div>
                
                <h3 className="text-[22px] font-bold text-gray-900 mb-4 font-heading group-hover:text-[#0C5A96] transition-colors">
                  {offer.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {offer.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="w-full bg-white py-16 md:py-24 border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[36px] font-bold text-[var(--text)] mb-12 text-center font-heading"
          >
            Technologies & Frameworks
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {technologies.map((tech, idx) => (
              <motion.div 
                key={tech} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group px-6 py-3 md:px-8 md:py-4 bg-white border border-gray-200 rounded-full cursor-pointer hover:border-[var(--primary)] transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-[0_10px_20px_rgb(12,90,150,0.1)] flex items-center justify-center"
              >
                <span className="text-gray-700 font-semibold text-[15px] md:text-[17px] group-hover:text-[var(--primary)] transition-colors">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we engage */}
      <section className="w-full bg-[var(--primary)] py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[48px] font-bold text-white mb-20 text-center font-heading"
          >
            How We Engage
          </motion.h2>
          
          <div className="flex flex-col md:flex-row justify-between gap-12 relative">
            {/* Dotted connecting line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] border-t-[3px] border-dashed border-white/20 z-0"></div>
            
            {['Discover', 'Design', 'Deliver', 'Optimize'].map((step, idx) => (
              <motion.div 
                key={step} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="group flex flex-col items-center relative z-10 md:w-1/4"
              >
                <div className="relative">
                  {/* Glowing ring on hover */}
                  <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-[1.6] transition-all duration-500 blur-md pointer-events-none"></div>
                  
                  {/* Step Number */}
                  <div className="w-16 h-16 rounded-full bg-white text-[var(--primary)] flex items-center justify-center font-bold text-2xl mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-all duration-300 relative z-10">
                    {idx + 1}
                  </div>
                </div>
                
                <h3 className="text-white text-[22px] font-bold mb-3 font-heading group-hover:text-blue-50 transition-colors">
                  {step}
                </h3>
                <p className="text-white/70 text-center text-[15px] leading-relaxed px-2 group-hover:text-white transition-colors">
                  {idx === 0 && 'We start by understanding your unique requirements, regulatory landscape, and business objectives.'}
                  {idx === 1 && 'Our experts architect a robust, compliant, and scalable solution tailored to your enterprise.'}
                  {idx === 2 && 'Agile implementation ensures rapid time-to-market without compromising on quality or security.'}
                  {idx === 3 && 'Continuous monitoring, support, and refinement to maximize ROI and operational efficiency.'}
                </p>
              </motion.div>
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
