'use client';
import React from 'react';
import Link from 'next/link';
import { Target, Lightbulb, Users, ShieldCheck, HeartHandshake, Dna, Pill, Factory, ShoppingCart, Building2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <section className="w-full bg-[#F8FAFC] py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0C5A96]/10 text-[#0C5A96] font-semibold text-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-[#0C5A96]"></span>
                About Matic Global
              </div>
              <h2 className="text-[36px] md:text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0C5A96] to-[#2F7BFF] mb-2 font-heading leading-tight">Our Story</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Matic Global Solutions Inc was founded on a simple premise: growth-stage companies in highly regulated industries face the same intense pressures as Fortune 500 enterprises, but often lack the internal infrastructure and budget to deploy cutting-edge technology safely.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We set out to bridge this gap. By uniting deep regulatory and financial expertise with AI-native technological capabilities, we serve as the strategic digital backbone for life sciences, biotech, manufacturing, consumer products, and financial services companies. We do not just implement software; we engineer sustainable growth.
              </p>
            </motion.div>

            <div className="flex flex-col gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#0C5A96] to-[#2F7BFF]" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-50 text-[#0C5A96] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0C5A96] group-hover:text-white transition-all duration-300">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-[28px] font-bold text-gray-900 font-heading">Our Mission</h3>
                </div>
                <p className="text-gray-600 text-[17px] leading-relaxed">
                  To provide emerging and growth-focused organizations with secure, intelligent, and scalable digital and financial solutions that accelerate their market leadership.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#0C5A96] to-[#2F7BFF]" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-50 text-[#0C5A96] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0C5A96] group-hover:text-white transition-all duration-300">
                    <Lightbulb className="w-7 h-7" />
                  </div>
                  <h3 className="text-[28px] font-bold text-gray-900 font-heading">Our Vision</h3>
                </div>
                <p className="text-gray-600 text-[17px] leading-relaxed">
                  To be the globally recognized partner of choice for AI-first digital transformation, where technology and compliance converge to create unprecedented business value.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="w-full bg-[#0B1120] py-20 md:py-32 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0C5A96] blur-[150px] opacity-20 pointer-events-none" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[48px] font-bold text-white mb-4 font-heading tracking-tight">Industries We Serve</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Delivering specialized digital backbone solutions to highly regulated and fast-growing sectors.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Life Sciences', icon: Dna },
              { name: 'Biotech & Pharma', icon: Pill },
              { name: 'Manufacturing', icon: Factory },
              { name: 'Consumer Products', icon: ShoppingCart },
              { name: 'Financial Services', icon: Building2 },
              { name: 'Growth SMBs', icon: TrendingUp }
            ].map((industry, idx) => (
              <motion.div 
                key={industry.name} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-[#2F7BFF]/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-white/10 text-gray-300 flex items-center justify-center group-hover:bg-[#2F7BFF] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <industry.icon className="w-6 h-6" />
                </div>
                <span className="text-gray-200 font-semibold group-hover:text-white transition-colors">{industry.name}</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2F7BFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-white py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0C5A96] to-[#2F7BFF] mb-4 font-heading leading-tight">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">The principles that guide our work, shape our culture, and drive our commitment to excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-white p-10 rounded-3xl border border-gray-100 hover:border-[#0C5A96]/30 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(12,90,150,0.12)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#0C5A96]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-20 h-20 mb-8 rounded-2xl bg-blue-50/80 text-[#0C5A96] flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0C5A96] group-hover:to-[#2F7BFF] group-hover:text-white group-hover:rotate-3 transition-all duration-500 group-hover:shadow-lg">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-[22px] font-bold text-gray-900 mb-4 font-heading group-hover:text-[#0C5A96] transition-colors">Integrity First</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">We operate with unwavering transparency, ensuring compliance and security are never compromised.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-white p-10 rounded-3xl border border-gray-100 hover:border-[#0C5A96]/30 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(12,90,150,0.12)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#0C5A96]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-20 h-20 mb-8 rounded-2xl bg-blue-50/80 text-[#0C5A96] flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0C5A96] group-hover:to-[#2F7BFF] group-hover:text-white group-hover:rotate-3 transition-all duration-500 group-hover:shadow-lg">
                <Lightbulb className="w-10 h-10" />
              </div>
              <h3 className="text-[22px] font-bold text-gray-900 mb-4 font-heading group-hover:text-[#0C5A96] transition-colors">Innovation Driven</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">We embrace AI and emerging technologies to solve complex problems in novel, efficient ways.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group bg-white p-10 rounded-3xl border border-gray-100 hover:border-[#0C5A96]/30 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(12,90,150,0.12)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#0C5A96]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-20 h-20 mb-8 rounded-2xl bg-blue-50/80 text-[#0C5A96] flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0C5A96] group-hover:to-[#2F7BFF] group-hover:text-white group-hover:rotate-3 transition-all duration-500 group-hover:shadow-lg">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-[22px] font-bold text-gray-900 mb-4 font-heading group-hover:text-[#0C5A96] transition-colors">Client Centricity</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Your success is our success. We tailor every solution to fit your unique operational realities.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group bg-white p-10 rounded-3xl border border-gray-100 hover:border-[#0C5A96]/30 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(12,90,150,0.12)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#0C5A96]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-20 h-20 mb-8 rounded-2xl bg-blue-50/80 text-[#0C5A96] flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0C5A96] group-hover:to-[#2F7BFF] group-hover:text-white group-hover:rotate-3 transition-all duration-500 group-hover:shadow-lg">
                <HeartHandshake className="w-10 h-10" />
              </div>
              <h3 className="text-[22px] font-bold text-gray-900 mb-4 font-heading group-hover:text-[#0C5A96] transition-colors">Collaborative Excellence</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">We work seamlessly as an extension of your team, fostering knowledge transfer and empowerment.</p>
            </motion.div>
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
