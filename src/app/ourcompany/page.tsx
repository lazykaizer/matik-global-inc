import React from 'react';
import Link from 'next/link';
import { Target, Lightbulb, Users, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function OurCompany() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full py-24 md:py-32 bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-[var(--hero-overlay)]" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.1] mb-6">Our Company</h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
              We are a collective of technologists, financial experts, and industry veterans dedicated to democratizing enterprise-grade digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Story, Mission, Vision */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--primary)] mb-6 font-heading">Our Story</h2>
              <p className="text-[var(--text)] leading-relaxed text-justify mb-6">
                Matic Global Solutions Inc was founded on a simple premise: growth-stage companies in highly regulated industries face the same intense pressures as Fortune 500 enterprises, but often lack the internal infrastructure and budget to deploy cutting-edge technology safely.
              </p>
              <p className="text-[var(--text)] leading-relaxed text-justify">
                We set out to bridge this gap. By uniting deep regulatory and financial expertise with AI-native technological capabilities, we serve as the strategic digital backbone for life sciences, biotech, manufacturing, consumer products, and financial services companies. We do not just implement software; we engineer sustainable growth.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="bg-[var(--bg)] p-8 rounded-lg border-l-4 border-[var(--primary)]">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-[var(--primary)]" />
                  <h3 className="text-[24px] font-bold text-[var(--text)] font-heading">Our Mission</h3>
                </div>
                <p className="text-[var(--text)] leading-relaxed">
                  To provide emerging and growth-focused organizations with secure, intelligent, and scalable digital and financial solutions that accelerate their market leadership.
                </p>
              </div>
              <div className="bg-[var(--bg)] p-8 rounded-lg border-l-4 border-[var(--primary)]">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-[var(--primary)]" />
                  <h3 className="text-[24px] font-bold text-[var(--text)] font-heading">Our Vision</h3>
                </div>
                <p className="text-[var(--text)] leading-relaxed">
                  To be the globally recognized partner of choice for AI-first digital transformation, where technology and compliance converge to create unprecedented business value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="w-full bg-[var(--primary)] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-12 text-center font-heading">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Life Sciences', 'Biotech & Pharma', 'Manufacturing', 'Consumer Products', 'Financial Services', 'Growth SMBs'].map((industry) => (
              <div key={industry} className="bg-white/10 border border-white/20 p-6 rounded flex items-center justify-center text-center hover:bg-white/20 transition-colors">
                <span className="text-white font-semibold">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-[var(--bg)] py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--primary)] mb-12 text-center font-heading">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-soft text-center flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-[var(--primary)] mb-6" />
              <h3 className="text-[20px] font-bold text-[var(--text)] mb-3 font-heading">Integrity First</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">We operate with unwavering transparency, ensuring compliance and security are never compromised.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft text-center flex flex-col items-center">
              <Lightbulb className="w-12 h-12 text-[var(--primary)] mb-6" />
              <h3 className="text-[20px] font-bold text-[var(--text)] mb-3 font-heading">Innovation Driven</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">We embrace AI and emerging technologies to solve complex problems in novel, efficient ways.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft text-center flex flex-col items-center">
              <Users className="w-12 h-12 text-[var(--primary)] mb-6" />
              <h3 className="text-[20px] font-bold text-[var(--text)] mb-3 font-heading">Client Centricity</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">Your success is our success. We tailor every solution to fit your unique operational realities.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-soft text-center flex flex-col items-center">
              <HeartHandshake className="w-12 h-12 text-[var(--primary)] mb-6" />
              <h3 className="text-[20px] font-bold text-[var(--text)] mb-3 font-heading">Collaborative Excellence</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">We work seamlessly as an extension of your team, fostering knowledge transfer and empowerment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-white py-16 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--text)] mb-6 font-heading">Partner with us</h2>
          <p className="text-[18px] text-[var(--text-muted)] max-w-2xl mb-8">
            Ready to experience the difference a strategic, AI-first technology partner can make?
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
