import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
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
import { RevealImageList } from '@/components/ui/reveal-image-list';
import { HeroParallax } from '@/components/home/HeroParallax';
import { WhyMaticSection } from '@/components/ui/why-matic-section';
import { ERPPlatformsSection } from '@/components/home/ERPPlatformsSection';

export default function Home() {
  return (
    <div className="w-full bg-[#050B1A] text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* =========================================================================
          1. HERO SECTION WITH SMOOTH PARALLAX SCROLLING
          ========================================================================= */}
      <HeroParallax />

      {/* =========================================================================
          2. INDUSTRIES WE PROTECT & SCALE
          ========================================================================= */}
      <section className="w-full pt-20 md:pt-28 pb-16 md:pb-28 relative overflow-visible">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          
          {/* Header - Clean Centered Enterprise Header with Shine Lines */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            {/* Top Shine Line (~3cm / 110px) */}
            <div className="w-28 sm:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent mx-auto mb-5 sm:mb-6 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-white tracking-tight">
              Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FD6FF] to-[#3D8BFF]">Protect &amp; Scale</span>
            </h2>
            <p className="text-[#A9B8D6] text-base sm:text-lg font-inter mt-3.5 max-w-2xl mx-auto">
              Specialized digital and operational frameworks calibrated for heavily regulated sectors.
            </p>

            {/* Bottom Shine Line (~3cm / 110px) */}
            <div className="w-28 sm:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent mx-auto mt-6 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
          </div>

          {/* Animated Reveal Image List */}
          <RevealImageList />
        </div>
      </section>

      {/* =========================================================================
          4. INTRO / THE STRATEGIC DILEMMA (Clean Premium Enterprise Section)
          ========================================================================= */}
      {/* =========================================================================
          4. THE GAP WE CLOSE: SMALL TEAMS. ENTERPRISE-SIZED REGULATION.
          ========================================================================= */}
      <section className="w-full py-16 sm:py-20 lg:py-28 border-y border-blue-500/15 bg-gradient-to-b from-[#070E1D] via-[#091329] to-[#070E1D] relative overflow-hidden">
        {/* Soft Ambient Radial Accents (Clean lighting, NO diagonal animation) */}
        <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

        {/* Subtle grid pattern for enterprise depth */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Eyebrow (Clean typography, no AI bullet dot) */}
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#7FD6FF] font-semibold mb-3 sm:mb-4">
            THE GAP WE CLOSE
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-space text-white leading-[1.12] tracking-tight m-0 max-w-4xl">
            Small teams.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FD6FF] via-[#BFE8FF] to-[#3D8BFF] drop-shadow-[0_0_24px_rgba(127,214,255,0.45)]">
              Enterprise-sized regulation.
            </span>
          </h2>

          {/* Divider line matching reference */}
          <div className="w-full h-px bg-blue-500/20 my-6 sm:my-8 lg:my-10" />

          {/* Two-column layout below divider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
            {/* Left: Paragraph with bold highlights */}
            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg md:text-xl text-[#A9B8D6] font-inter leading-relaxed font-light m-0">
                Growth-stage companies answer to <strong className="text-white font-semibold">the same regulators and investors</strong> as large enterprises, but without the IT, compliance and finance departments behind them. Matic Global Solutions fills that gap with <strong className="text-transparent bg-clip-text bg-gradient-to-r from-ice-cyan via-[#7FD6FF] to-diamond-blue font-semibold">AI-first technology, compliance know-how and financial expertise</strong>, delivered by one team.
              </p>
            </div>

            {/* Right: Feature cards (Stacked, Explore Solutions button removed) */}
            <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4 w-full max-w-md">
              <div className="w-full p-3.5 sm:p-4 rounded-2xl bg-[#09152E]/80 border border-blue-500/25 flex items-center gap-3.5 sm:gap-4 shadow-[0_4px_20px_rgba(7,14,29,0.5)] backdrop-blur-md">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-500/15 border border-cyan-400/35 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <span className="text-sm sm:text-base font-space font-semibold text-white tracking-wide">
                  Integrated Tech Stack
                </span>
              </div>

              <div className="w-full p-3.5 sm:p-4 rounded-2xl bg-[#09152E]/80 border border-blue-500/25 flex items-center gap-3.5 sm:gap-4 shadow-[0_4px_20px_rgba(7,14,29,0.5)] backdrop-blur-md">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-500/15 border border-cyan-400/35 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <span className="text-sm sm:text-base font-space font-semibold text-white tracking-wide">
                  Zero Functional Silos
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SERVICES BENTO GRID: "What We Do"
          ========================================================================= */}
      <section id="services" className="w-full pt-10 md:pt-14 pb-8 md:pb-12 relative scroll-mt-20 overflow-visible">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <WhatWeDoCards />
        </div>
      </section>

      {/* =========================================================================
          6. ERP PLATFORMS WE IMPLEMENT
          ========================================================================= */}
      <ERPPlatformsSection />

      {/* =========================================================================
          7. WHY MATIC (WHY CHOOSE US)
          ========================================================================= */}
      <WhyMaticSection />

      {/* =========================================================================
          8. HOW WE WORK
          ========================================================================= */}
      <section className="w-full py-20 md:py-28 border-t border-blue-500/15 bg-[#070E1D]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-[#0B1736]/70 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(61,139,255,0.12)]">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs uppercase tracking-[0.16em] text-cyan-300 font-space font-semibold">
                Implementation Protocol
              </span>
            </div>
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
          
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:py-10 lg:px-14 overflow-hidden bg-gradient-to-r from-[#0B1630] via-[#101E40] to-[#0B1630] border-2 border-ice-cyan/50 shadow-glow-cyan flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-8 lg:gap-10">
            
            {/* Animated WebGL Glass Fold Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
              <GlassFold speed={0.8} scale={1} className="w-full h-full" color1="#1e3cc8" color2="#06081e" color3="#7FD6FF" />
            </div>

            {/* Glowing Light Streak Accents */}
            <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-diamond-blue/25 blur-[90px] pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-ice-cyan/25 blur-[90px] pointer-events-none"></div>

            <div className="flex flex-col gap-2.5 sm:gap-3 max-w-2xl text-center lg:text-left z-10">
              <h2 className="font-display text-xl sm:text-3xl lg:text-[34px] font-bold text-surface-text leading-tight">
                Planning your next stage of growth? Talk to us first.
              </h2>
              <p className="text-muted-text text-xs sm:text-base leading-relaxed font-light">
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
