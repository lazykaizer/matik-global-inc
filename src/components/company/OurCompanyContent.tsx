'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Zap, 
  TrendingUp, 
  Building2, 
  Factory, 
  ShoppingBag, 
  Coins, 
  Eye, 
  Compass, 
  Users, 
  CheckCircle2, 
  Award, 
  FileCheck,
  Check,
  Activity
} from 'lucide-react';
import { GlassFold } from '@/components/ui/glass-fold';
import { MetallicButton } from '@/components/ui/metallic-button';
import { GlassRefractionHero } from '@/components/ui/glass-refraction-hero';
import { siteConfig } from '@/config/site';

export function OurCompanyContent() {
  return (
    <div 
      id="ourcompany-stitch-page" 
      className="radial-bg min-h-screen relative antialiased selection:bg-diamond-blue selection:text-white overflow-x-hidden w-full text-surface-text"
      style={{
        backgroundColor: '#050B1A',
        color: '#E1E8F8',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Background Ambient Glow Accents */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[15%] left-[25%] w-[700px] h-[700px] rounded-full bg-[#3D8BFF]/10 blur-[150px]"></div>
        <div className="absolute top-[35%] -right-[10%] w-[650px] h-[650px] rounded-full bg-[#7FD6FF]/12 blur-[160px]"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[600px] h-[600px] rounded-full bg-[#3D8BFF]/10 blur-[140px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(172,199,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(172,199,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* =========================================================================
          SECTION 1: FULL-BLEED HERO (Fills entire screen edge-to-edge)
          ========================================================================= */}
      <GlassRefractionHero className="w-full min-h-screen">
        <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto px-6 py-24 sm:py-28 lg:py-32 z-10">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[68px] lg:leading-[76px] font-bold text-surface-text tracking-tight max-w-4xl">
            Compete like a global enterprise.{' '}
            <span className="bg-gradient-to-r from-ice-cyan via-[#bfe8ff] to-diamond-blue bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(122,209,250,0.4)]">
              Without the overhead.
            </span>
          </h1>

          <p className="text-muted-text text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-light">
            Matic Global Solutions is an AI-first technology, compliance and finance partner for life sciences and growth-stage companies in regulated industries.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <a 
              href="#our-story"
              className="px-8 py-4 rounded-full font-display text-sm font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] shadow-[0_0_24px_rgba(122,209,250,0.4)] hover:shadow-[0_0_36px_rgba(122,209,250,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#050B1A]" />
              <span>Explore Our Story</span>
            </a>
            <Link 
              href="/contactus" 
              className="px-8 py-4 rounded-full font-display text-sm font-bold text-surface-text frosted-glass hover:bg-[#162A58]/60 hover:text-ice-cyan border border-blue-500/25 hover:border-ice-cyan/60 hover:shadow-[0_0_20px_rgba(122,209,250,0.25)] transition-all duration-200 inline-flex items-center gap-2"
            >
              <span>Talk to Leadership</span>
              <ArrowRight className="w-4 h-4 text-ice-cyan" />
            </Link>
          </div>
        </div>
      </GlassRefractionHero>

      {/* Main Container */}
      <div className="w-full pt-8 sm:pt-12 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-12 lg:gap-16 pb-6 sm:pb-8">

        {/* =========================================================================
            SECTION 2: OUR STORY
            ========================================================================= */}
        <section className="w-full scroll-mt-24" id="our-story">
          <div className="p-8 lg:p-14 rounded-3xl frosted-glass border border-blue-500/25 shadow-[0_16px_40px_-10px_rgba(7,14,29,0.85)] flex flex-col gap-8 relative overflow-hidden">
            <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-ice-cyan/10 blur-[100px] pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
              <div className="lg:col-span-5">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-surface-text leading-tight">
                  Small and mid-sized companies face enterprise-sized challenges.
                </h2>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-5">
                <p className="text-muted-text text-base sm:text-lg leading-relaxed">
                  Growth-stage companies deal with the same operational, regulatory and technology demands as large enterprises, without the same teams or budgets behind them.
                </p>
                <p className="text-muted-text text-base sm:text-lg leading-relaxed">
                  Matic Global Solutions was founded to close that gap, combining deep regulatory knowledge with AI-native technology for founders and leadership teams who need results quickly.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-blue-500/15 relative z-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-text">
              <p>Founded 2024 &bull; Headquartered in the United States</p>
              <span className="text-ice-cyan font-semibold">GLOBAL ENTERPRISE EXECUTION</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: MISSION AND VISION (Purpose Architecture)
            ========================================================================= */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="group relative p-8 lg:p-12 rounded-3xl frosted-glass border border-blue-500/20 shadow-xl flex flex-col justify-between overflow-hidden hover:border-ice-cyan/50 hover:shadow-[0_16px_40px_-8px_rgba(7,14,29,0.9),0_0_24px_rgba(122,209,250,0.2)] transition-all duration-300">
              <div className="h-1.5 w-24 bg-gradient-to-r from-ice-cyan to-diamond-blue rounded-full mb-8"></div>
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
                  PURPOSE ARCHITECTURE
                </div>
                <div className="text-base sm:text-lg text-surface-text leading-relaxed">
                  <strong className="font-display text-2xl font-bold text-ice-cyan block mb-3">
                    Our Mission
                  </strong>
                  To give emerging life sciences, biotech, manufacturing, consumer products, financial services and SMB organizations enterprise-grade AI and ML, ERP, application development, compliance and accounting support.
                </div>
              </div>
              <div className="pt-8 flex items-center justify-between text-muted-text font-mono text-xs border-t border-blue-500/15 mt-8">
                <span>PILLAR &bull; 01</span>
                <Compass className="w-5 h-5 text-ice-cyan" />
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative p-8 lg:p-12 rounded-3xl frosted-glass border border-blue-500/20 shadow-xl flex flex-col justify-between overflow-hidden hover:border-ice-cyan/50 hover:shadow-[0_16px_40px_-8px_rgba(7,14,29,0.9),0_0_24px_rgba(122,209,250,0.2)] transition-all duration-300">
              <div className="h-1.5 w-24 bg-gradient-to-r from-diamond-blue to-[#bfe8ff] rounded-full mb-8"></div>
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
                  HORIZON MATRIX
                </div>
                <div className="text-base sm:text-lg text-surface-text leading-relaxed">
                  <strong className="font-display text-2xl font-bold text-diamond-blue block mb-3">
                    Our Vision
                  </strong>
                  To help emerging companies compete like global enterprises, without enterprise overhead.
                </div>
              </div>
              <div className="pt-8 flex items-center justify-between text-muted-text font-mono text-xs border-t border-blue-500/15 mt-8">
                <span>PILLAR &bull; 02</span>
                <Eye className="w-5 h-5 text-diamond-blue" />
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 4: WHAT MAKES US DIFFERENT (Kinetic Bento)
            ========================================================================= */}
        <section className="w-full">
          <div className="flex flex-col items-start gap-3 mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
              CORE DIFFERENTIATORS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-text tracking-tight">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            
            {/* Card 1 */}
            <div className="lg:col-span-2 group p-8 rounded-2xl frosted-glass border border-blue-500/20 shadow-lg hover:border-ice-cyan/40 hover:bg-[#101E40] transition-all duration-300 flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center text-ice-cyan border border-blue-500/30">
                  <ShieldCheck className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text">
                  Built for regulated industries
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Our work is calibrated and engineered directly to the strict regulatory frameworks our clients operate under.
                </p>
              </div>
              <div className="pt-6 font-mono text-xs text-muted-text border-t border-blue-500/15 mt-6">
                DIFF &bull; 01
              </div>
            </div>

            {/* Card 2 */}
            <div className="lg:col-span-2 group p-8 rounded-2xl frosted-glass border border-blue-500/20 shadow-lg hover:border-ice-cyan/40 hover:bg-[#101E40] transition-all duration-300 flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center text-ice-cyan border border-blue-500/30">
                  <Zap className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text">
                  Fast to implement
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Focused teams, streamlined governance, and short delivery cycles get you into production sooner.
                </p>
              </div>
              <div className="pt-6 font-mono text-xs text-muted-text border-t border-blue-500/15 mt-6">
                DIFF &bull; 02
              </div>
            </div>

            {/* Card 3 */}
            <div className="lg:col-span-2 group p-8 rounded-2xl frosted-glass border border-blue-500/20 shadow-lg hover:border-ice-cyan/40 hover:bg-[#101E40] transition-all duration-300 flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center text-ice-cyan border border-blue-500/30">
                  <Coins className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text">
                  Cost-conscious
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Senior institutional expertise at a transparent scale and economics that suit growing companies.
                </p>
              </div>
              <div className="pt-6 font-mono text-xs text-muted-text border-t border-blue-500/15 mt-6">
                DIFF &bull; 03
              </div>
            </div>

            {/* Card 4 */}
            <div className="lg:col-span-3 group p-8 rounded-2xl frosted-glass border border-blue-500/20 shadow-lg hover:border-ice-cyan/40 hover:bg-[#101E40] transition-all duration-300 flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center text-ice-cyan border border-blue-500/30">
                  <Cpu className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text">
                  AI-native design
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Autonomous intelligence and ML pipelines are built into the bedrock of how we design systems, not an afterthought.
                </p>
              </div>
              <div className="pt-6 font-mono text-xs text-muted-text border-t border-blue-500/15 mt-6">
                DIFF &bull; 04
              </div>
            </div>

            {/* Card 5 (Featured Card) */}
            <div className="lg:col-span-3 relative p-8 rounded-2xl bg-gradient-to-br from-[#101E40] via-[#0B1630] to-[#101E40] backdrop-blur-2xl border-2 border-ice-cyan/60 shadow-[0_16px_48px_-10px_rgba(7,14,29,0.9),0_0_28px_rgba(122,209,250,0.3)] flex flex-col justify-between overflow-hidden group">
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-ice-cyan/20 blur-[70px] pointer-events-none"></div>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-diamond-blue/20 flex items-center justify-center text-ice-cyan border border-ice-cyan/40 shadow-[0_0_12px_rgba(122,209,250,0.4)]">
                    <CheckCircle2 className="w-6 h-6 text-ice-cyan" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-ice-cyan/15 border border-ice-cyan/40 text-ice-cyan font-mono text-[11px] uppercase tracking-wider font-semibold">
                    FEATURED
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text">
                  Boutique attention, enterprise capability
                </h3>
                <p className="text-surface-text text-sm leading-relaxed">
                  You work directly with seasoned, principal-level leaders, backed by enterprise-grade institutional engineering.
                </p>
              </div>
              <div className="relative z-10 pt-6 flex items-center justify-between font-mono text-xs text-ice-cyan border-t border-ice-cyan/20 mt-6">
                <span>DIFF &bull; 05</span>
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-ice-cyan animate-pulse"></span>
                  ACTIVE SYNERGY
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 5: YOUR TEAM, EXTENDED
            ========================================================================= */}
        <section className="w-full">
          <div className="p-8 lg:p-14 rounded-3xl frosted-glass border border-blue-500/25 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8 lg:gap-16 relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-diamond-blue/15 blur-[100px] pointer-events-none"></div>
            
            <div className="md:w-5/12 relative z-10">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
                INTEGRATED EMBED
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-surface-text leading-tight">
                We work as part of your team.
              </h2>
            </div>

            <div className="md:w-7/12 relative z-10">
              <p className="text-muted-text text-base sm:text-lg leading-relaxed">
                We partner with founders and leadership teams as a direct extension of your own organization. Whether you are running a major cloud migration, ERP rollout, or preparing for an imminent regulatory audit, you get experienced architects who share both the workload and knowledge transfer.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: WHAT YOU CAN EXPECT (Measured Outcomes)
            ========================================================================= */}
        <section className="w-full">
          <div className="flex flex-col items-start gap-3 mb-10">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
              MEASURED OUTCOMES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-text tracking-tight">
              What You Can Expect
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Metric 1 */}
            <div className="p-8 rounded-2xl frosted-glass border border-blue-500/20 shadow-lg flex flex-col gap-3 group hover:border-ice-cyan/40 transition-all duration-300">
              <span className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] bg-clip-text text-transparent">
                3x
              </span>
              <span className="font-display text-base font-semibold text-surface-text">
                Faster time to market
              </span>
              <p className="text-muted-text text-xs leading-relaxed">
                Pre-built compliant modules and streamlined deployment architectures.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-8 rounded-2xl frosted-glass border border-blue-500/20 shadow-lg flex flex-col gap-3 group hover:border-ice-cyan/40 transition-all duration-300">
              <span className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] bg-clip-text text-transparent">
                40%
              </span>
              <span className="font-display text-base font-semibold text-surface-text">
                Lower operating costs
              </span>
              <p className="text-muted-text text-xs leading-relaxed">
                Fractional senior talent without enterprise overhead or bloat.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-8 rounded-2xl frosted-glass border border-blue-500/20 shadow-lg flex flex-col gap-3 group hover:border-ice-cyan/40 transition-all duration-300">
              <span className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] bg-clip-text text-transparent">
                100%
              </span>
              <span className="font-display text-base font-semibold text-surface-text">
                Compliance readiness
              </span>
              <p className="text-muted-text text-xs leading-relaxed">
                Automated continuous evidence for SOC 2, HIPAA, and ISO 27001.
              </p>
            </div>

            {/* Metric 4 */}
            <div className="p-8 rounded-2xl frosted-glass border border-blue-500/20 shadow-lg flex flex-col gap-3 group hover:border-ice-cyan/40 transition-all duration-300">
              <span className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] bg-clip-text text-transparent">
                10x
              </span>
              <span className="font-display text-base font-semibold text-surface-text">
                Scalable growth
              </span>
              <p className="text-muted-text text-xs leading-relaxed">
                Enterprise-grade foundation built to support 10x transaction scaling.
              </p>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 7: LEADERSHIP & EXECUTIVE GOVERNANCE
            ========================================================================= */}
        <section className="w-full">
          <div className="flex flex-col items-start gap-3 mb-10">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
              EXECUTIVE GOVERNANCE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-text tracking-tight">
              Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Leader 1 */}
            <div className="p-8 rounded-2xl frosted-glass border border-blue-500/20 shadow-lg flex flex-col justify-between hover:border-ice-cyan/40 hover:bg-[#101E40] transition-all duration-300 group">
              <div className="flex flex-col items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan group-hover:scale-105 transition-transform">
                  <Layers className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl font-bold text-surface-text">
                    Enterprise Strategy &amp; ERP
                  </h3>
                  <span className="font-mono text-xs text-ice-cyan uppercase tracking-wider font-semibold">
                    Advisory Practice
                  </span>
                </div>
                <p className="text-muted-text text-sm leading-relaxed">
                  Over two decades guiding Fortune 500 &amp; high-growth businesses through NetSuite, SAP, and complex financial architecture rollouts.
                </p>
              </div>
              <div className="pt-6 border-t border-blue-500/15 mt-6 flex items-center justify-between w-full">
                <span className="font-mono text-[11px] text-muted-text">PRACTICE LEAD</span>
                <span className="font-mono text-xs text-ice-cyan flex items-center gap-1 font-semibold">
                  <Check className="w-3.5 h-3.5" /> VERIFIED
                </span>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="p-8 rounded-2xl frosted-glass border border-blue-500/20 shadow-lg flex flex-col justify-between hover:border-ice-cyan/40 hover:bg-[#101E40] transition-all duration-300 group">
              <div className="flex flex-col items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl font-bold text-surface-text">
                    Regulatory Governance &amp; GRC
                  </h3>
                  <span className="font-mono text-xs text-ice-cyan uppercase tracking-wider font-semibold">
                    Audit Readiness
                  </span>
                </div>
                <p className="text-muted-text text-sm leading-relaxed">
                  Specialists in GxP, HIPAA, SOC 2 Type II, and FDA 21 CFR Part 11 validation for life sciences and high-velocity healthcare startups.
                </p>
              </div>
              <div className="pt-6 border-t border-blue-500/15 mt-6 flex items-center justify-between w-full">
                <span className="font-mono text-[11px] text-muted-text">PRACTICE LEAD</span>
                <span className="font-mono text-xs text-ice-cyan flex items-center gap-1 font-semibold">
                  <Check className="w-3.5 h-3.5" /> VERIFIED
                </span>
              </div>
            </div>

            {/* Leader 3 */}
            <div className="p-8 rounded-2xl frosted-glass border border-blue-500/20 shadow-lg flex flex-col justify-between hover:border-ice-cyan/40 hover:bg-[#101E40] transition-all duration-300 group">
              <div className="flex flex-col items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan group-hover:scale-105 transition-transform">
                  <Cpu className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl font-bold text-surface-text">
                    AI/ML &amp; Digital Engineering
                  </h3>
                  <span className="font-mono text-xs text-ice-cyan uppercase tracking-wider font-semibold">
                    Applied Intelligence
                  </span>
                </div>
                <p className="text-muted-text text-sm leading-relaxed">
                  Pioneering sovereign LLM pipelines, autonomous operational agents, and modern cloud microservices for regulated product ecosystems.
                </p>
              </div>
              <div className="pt-6 border-t border-blue-500/15 mt-6 flex items-center justify-between w-full">
                <span className="font-mono text-[11px] text-muted-text">PRACTICE LEAD</span>
                <span className="font-mono text-xs text-ice-cyan flex items-center gap-1 font-semibold">
                  <Check className="w-3.5 h-3.5" /> VERIFIED
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 8: TARGET VERTICALS (Industries We Serve)
            ========================================================================= */}
        <section className="w-full">
          <div className="flex flex-col items-start gap-3 mb-10">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
              TARGET VERTICALS
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-text tracking-tight">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            
            {/* Tile 1 */}
            <div className="p-6 rounded-2xl frosted-glass border border-blue-500/20 shadow-md flex flex-col items-start gap-4 hover:border-ice-cyan/40 hover:bg-[#101E40] transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-ice-cyan">
                <Activity className="w-5 h-5 text-ice-cyan" />
              </div>
              <h3 className="font-display text-base font-semibold text-surface-text">
                Life Sciences &amp; Biotech
              </h3>
            </div>

            {/* Tile 2 */}
            <div className="p-6 rounded-2xl frosted-glass border border-blue-500/20 shadow-md flex flex-col items-start gap-4 hover:border-ice-cyan/40 hover:bg-[#101E40] transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-ice-cyan">
                <Factory className="w-5 h-5 text-ice-cyan" />
              </div>
              <h3 className="font-display text-base font-semibold text-surface-text">
                Manufacturing
              </h3>
            </div>

            {/* Tile 3 */}
            <div className="p-6 rounded-2xl frosted-glass border border-blue-500/20 shadow-md flex flex-col items-start gap-4 hover:border-ice-cyan/40 hover:bg-[#101E40] transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-ice-cyan">
                <ShoppingBag className="w-5 h-5 text-ice-cyan" />
              </div>
              <h3 className="font-display text-base font-semibold text-surface-text">
                Consumer Products
              </h3>
            </div>

            {/* Tile 4 */}
            <div className="p-6 rounded-2xl frosted-glass border border-blue-500/20 shadow-md flex flex-col items-start gap-4 hover:border-ice-cyan/40 hover:bg-[#101E40] transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-ice-cyan">
                <Building2 className="w-5 h-5 text-ice-cyan" />
              </div>
              <h3 className="font-display text-base font-semibold text-surface-text">
                Financial Services
              </h3>
            </div>

            {/* Tile 5 */}
            <div className="p-6 rounded-2xl frosted-glass border border-blue-500/20 shadow-md flex flex-col items-start gap-4 hover:border-ice-cyan/40 hover:bg-[#101E40] transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-ice-cyan">
                <TrendingUp className="w-5 h-5 text-ice-cyan" />
              </div>
              <h3 className="font-display text-base font-semibold text-surface-text">
                Growth-Stage SMBs
              </h3>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 9: CREDENTIALS & GOVERNANCE PILLARS
            ========================================================================= */}
        <section className="w-full py-6 border-y border-blue-500/15">
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            <div className="px-6 py-3 rounded-full frosted-glass border border-blue-500/20 flex items-center gap-2.5 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-ice-cyan" />
              <span className="font-mono text-xs text-surface-text tracking-wider uppercase font-semibold">
                SOC 2 TYPE II COMPLIANT
              </span>
            </div>
            <div className="px-6 py-3 rounded-full frosted-glass border border-blue-500/20 flex items-center gap-2.5 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-ice-cyan" />
              <span className="font-mono text-xs text-surface-text tracking-wider uppercase font-semibold">
                NIST RESILIENCE ARCHITECTURE
              </span>
            </div>
            <div className="px-6 py-3 rounded-full frosted-glass border border-blue-500/20 flex items-center gap-2.5 shadow-sm">
              <FileCheck className="w-4 h-4 text-ice-cyan" />
              <span className="font-mono text-xs text-surface-text tracking-wider uppercase font-semibold">
                GxP &amp; 21 CFR PART 11 READY
              </span>
            </div>
            <div className="px-6 py-3 rounded-full frosted-glass border border-blue-500/20 flex items-center gap-2.5 shadow-sm">
              <Award className="w-4 h-4 text-ice-cyan" />
              <span className="font-mono text-xs text-surface-text tracking-wider uppercase font-semibold">
                ENTERPRISE PARTNER NETWORK
              </span>
            </div>
          </div>
        </section>

        <section className="w-full">
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
                You have a challenge. We deliver the solution.
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed font-light">
                Partner with an AI-first technology, compliance and financial operations team built specifically for high-growth enterprises.
              </p>
            </div>

            <div className="shrink-0 z-10">
              <MetallicButton label="Contact Us" href="/contactus" />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
