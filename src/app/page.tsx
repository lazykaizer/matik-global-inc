'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <div className="w-full">
      {/* 6.1 HERO */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-[var(--hero-overlay)]" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-[40px] sm:text-[56px] md:text-[64px] font-bold text-white leading-[1.1] mb-6">
              AI-First Digital Transformation for the Modern Enterprise
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              We provide the digital backbone for life sciences, manufacturing, consumer products, financial services, and growth-stage SMBs to scale seamlessly. Bridging regulatory demands and operational efficiency through integrated AI/ML, ERP, and financial advisory—built for sustainable growth without enterprise overhead.
            </p>
            <Link 
              href="/contactus" 
              className="inline-flex items-center justify-center bg-[var(--primary)] text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-[var(--primary-dark)] transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6.2 INTRO BAND */}
      <section className="w-full relative overflow-hidden py-20 md:py-28 bg-[#0B1120]">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F7BFF]/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0C5A96]/30 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 lg:p-24 shadow-2xl relative overflow-hidden"
          >
            {/* Hover shine effect */}
            <div className="absolute top-0 left-0 -translate-x-[150%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-30deg] group-hover:animate-shine pointer-events-none" />
            
            {/* Quotation mark decoration */}
            <div className="absolute top-4 left-6 md:top-8 md:left-10 text-[#2F7BFF]/20 text-8xl md:text-[120px] font-serif leading-none italic pointer-events-none select-none">
              &ldquo;
            </div>
            
            <p className="text-gray-200 text-[20px] md:text-[26px] lg:text-[32px] leading-relaxed md:leading-[1.6] text-center font-light relative z-10">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Matic Global Solutions Inc</span> is your AI-first strategic partner. We empower emerging life sciences, biotech, manufacturing, consumer products, financial services, and growth-focused SMBs with <span className="text-white font-medium border-b-2 border-[#2F7BFF]/40">enterprise-grade AI/ML, digital technology, financial accounting, and taxation solutions</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6.3 SOLUTIONS FOR YOUR BUSINESS - BENTO GRID */}
      <section className="w-full bg-[#F0F3F7] py-16 md:py-24 lg:py-[120px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center text-[36px] sm:text-[48px] md:text-[56px] text-[var(--primary)] mb-12 md:mb-16"
          >
            <span className="font-normal">Solutions For</span> <span className="font-bold">Your Business</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. AI and ML (Large) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/aiml" className="group block bg-white p-8 rounded-2xl h-full border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <h3 className="text-[24px] font-bold text-[var(--primary)] leading-tight max-w-[80%] font-heading">AI and ML</h3>
                  <div className="w-[40px] h-[40px] rounded-full bg-[#EAF3FB] flex items-center justify-center text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-[16px] text-gray-600 leading-relaxed relative z-10">
                  Transform operations with predictive analytics, NLP, and advanced MLOps designed for high-growth sectors.
                </p>
              </Link>
            </motion.div>

            {/* 2. ERP */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/erp" className="group block bg-white p-8 rounded-2xl h-full border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <h3 className="text-[24px] font-bold text-[var(--primary)] leading-tight max-w-[80%] font-heading">ERP</h3>
                  <div className="w-[40px] h-[40px] rounded-full bg-[#EAF3FB] flex items-center justify-center text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-[16px] text-gray-600 leading-relaxed relative z-10">
                  Streamline operations across NetSuite, SAP, and Dynamics.
                </p>
              </Link>
            </motion.div>

            {/* 3. Cybersecurity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/cybersecurity" className="group block bg-white p-8 rounded-2xl h-full border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <h3 className="text-[24px] font-bold text-[var(--primary)] leading-tight max-w-[80%] font-heading">Cybersecurity</h3>
                  <div className="w-[40px] h-[40px] rounded-full bg-[#EAF3FB] flex items-center justify-center text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-[16px] text-gray-600 leading-relaxed relative z-10">
                  Robust protection aligned to NIST, CASB, and SIEM.
                </p>
              </Link>
            </motion.div>

            {/* 4. Compliances */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/compliances" className="group block bg-[var(--primary)] p-8 rounded-2xl h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <h3 className="text-[24px] font-bold text-white leading-tight max-w-[80%] font-heading">Compliances</h3>
                  <div className="w-[40px] h-[40px] rounded-full bg-white/20 flex items-center justify-center text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[var(--primary)]">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-[16px] text-white/90 leading-relaxed relative z-10">
                  Guide through GDPR, GRC, and global regulatory requirements.
                </p>
              </Link>
            </motion.div>

            {/* 5. Cloud Strategy (Large) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/cloudstrategy" className="group block bg-white p-8 rounded-2xl h-full border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <h3 className="text-[24px] font-bold text-[var(--primary)] leading-tight max-w-[80%] font-heading">Cloud Strategy</h3>
                  <div className="w-[40px] h-[40px] rounded-full bg-[#EAF3FB] flex items-center justify-center text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-[16px] text-gray-600 leading-relaxed relative z-10">
                  Modernize IT, optimize cost, and build a future-ready roadmap on Azure, AWS, and GCP.
                </p>
              </Link>
            </motion.div>
            
            {/* 6. App Dev */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/applications" className="group block bg-white p-8 rounded-2xl h-full border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <h3 className="text-[24px] font-bold text-[var(--primary)] leading-tight max-w-[80%] font-heading">Application Development</h3>
                  <div className="w-[40px] h-[40px] rounded-full bg-[#EAF3FB] flex items-center justify-center text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-[16px] text-gray-600 leading-relaxed relative z-10">
                  Deliver scalable, secure, and high-performance custom software solutions.
                </p>
              </Link>
            </motion.div>
            
            {/* 7. Accounting */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Link href="/accountingtax" className="group block bg-white p-8 rounded-2xl h-full border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <h3 className="text-[24px] font-bold text-[var(--primary)] leading-tight max-w-[80%] font-heading">Accounting & Tax</h3>
                  <div className="w-[40px] h-[40px] rounded-full bg-[#EAF3FB] flex items-center justify-center text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-[16px] text-gray-600 leading-relaxed relative z-10">
                  Expert financial management covering GAAP/IFRS reporting.
                </p>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6.4 MISSION / WHY US */}
      <section className="w-full bg-white">
        <div className="flex flex-col md:flex-row">
          <div 
            className="md:hidden w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)' }}
          />
          <div className="w-full md:w-1/2 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 flex flex-col justify-center">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--primary)] mb-8 font-heading">Why Choose Us?</h2>
            <p className="text-[16px] md:text-[18px] text-[var(--text)] leading-[1.6] text-left mb-8">
              We exist to give emerging life sciences, biotech, pharma, and growth-focused SMBs access to enterprise-grade AI/ML, digital transformation, cybersecurity, compliance, accounting, and taxation. 
            </p>
            <p className="text-[16px] md:text-[18px] text-[var(--text)] leading-[1.6] text-left">
              Smaller organizations face the exact same regulatory and operational pressures as large enterprises, yet often lack the internal infrastructure to manage them. We bridge that critical gap by delivering scalable, secure, and intelligent solutions. Acting as a strategic partner, we build the digital backbone required for your sustainable growth and long-term competitive advantage.
            </p>
          </div>
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
