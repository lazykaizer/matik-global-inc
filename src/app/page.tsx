import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Database, 
  Code2, 
  ShieldCheck, 
  Calculator, 
  Activity, 
  Factory, 
  ShoppingBag, 
  Building2, 
  TrendingUp,
  Cpu,
  Layers,
  FileCheck,
  Zap
} from 'lucide-react';
import { GlassFold } from '@/components/ui/glass-fold';
import { MetallicButton } from '@/components/ui/metallic-button';
import HowItWorks from '@/components/ui/how-it-works';
import { WhatWeDoCards } from '@/components/home/WhatWeDoCards';
import FinalCtaBanner from '@/components/ui/final-cta-banner';

export default function Home() {
  return (
    <div className="w-full bg-[#050B1A] text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative w-full pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden flex items-center min-h-[75vh]">
        {/* Background photo - clearly visible */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero_enterprise.jpg')" }}
        />
        {/* Softened gradient overlay: high image opacity and visibility, with dark gradient on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B1A]/75 via-[#050B1A]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A]/60 via-transparent to-transparent" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl sm:max-w-3xl">

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-white leading-[1.08] tracking-tight font-space mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              Big-company systems.{' '}
              <span className="block mt-1 bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(127,214,255,0.3)]">
                Growth-stage speed.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg lg:text-[18px] text-slate-100 leading-relaxed max-w-2xl font-inter mb-9 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Matic Global Solutions brings AI, ERP, application development, compliance and finance support to life sciences and other regulated companies, so you can grow without building a full IT and compliance department first.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contactus"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded text-sm font-bold tracking-wide bg-gradient-to-r from-[#3D8BFF] to-[#7FD6FF] text-[#050B1A] font-space hover:shadow-[0_0_24px_rgba(127,214,255,0.45)] hover:-translate-y-0.5 transition-all shadow-lg"
              >
                Contact Us
              </Link>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded text-sm font-medium tracking-wide bg-[#101E40]/80 border border-[rgba(125,170,255,0.35)] text-white font-space hover:border-[#7FD6FF] hover:bg-[#101E40] transition-all backdrop-blur-md shadow-lg"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INDUSTRIES WE PROTECT & SCALE
          ========================================================================= */}
      <section className="w-full pt-20 md:pt-28 pb-10 md:pb-14 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-white">
              Industries We Protect &amp; Scale
            </h2>
            <p className="text-[#A9B8D6] text-base sm:text-lg font-inter mt-3 max-w-2xl">
              Specialized digital and operational frameworks calibrated for heavily regulated sectors.
            </p>
          </div>

          {/* 5 Glass Tiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Life Sciences & Biotech (Flagship Domain - Larger Footprint) */}
            <div className="md:col-span-2 lg:col-span-2 p-8 rounded-xl bg-gradient-to-br from-[#101E40] to-[#0B1630] border-2 border-cyan-400/40 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(127,214,255,0.2)] transition-all">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 font-space uppercase tracking-wider">
                  Flagship Domain
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-space mb-3 group-hover:text-cyan-300 transition-colors">
                Life Sciences &amp; Biotech
              </h3>
              <p className="text-[#A9B8D6] text-base sm:text-lg font-inter leading-relaxed max-w-2xl mb-6">
                Compliant systems and clean data from early stage to commercial launch.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-blue-500/15">
                <span className="text-xs font-medium font-space px-3 py-1 rounded bg-[#050B1A]/80 border border-blue-500/20 text-slate-300">
                  GxP &amp; 21 CFR Part 11
                </span>
                <span className="text-xs font-medium font-space px-3 py-1 rounded bg-[#050B1A]/80 border border-blue-500/20 text-slate-300">
                  FDA Validation Ready
                </span>
                <span className="text-xs font-medium font-space px-3 py-1 rounded bg-[#050B1A]/80 border border-blue-500/20 text-slate-300">
                  Clinical Data Pipelines
                </span>
              </div>
            </div>

            {/* 2. Manufacturing */}
            <div className="p-8 rounded-xl bg-[#101E40]/70 border border-blue-500/20 backdrop-blur-md group hover:border-cyan-400/40 hover:bg-[#101E40] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-cyan-300 mb-6">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-space mb-3 group-hover:text-cyan-300 transition-colors">
                  Manufacturing
                </h3>
                <p className="text-[#A9B8D6] text-sm sm:text-base font-inter leading-relaxed mb-6">
                  Connected operations, from the shop floor to the finance team.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-blue-500/15">
                <span className="text-xs font-medium font-space px-2.5 py-1 rounded bg-[#050B1A]/80 border border-blue-500/20 text-slate-300">
                  Shop-Floor Telemetry
                </span>
                <span className="text-xs font-medium font-space px-2.5 py-1 rounded bg-[#050B1A]/80 border border-blue-500/20 text-slate-300">
                  Supply Chain ERP
                </span>
              </div>
            </div>

            {/* 3. Consumer Products */}
            <div className="p-8 rounded-xl bg-[#101E40]/70 border border-blue-500/20 backdrop-blur-md group hover:border-cyan-400/40 hover:bg-[#101E40] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-cyan-300 mb-6">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-space mb-3 group-hover:text-cyan-300 transition-colors">
                  Consumer Products
                </h3>
                <p className="text-[#A9B8D6] text-sm sm:text-base font-inter leading-relaxed mb-6">
                  Forecasting, ERP and analytics for fast-moving brands.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-blue-500/15">
                <span className="text-xs font-medium font-space px-2.5 py-1 rounded bg-[#050B1A]/80 border border-blue-500/20 text-slate-300">
                  Demand Forecasting
                </span>
                <span className="text-xs font-medium font-space px-2.5 py-1 rounded bg-[#050B1A]/80 border border-blue-500/20 text-slate-300">
                  Omnichannel Margins
                </span>
              </div>
            </div>

            {/* 4. Financial Services */}
            <div className="p-8 rounded-xl bg-[#101E40]/70 border border-blue-500/20 backdrop-blur-md group hover:border-cyan-400/40 hover:bg-[#101E40] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-cyan-300 mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-space mb-3 group-hover:text-cyan-300 transition-colors">
                  Financial Services
                </h3>
                <p className="text-[#A9B8D6] text-sm sm:text-base font-inter leading-relaxed mb-6">
                  Compliant platforms, reporting and controls for regulated firms.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-blue-500/15">
                <span className="text-xs font-medium font-space px-2.5 py-1 rounded bg-[#050B1A]/80 border border-blue-500/20 text-slate-300">
                  SEC / FINRA Controls
                </span>
                <span className="text-xs font-medium font-space px-2.5 py-1 rounded bg-[#050B1A]/80 border border-blue-500/20 text-slate-300">
                  Immutable Audit Trails
                </span>
              </div>
            </div>

            {/* 5. Growth-Stage SMBs */}
            <div className="p-8 rounded-xl bg-[#101E40]/70 border border-blue-500/20 backdrop-blur-md group hover:border-cyan-400/40 hover:bg-[#101E40] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-cyan-300 mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-space mb-3 group-hover:text-cyan-300 transition-colors">
                  Growth-Stage SMBs
                </h3>
                <p className="text-[#A9B8D6] text-sm sm:text-base font-inter leading-relaxed mb-6">
                  The systems of a larger company, sized for yours.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-blue-500/15">
                <span className="text-xs font-medium font-space px-2.5 py-1 rounded bg-[#050B1A]/80 border border-blue-500/20 text-slate-300">
                  Fractional Scale
                </span>
                <span className="text-xs font-medium font-space px-2.5 py-1 rounded bg-[#050B1A]/80 border border-blue-500/20 text-slate-300">
                  Zero Overhead Bloat
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. INTRO / THE STRATEGIC DILEMMA (Full-Bleed Corner-to-Corner 3D Blinds)
          ========================================================================= */}
      <FinalCtaBanner
        fullBleed
        heading={
          <>
            Small teams.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FD6FF] via-[#BFE8FF] to-[#3D8BFF] drop-shadow-[0_0_24px_rgba(127,214,255,0.45)]">
              Enterprise-sized regulation.
            </span>
          </>
        }
        body="Growth-stage companies answer to the same regulators and investors as large enterprises, but without the IT, compliance and finance departments behind them. Matic Global Solutions fills that gap with AI-first technology, compliance know-how and financial expertise, delivered by one team."
        gradientColors={["#60A5FA", "#2563EB", "#0F286E", "#050B1A"]}
        actions={
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0B1A3A]/90 border border-cyan-400/50 text-cyan-200 text-xs sm:text-sm font-space font-semibold shadow-[0_0_16px_rgba(34,211,238,0.25)] backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Integrated Tech Stack</span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0B1A3A]/90 border border-cyan-400/50 text-cyan-200 text-xs sm:text-sm font-space font-semibold shadow-[0_0_16px_rgba(34,211,238,0.25)] backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Zero Functional Silos</span>
            </div>
            <a 
              href="#services" 
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-space font-bold shadow-[0_0_24px_rgba(59,130,246,0.6)] hover:shadow-[0_0_32px_rgba(34,211,238,0.8)] transition-all hover:-translate-y-0.5"
            >
              <span>Explore Solutions</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        }
      />

      {/* =========================================================================
          5. SERVICES BENTO GRID: "What We Do"
          ========================================================================= */}
      <section id="services" className="w-full pt-10 md:pt-14 pb-20 md:pb-28 relative scroll-mt-20 overflow-visible">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <WhatWeDoCards />
        </div>
      </section>

      {/* =========================================================================
          6. ERP PLATFORMS WE IMPLEMENT
          ========================================================================= */}
      <section className="w-full py-20 md:py-28 border-t border-blue-500/15 bg-[#070E1D]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-space font-semibold block mb-2">
              ● ECOSYSTEM AGNOSTIC
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-white">
              ERP platforms we implement
            </h2>
            <p className="text-[#A9B8D6] text-base sm:text-lg font-inter mt-3 max-w-2xl mx-auto">
              Independent advice across six leading platforms.
            </p>
          </div>

          {/* 6 Equal Glass Tiles in 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* 1. Oracle NetSuite */}
            <div className="p-7 rounded-xl bg-[#0B1630]/70 border border-blue-500/20 backdrop-blur-md hover:border-cyan-400/40 hover:bg-[#101E40] transition-all flex flex-col justify-between group">
              <div>
                <span className="text-xs font-space uppercase text-slate-400 block mb-2 font-medium">Platform 01</span>
                <h3 className="text-xl font-bold text-white font-space mb-4 group-hover:text-cyan-300 transition-colors">
                  Oracle NetSuite
                </h3>
                <p className="text-xs text-[#A9B8D6] font-inter mb-4">
                  Cloud ERP built for rapid scaling and global multi-entity consolidation.
                </p>
              </div>
              <Link href="/erp" className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 font-space group-hover:translate-x-1 transition-transform">
                Explore &rarr;
              </Link>
            </div>

            {/* 2. Infor (with M3 & SyteLine chips) */}
            <div className="p-7 rounded-xl bg-[#0B1630]/70 border border-blue-500/20 backdrop-blur-md hover:border-cyan-400/40 hover:bg-[#101E40] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-space uppercase text-slate-400 font-medium">Platform 02</span>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] font-space font-bold px-2 py-0.5 rounded bg-cyan-400/15 text-cyan-300 border border-cyan-400/30">M3</span>
                    <span className="text-[10px] font-space font-bold px-2 py-0.5 rounded bg-blue-400/15 text-blue-300 border border-blue-400/30">SyteLine</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white font-space mb-4 group-hover:text-cyan-300 transition-colors">
                  Infor
                </h3>
                <p className="text-xs text-[#A9B8D6] font-inter mb-4">
                  Deep industry manufacturing and complex process distribution functionality.
                </p>
              </div>
              <Link href="/erp" className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 font-space group-hover:translate-x-1 transition-transform">
                Explore &rarr;
              </Link>
            </div>

            {/* 3. Odoo */}
            <div className="p-7 rounded-xl bg-[#0B1630]/70 border border-blue-500/20 backdrop-blur-md hover:border-cyan-400/40 hover:bg-[#101E40] transition-all flex flex-col justify-between group">
              <div>
                <span className="text-xs font-space uppercase text-slate-400 block mb-2 font-medium">Platform 03</span>
                <h3 className="text-xl font-bold text-white font-space mb-4 group-hover:text-cyan-300 transition-colors">
                  Odoo
                </h3>
                <p className="text-xs text-[#A9B8D6] font-inter mb-4">
                  Modular open suite ideal for high-agility growth companies.
                </p>
              </div>
              <Link href="/erp" className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 font-space group-hover:translate-x-1 transition-transform">
                Explore &rarr;
              </Link>
            </div>

            {/* 4. SAP */}
            <div className="p-7 rounded-xl bg-[#0B1630]/70 border border-blue-500/20 backdrop-blur-md hover:border-cyan-400/40 hover:bg-[#101E40] transition-all flex flex-col justify-between group">
              <div>
                <span className="text-xs font-space uppercase text-slate-400 block mb-2 font-medium">Platform 04</span>
                <h3 className="text-xl font-bold text-white font-space mb-4 group-hover:text-cyan-300 transition-colors">
                  SAP
                </h3>
                <p className="text-xs text-[#A9B8D6] font-inter mb-4">
                  World-standard enterprise architecture for heavily governed operations.
                </p>
              </div>
              <Link href="/erp" className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 font-space group-hover:translate-x-1 transition-transform">
                Explore &rarr;
              </Link>
            </div>

            {/* 5. JD Edwards */}
            <div className="p-7 rounded-xl bg-[#0B1630]/70 border border-blue-500/20 backdrop-blur-md hover:border-cyan-400/40 hover:bg-[#101E40] transition-all flex flex-col justify-between group">
              <div>
                <span className="text-xs font-space uppercase text-slate-400 block mb-2 font-medium">Platform 05</span>
                <h3 className="text-xl font-bold text-white font-space mb-4 group-hover:text-cyan-300 transition-colors">
                  JD Edwards
                </h3>
                <p className="text-xs text-[#A9B8D6] font-inter mb-4">
                  Proven robustness for heavy equipment, capital assets, and distribution.
                </p>
              </div>
              <Link href="/erp" className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 font-space group-hover:translate-x-1 transition-transform">
                Explore &rarr;
              </Link>
            </div>

            {/* 6. Microsoft Dynamics 365 */}
            <div className="p-7 rounded-xl bg-[#0B1630]/70 border border-blue-500/20 backdrop-blur-md hover:border-cyan-400/40 hover:bg-[#101E40] transition-all flex flex-col justify-between group">
              <div>
                <span className="text-xs font-space uppercase text-slate-400 block mb-2 font-medium">Platform 06</span>
                <h3 className="text-xl font-bold text-white font-space mb-4 group-hover:text-cyan-300 transition-colors">
                  Microsoft Dynamics 365
                </h3>
                <p className="text-xs text-[#A9B8D6] font-inter mb-4">
                  Native ecosystem connectivity with Office 365, Azure, and Power Platform.
                </p>
              </div>
              <Link href="/erp" className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 font-space group-hover:translate-x-1 transition-transform">
                Explore &rarr;
              </Link>
            </div>

          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <Link
              href="/erp"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded text-sm font-semibold tracking-wide bg-[#101E40]/60 border border-[rgba(125,170,255,0.3)] text-white font-space hover:border-[#7FD6FF] hover:bg-[#101E40] hover:shadow-[0_0_20px_rgba(127,214,255,0.25)] transition-all"
            >
              <span>Explore ERP Services</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. WHY MATIC (WHY CHOOSE US)
          ========================================================================= */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center min-h-[70vh]">
        {/* Background photo - clearly visible */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/why_matic.jpg')" }}
        />
        {/* Light gradient overlay - dark on left for text legibility, transparent on right to showcase boardroom image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B1A]/90 via-[#050B1A]/65 to-[#050B1A]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-transparent to-[#050B1A]/70" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Glass Panel with 3 Numbered Points */}
          <div className="max-w-2xl p-8 sm:p-12 rounded-2xl bg-[#0B1630]/80 border border-cyan-400/30 backdrop-blur-md shadow-[0_12px_45px_rgba(0,0,0,0.6)]">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-space font-semibold block mb-2">
              ● THE UNIFIED ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-space text-white mb-8">
              Why Matic
            </h2>

            <div className="space-y-7">
              {/* Point 1 */}
              <div className="flex gap-4 sm:gap-6 items-start">
                <span className="w-9 h-9 rounded-md bg-blue-500/20 border border-cyan-400/40 flex items-center justify-center text-xs font-bold font-space text-cyan-300 flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(127,214,255,0.2)]">
                  01
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-space text-white mb-1.5">
                    Regulation shapes the design.
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base font-inter leading-relaxed">
                    Compliance requirements guide every system we build, instead of arriving as a review at the end.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4 sm:gap-6 items-start">
                <span className="w-9 h-9 rounded-md bg-blue-500/20 border border-cyan-400/40 flex items-center justify-center text-xs font-bold font-space text-cyan-300 flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(127,214,255,0.2)]">
                  02
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-space text-white mb-1.5">
                    AI where it pays off.
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base font-inter leading-relaxed">
                    We start from a business use case and governed data, not from a tool.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4 sm:gap-6 items-start">
                <span className="w-9 h-9 rounded-md bg-blue-500/20 border border-cyan-400/40 flex items-center justify-center text-xs font-bold font-space text-cyan-300 flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(127,214,255,0.2)]">
                  03
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-space text-white mb-1.5">
                    One team, not five vendors.
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base font-inter leading-relaxed">
                    Technology, compliance and finance work together, so your ERP, controls and books agree.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. HOW WE WORK
          ========================================================================= */}
      <section className="w-full py-20 md:py-28 border-t border-blue-500/15 bg-[#070E1D]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-space font-semibold block mb-2">
              ● DELIVERY FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-white">
              How We Work
            </h2>
            <p className="text-[#A9B8D6] text-base sm:text-lg font-inter mt-3 max-w-2xl mx-auto">
              A structured four-phase delivery lifecycle built for regulated predictability.
            </p>
          </div>

          {/* 4-step Connected Delivery Framework using HowItWorks pattern */}
          <HowItWorks
            layout="horizontal"
            showBackgroundLines={false}
            features={[
              {
                title: "Discover",
                description: "We map your goals, systems and regulatory obligations.",
                colorTheme: "cyan",
              },
              {
                title: "Design",
                description: "We agree on architecture, scope and a realistic timeline.",
                colorTheme: "blue",
              },
              {
                title: "Deliver",
                description: "We build in short cycles with your team in the loop.",
                colorTheme: "purple",
              },
              {
                title: "Optimize",
                description: "We monitor, support and refine after go-live.",
                colorTheme: "cyan",
              },
            ]}
          />

        </div>
      </section>

      {/* =========================================================================
          8. FINAL CTA
          ========================================================================= */}
      <section className="w-full pb-8 sm:pb-12 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl p-8 sm:p-10 lg:py-10 lg:px-14 overflow-hidden bg-gradient-to-r from-[#0B1630] via-[#101E40] to-[#0B1630] border-2 border-ice-cyan/50 shadow-glow-cyan flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            
            {/* Animated WebGL Glass Fold Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
              <GlassFold speed={0.8} scale={1} className="w-full h-full" color1="#1e3cc8" color2="#06081e" color3="#7FD6FF" />
            </div>

            {/* Glowing Light Streak Accents */}
            <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-diamond-blue/25 blur-[90px] pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-ice-cyan/25 blur-[90px] pointer-events-none"></div>

            <div className="flex flex-col gap-3 max-w-2xl text-center lg:text-left z-10">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-surface-text leading-tight">
                Planning your next stage of growth? Talk to us first.
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed font-light">
                Direct access to senior partners in technology, compliance, and finance. No sales pitch, just practical architectural clarity.
              </p>
            </div>

            <div className="shrink-0 z-10">
              <MetallicButton label="Contact Us" href="/contactus" />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
