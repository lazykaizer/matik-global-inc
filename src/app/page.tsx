import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <div className="w-full">
      {/* 6.1 HERO */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center bg-gray-900 overflow-hidden">
        {/* Placeholder image background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-[var(--hero-overlay)]" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-[40px] sm:text-[56px] md:text-[64px] font-bold text-white leading-[1.1] mb-6">
              AI-First Digital Transformation for the Modern Enterprise
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              We provide the digital backbone for life sciences, manufacturing, consumer products, financial services, and growth-stage SMBs to scale seamlessly. Bridging regulatory demands and operational efficiency through integrated AI/ML, ERP, and financial advisory—built for sustainable growth without enterprise overhead.
            </p>
            <Link 
              href="/contactus" 
              className="inline-flex items-center justify-center bg-[var(--primary)] text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-[var(--primary-dark)] hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 6.2 INTRO BAND */}
      <section className="w-full bg-[var(--primary)] py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-24 lg:px-44">
          <p className="text-white text-[20px] md:text-[24px] lg:text-[28px] leading-[1.5] text-justify font-medium">
            Matic Global Solutions Inc is your AI-first strategic partner. We empower emerging life sciences, biotech, manufacturing, consumer products, financial services, and growth-focused SMBs with enterprise-grade AI/ML, digital technology, financial accounting, and taxation solutions. Our core differentiator lies in combining deep regulatory expertise with an AI-native approach to ensure sustainable, compliant, and accelerated growth.
          </p>
        </div>
      </section>

      {/* 6.3 SOLUTIONS FOR YOUR BUSINESS */}
      <section className="w-full bg-[var(--bg)] py-16 md:py-24 lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-[36px] sm:text-[48px] md:text-[56px] text-[var(--primary)] mb-12 md:mb-16">
            <span className="font-normal">Solutions For</span> <span className="font-bold">Your Business</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-9">
            {/* 1. AI and ML */}
            <Link href="/aiml" className="group block bg-white p-8 md:p-9 relative overflow-hidden transition-all duration-300 hover:shadow-soft">
              <div className="flex justify-between items-start mb-12 relative z-10">
                <h3 className="text-[28px] md:text-[34px] font-normal text-[var(--primary)] leading-tight max-w-[80%] font-heading">AI and ML</h3>
                <div className="w-[70px] h-[44px] rounded-full border border-[var(--text)] flex items-center justify-center text-[var(--text)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] group-hover:text-white" aria-label="Open AI and ML">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <p className="text-[16px] md:text-[18px] text-[var(--text)] text-justify leading-relaxed relative z-10">
                Transform operations with predictive analytics, NLP, and advanced MLOps designed for high-growth sectors.
              </p>
            </Link>

            {/* 2. ERP */}
            <Link href="/erp" className="group block bg-white p-8 md:p-9 relative overflow-hidden transition-all duration-300 hover:shadow-soft">
              <div className="flex justify-between items-start mb-12 relative z-10">
                <h3 className="text-[28px] md:text-[34px] font-normal text-[var(--primary)] leading-tight max-w-[80%] font-heading">ERP</h3>
                <div className="w-[70px] h-[44px] rounded-full border border-[var(--text)] flex items-center justify-center text-[var(--text)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] group-hover:text-white" aria-label="Open ERP">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <p className="text-[16px] md:text-[18px] text-[var(--text)] text-justify leading-relaxed relative z-10">
                Streamline operations and improve financial visibility across NetSuite, Infor JD Edwards, SAP, and MS Dynamics.
              </p>
            </Link>

            {/* 3. Application development */}
            <Link href="/applications" className="group block bg-white p-8 md:p-9 relative overflow-hidden transition-all duration-300 hover:shadow-soft">
              <div className="flex justify-between items-start mb-12 relative z-10">
                <h3 className="text-[28px] md:text-[34px] font-normal text-[var(--primary)] leading-tight max-w-[80%] font-heading">Application Development</h3>
                <div className="w-[70px] h-[44px] rounded-full border border-[var(--text)] flex items-center justify-center text-[var(--text)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] group-hover:text-white" aria-label="Open Application Development">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <p className="text-[16px] md:text-[18px] text-[var(--text)] text-justify leading-relaxed relative z-10">
                Deliver scalable, secure, and high-performance custom web, mobile, and software solutions for your enterprise.
              </p>
            </Link>

            {/* 4. Cloud Strategy */}
            <Link href="/cloudstrategy" className="group block bg-white p-8 md:p-9 relative overflow-hidden transition-all duration-300 hover:shadow-soft">
              <div className="flex justify-between items-start mb-12 relative z-10">
                <h3 className="text-[28px] md:text-[34px] font-normal text-[var(--primary)] leading-tight max-w-[80%] font-heading">Cloud Strategy and Infrastructure</h3>
                <div className="w-[70px] h-[44px] rounded-full border border-[var(--text)] flex items-center justify-center text-[var(--text)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] group-hover:text-white" aria-label="Open Cloud Strategy and Infrastructure">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <p className="text-[16px] md:text-[18px] text-[var(--text)] text-justify leading-relaxed relative z-10">
                Modernize IT, optimize cost, and build a future-ready, resilient roadmap on Azure, AWS, and GCP.
              </p>
            </Link>

            {/* 5. Cybersecurity */}
            <Link href="/cybersecurity" className="group block bg-white p-8 md:p-9 relative overflow-hidden transition-all duration-300 hover:shadow-soft">
              <div className="flex justify-between items-start mb-12 relative z-10">
                <h3 className="text-[28px] md:text-[34px] font-normal text-[var(--primary)] leading-tight max-w-[80%] font-heading">Cybersecurity</h3>
                <div className="w-[70px] h-[44px] rounded-full border border-[var(--text)] flex items-center justify-center text-[var(--text)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] group-hover:text-white" aria-label="Open Cybersecurity">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <p className="text-[16px] md:text-[18px] text-[var(--text)] text-justify leading-relaxed relative z-10">
                Ensure risk-based, robust protection aligned to NIST, CASB, SIEM, and modern SOC practices.
              </p>
            </Link>

            {/* 6. Compliances */}
            <Link href="/compliances" className="group block bg-white p-8 md:p-9 relative overflow-hidden transition-all duration-300 hover:shadow-soft">
              <div className="flex justify-between items-start mb-12 relative z-10">
                <h3 className="text-[28px] md:text-[34px] font-normal text-[var(--primary)] leading-tight max-w-[80%] font-heading">Compliances</h3>
                <div className="w-[70px] h-[44px] rounded-full border border-[var(--text)] flex items-center justify-center text-[var(--text)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] group-hover:text-white" aria-label="Open Compliances">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <p className="text-[16px] md:text-[18px] text-[var(--text)] text-justify leading-relaxed relative z-10">
                Guide your organization through complex GDPR, GRC, and ever-evolving global regulatory requirements safely.
              </p>
            </Link>

            {/* 7. Accounting and Taxation */}
            <Link href="/accountingtax" className="group block bg-white p-8 md:p-9 relative overflow-hidden transition-all duration-300 hover:shadow-soft lg:col-span-3">
              <div className="flex justify-between items-start mb-12 relative z-10">
                <h3 className="text-[28px] md:text-[34px] font-normal text-[var(--primary)] leading-tight max-w-[80%] font-heading">Accounting and Taxation</h3>
                <div className="w-[70px] h-[44px] rounded-full border border-[var(--text)] flex items-center justify-center text-[var(--text)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:border-[var(--primary)] group-hover:text-white" aria-label="Open Accounting and Taxation">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <p className="text-[16px] md:text-[18px] text-[var(--text)] text-justify leading-relaxed relative z-10 max-w-4xl">
                Expert financial management covering GAAP/IFRS reporting, rigorous cost optimization, and comprehensive tax advisory to sustain bottom-line health.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 6.4 MISSION / WHY US */}
      <section className="w-full bg-white">
        <div className="flex flex-col md:flex-row">
          {/* Mobile Image (shown first on small screens) */}
          <div 
            className="md:hidden w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)' }}
          />
          
          <div className="w-full md:w-1/2 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 flex flex-col justify-center">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--primary)] mb-8 font-heading">Why Choose Us?</h2>
            <p className="text-[16px] md:text-[18px] text-[var(--text)] leading-[1.6] text-justify mb-8">
              We exist to give emerging life sciences, biotech, pharma, and growth-focused SMBs access to enterprise-grade AI/ML, digital transformation, cybersecurity, compliance, accounting, and taxation. 
            </p>
            <p className="text-[16px] md:text-[18px] text-[var(--text)] leading-[1.6] text-justify">
              Smaller organizations face the exact same regulatory and operational pressures as large enterprises, yet often lack the internal infrastructure to manage them. We bridge that critical gap by delivering scalable, secure, and intelligent solutions. Acting as a strategic partner, we build the digital backbone required for your sustainable growth and long-term competitive advantage.
            </p>
          </div>

          {/* Desktop Image */}
          <div 
            className="hidden md:block w-full md:w-1/2 min-h-[400px] bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)' }}
          />
        </div>
      </section>

      {/* 6.5 CLOSING CTA STRIP */}
      <section className="w-full bg-[var(--primary)] py-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-white text-[24px] md:text-[32px] font-semibold text-center md:text-left">
            Ready to accelerate your digital transformation?
          </h2>
          <Link 
            href="/contactus" 
            className="inline-flex items-center justify-center bg-white text-[var(--primary)] px-8 py-3 font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}
