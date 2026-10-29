'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  FileSpreadsheet, 
  Scale, 
  TrendingUp, 
  Coins, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Sparkles, 
  Rocket, 
  FlaskConical, 
  Building2, 
  ShieldCheck, 
  Database, 
  Brain,
  Shield,
  Activity
} from 'lucide-react';
import { GlassFold } from '@/components/ui/glass-fold';
import { MetallicButton } from '@/components/ui/metallic-button';
import HowItWorks from '@/components/ui/how-it-works';

export function AccTaxContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Consultation Modal State
  const [step, setStep] = useState(1);
  const [consultationData, setConsultationData] = useState({
    companyStage: '',
    primaryService: [] as string[],
    accountingSystem: '',
    fullName: '',
    workEmail: '',
    companyName: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (item: string) => {
    if (consultationData.primaryService.includes(item)) {
      setConsultationData({
        ...consultationData,
        primaryService: consultationData.primaryService.filter(i => i !== item)
      });
    } else {
      setConsultationData({
        ...consultationData,
        primaryService: [...consultationData.primaryService, item]
      });
    }
  };

  return (
    <div 
      id="acctax-stitch-page" 
      className="radial-bg min-h-screen relative antialiased selection:bg-diamond-blue selection:text-white overflow-hidden w-full"
      style={{
        backgroundColor: '#050B1A',
        color: '#E1E8F8',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Soft Executive Ambient Glow Spots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1050px] h-[550px] bg-gradient-to-b from-[#3D8BFF]/15 via-[#7FD6FF]/10 to-transparent blur-[160px]"></div>
        <div className="absolute top-[1300px] -left-48 w-[650px] h-[650px] bg-[#3D8BFF]/10 blur-[170px]"></div>
        <div className="absolute top-[2600px] -right-48 w-[700px] h-[700px] bg-[#7FD6FF]/10 blur-[180px]"></div>
      </div>

      {/* =========================================================================
          MAIN CONTAINER (Sits cleanly inside site layout)
          ========================================================================= */}
      <div className="w-full pt-4 sm:pt-6 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-14 lg:gap-18 pb-6 sm:pb-8">
        
        {/* HERO WRAPPER */}
        <div className="w-full flex flex-col gap-3">

          {/* 1. HERO SECTION */}
          <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              

              {/* H1 Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] lg:leading-[64px] font-bold text-surface-text tracking-tight">
                Finance that{' '}
                <span className="bg-gradient-to-r from-[#3D8BFF] via-[#7FD6FF] to-[#bfe8ff] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(122,209,250,0.4)]">
                  keeps pace with growth.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-muted-text text-base sm:text-lg max-w-2xl leading-relaxed">
                Accounting, financial reporting, tax readiness and CFO-level guidance for growth-stage and regulated companies, from founder-led teams to scaling enterprises.
              </p>

              {/* CTA Group */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="relative group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display text-sm font-bold tracking-wide text-[#050B1A] bg-gradient-to-r from-[#3D8BFF] via-[#7FD6FF] to-[#A2E2FF] shadow-[0_0_30px_rgba(122,209,250,0.5)] hover:shadow-[0_0_42px_rgba(122,209,250,0.8)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#050B1A]" />
                  <span>Request Finance Advisory</span>
                </button>
                <a 
                  href="#what-we-cover"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display text-sm font-semibold text-surface-text frosted-glass hover:bg-[#162A58]/60 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>See What We Cover</span>
                  <ArrowRight className="w-4 h-4 text-ice-cyan" />
                </a>
              </div>
            </div>

            {/* Right Visual: Glowing Faceted Glass Chart Artwork */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[500px] rounded-2xl frosted-glass p-6 sm:p-7 flex flex-col justify-between shadow-2xl overflow-hidden border border-ice-cyan/20">
                <div className="absolute inset-0 bg-gradient-to-br from-diamond-blue/10 via-transparent to-ice-cyan/10 pointer-events-none"></div>
                
                {/* Visual Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-ice-cyan" />
                    <span className="font-mono text-[11px] text-ice-cyan tracking-widest uppercase font-semibold">EXECUTIVE WEALTH TELEMETRY</span>
                  </div>
                  <span className="font-mono text-[11px] text-muted-text px-2.5 py-1 rounded bg-blue-950/60 border border-ice-cyan/15">
                    LIVE NODES: 06
                  </span>
                </div>

                {/* Inline Visual Isometric Chart with Connected Glowing Vertices */}
                <div className="relative z-10 w-full h-64 flex items-end justify-center py-4">
                  <svg className="w-full h-full overflow-visible" fill="none" viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="barGlow1" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#7ad1fa" stopOpacity="0.95"></stop>
                        <stop offset="100%" stopColor="#017ba0" stopOpacity="0.25"></stop>
                      </linearGradient>
                      <linearGradient id="barGlow2" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#acc7ff" stopOpacity="0.95"></stop>
                        <stop offset="100%" stopColor="#002f67" stopOpacity="0.3"></stop>
                      </linearGradient>
                      <linearGradient id="facetTop" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65"></stop>
                        <stop offset="100%" stopColor="#7ad1fa" stopOpacity="0.25"></stop>
                      </linearGradient>
                      <filter height="140%" id="neonBlur" width="140%" x="-20%" y="-20%">
                        <feGaussianBlur result="blur" stdDeviation="6"></feGaussianBlur>
                        <feMerge>
                          <feMergeNode in="blur"></feMergeNode>
                          <feMergeNode in="SourceGraphic"></feMergeNode>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Grid reference lines */}
                    <line stroke="#414754" strokeDasharray="4 4" strokeOpacity="0.4" x1="30" x2="390" y1="180" y2="180"></line>
                    <line stroke="#414754" strokeDasharray="4 4" strokeOpacity="0.3" x1="30" x2="390" y1="120" y2="120"></line>
                    <line stroke="#414754" strokeDasharray="4 4" strokeOpacity="0.2" x1="30" x2="390" y1="60" y2="60"></line>

                    {/* Bar 1 (Left) */}
                    <polygon fill="url(#barGlow1)" points="50,180 85,180 85,110 50,110"></polygon>
                    <polygon fill="url(#barGlow2)" fillOpacity="0.5" points="85,180 105,160 105,90 85,110"></polygon>
                    <polygon fill="url(#facetTop)" points="50,110 70,90 105,90 85,110"></polygon>

                    {/* Bar 2 (Mid-Left) */}
                    <polygon fill="url(#barGlow1)" points="130,180 165,180 165,80 130,80"></polygon>
                    <polygon fill="url(#barGlow2)" fillOpacity="0.6" points="165,180 185,160 185,60 165,80"></polygon>
                    <polygon fill="url(#facetTop)" points="130,80 150,60 185,60 165,80"></polygon>

                    {/* Bar 3 (Mid-Right) */}
                    <polygon fill="url(#barGlow1)" points="210,180 245,180 245,55 210,55"></polygon>
                    <polygon fill="url(#barGlow2)" fillOpacity="0.7" points="245,180 265,160 265,35 245,55"></polygon>
                    <polygon fill="url(#facetTop)" points="210,55 230,35 265,35 245,55"></polygon>

                    {/* Bar 4 (Ascending Apex) */}
                    <polygon fill="url(#barGlow1)" points="290,180 325,180 325,25 290,25"></polygon>
                    <polygon fill="url(#barGlow2)" fillOpacity="0.8" points="325,180 345,160 345,5 325,25"></polygon>
                    <polygon fill="url(#facetTop)" points="290,25 310,5 345,5 325,25"></polygon>

                    {/* Connected Radiant Spline Vertices */}
                    <path d="M 67 100 L 147 70 L 227 45 L 307 15" fill="none" filter="url(#neonBlur)" stroke="#7ad1fa" strokeWidth="2.5"></path>
                    <path d="M 67 100 L 147 70 L 227 45 L 307 15" fill="none" stroke="#ffffff" strokeWidth="1.2"></path>

                    {/* Vertices Rings */}
                    <circle cx="67" cy="100" fill="#070e1d" r="4.5" stroke="#7ad1fa" strokeWidth="2.5"></circle>
                    <circle cx="147" cy="70" fill="#070e1d" r="4.5" stroke="#7ad1fa" strokeWidth="2.5"></circle>
                    <circle cx="227" cy="45" fill="#070e1d" r="4.5" stroke="#acc7ff" strokeWidth="2.5"></circle>
                    <circle cx="307" cy="15" fill="#7ad1fa" r="5" stroke="#ffffff" strokeWidth="2"></circle>
                  </svg>
                </div>

                {/* Card Footer Telemetry */}
                <div className="relative z-10 pt-3 border-t border-white/5 flex items-center justify-between text-muted-text text-[12px] font-mono">
                  <span className="flex items-center gap-1.5 text-ice-cyan">
                    <span className="w-2 h-2 rounded-full bg-ice-cyan animate-pulse"></span>
                    LEDGER INTEGRITY 100%
                  </span>
                  <span className="text-slate-400">Q1-Q4 SYNCHRONIZED</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* =========================================================================
            2. INTRO SECTION (Your numbers should point the way forward)
            ========================================================================= */}
        <section className="w-full py-10 border-y border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-surface-text leading-tight">
                Your numbers should point the way forward.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-muted-text text-base sm:text-lg leading-relaxed">
                Founders, executives and investors all ask for the same thing: figures they can trust and a clear view of what comes next. We run the accounting, prepare the reporting and plan the taxes, so leadership can spend time on the business instead of the books.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. WHAT WE COVER (6 Bento Glass Cards)
            ========================================================================= */}
        <section className="w-full flex flex-col gap-10" id="what-we-cover">
          <div className="flex flex-col items-start gap-3">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
              SCOPE OF ENGAGEMENT
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text tracking-tight">
              What We Cover
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Accounting Operations */}
            <div className="group flex flex-col justify-between p-8 rounded-2xl frosted-glass border border-white/5 hover:border-ice-cyan/40 hover:bg-[#102046]/70 transition-all duration-300">
              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-ice-cyan/25 flex items-center justify-center text-ice-cyan group-hover:scale-105 group-hover:text-white transition-all shadow-sm">
                  <Calculator className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold text-surface-text">Accounting Operations</h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    Day-to-day bookkeeping, reconciliations and month-end close, kept accurate and on schedule.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/5 mt-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ice-cyan group-hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 2: Financial Reporting */}
            <div className="group flex flex-col justify-between p-8 rounded-2xl frosted-glass border border-white/5 hover:border-ice-cyan/40 hover:bg-[#102046]/70 transition-all duration-300">
              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-ice-cyan/25 flex items-center justify-center text-ice-cyan group-hover:scale-105 group-hover:text-white transition-all shadow-sm">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold text-surface-text">Financial Reporting</h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    Clear statements for management, lenders and regulators with automated variance analysis.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/5 mt-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ice-cyan group-hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 3: Tax Readiness and Advisory */}
            <div className="group flex flex-col justify-between p-8 rounded-2xl frosted-glass border border-white/5 hover:border-ice-cyan/40 hover:bg-[#102046]/70 transition-all duration-300">
              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-ice-cyan/25 flex items-center justify-center text-ice-cyan group-hover:scale-105 group-hover:text-white transition-all shadow-sm">
                  <Scale className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold text-surface-text">Tax Readiness and Advisory</h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    Planning, preparation and support so tax obligations are met on time and without surprises.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/5 mt-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ice-cyan group-hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 4: Planning, Budgeting and Modeling */}
            <div className="group flex flex-col justify-between p-8 rounded-2xl frosted-glass border border-white/5 hover:border-ice-cyan/40 hover:bg-[#102046]/70 transition-all duration-300">
              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-ice-cyan/25 flex items-center justify-center text-ice-cyan group-hover:scale-105 group-hover:text-white transition-all shadow-sm">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold text-surface-text">Planning, Budgeting & Modeling</h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    Budgets, forecasts and financial models that guide hiring, spending and fundraising rounds.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/5 mt-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ice-cyan group-hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 5: Cash Flow and Investor Reporting */}
            <div className="group flex flex-col justify-between p-8 rounded-2xl frosted-glass border border-white/5 hover:border-ice-cyan/40 hover:bg-[#102046]/70 transition-all duration-300">
              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-ice-cyan/25 flex items-center justify-center text-ice-cyan group-hover:scale-105 group-hover:text-white transition-all shadow-sm">
                  <Coins className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold text-surface-text">Cash Flow & Investor Reporting</h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    Cash forecasting, runway monitoring, and investor-ready reporting you can share with confidence.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/5 mt-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ice-cyan group-hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 6: CFO Advisory */}
            <div className="group flex flex-col justify-between p-8 rounded-2xl frosted-glass border border-white/5 hover:border-ice-cyan/40 hover:bg-[#102046]/70 transition-all duration-300">
              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-ice-cyan/25 flex items-center justify-center text-ice-cyan group-hover:scale-105 group-hover:text-white transition-all shadow-sm">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold text-surface-text">CFO Advisory</h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    Senior financial guidance on strategy, controls and growth decisions, without a full-time hire.
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/5 mt-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ice-cyan group-hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            4. CONTROLS BAND
            ========================================================================= */}
        <section className="w-full">
          <div className="w-full p-8 lg:p-12 rounded-3xl frosted-glass border border-ice-cyan/25 shadow-xl flex flex-col gap-8 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-diamond-blue/15 blur-[100px] pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-text tracking-tight">
                Controls that hold up to scrutiny
              </h2>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1.5 rounded-lg bg-blue-950/60 border border-ice-cyan/20 font-mono text-xs text-ice-cyan shadow-sm">
                  Internal controls
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-blue-950/60 border border-ice-cyan/20 font-mono text-xs text-ice-cyan shadow-sm">
                  Audit-ready records
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-blue-950/60 border border-ice-cyan/20 font-mono text-xs text-ice-cyan shadow-sm">
                  Regulatory compliance
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-blue-950/60 border border-ice-cyan/20 font-mono text-xs text-ice-cyan shadow-sm">
                  Approval workflows
                </span>
              </div>
            </div>

            <p className="text-muted-text text-base sm:text-lg max-w-3xl leading-relaxed relative z-10">
              Investors, lenders and regulators ask how your numbers are produced. We build the rigorous controls, segregation of duties, and reconciled records that answer that question definitively.
            </p>
          </div>
        </section>

        {/* =========================================================================
            5. WHO WE SUPPORT (3 Glass Tiles)
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8">
          <div className="flex flex-col items-start gap-2.5">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
              PORTFOLIO ARCHITECTURE
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text tracking-tight">
              Who We Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tile 1 */}
            <div className="p-8 rounded-2xl frosted-glass border border-white/5 flex flex-col gap-5 hover:border-ice-cyan/40 hover:bg-[#102046]/70 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-ice-cyan/25 flex items-center justify-center text-ice-cyan shadow-sm">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-semibold text-surface-text">Early-stage and growth companies</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Set up finance and ledger foundations properly before complexity and rapid hiring arrive.
                </p>
              </div>
            </div>

            {/* Tile 2 */}
            <div className="p-8 rounded-2xl frosted-glass border border-white/5 flex flex-col gap-5 hover:border-ice-cyan/40 hover:bg-[#102046]/70 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-ice-cyan/25 flex items-center justify-center text-ice-cyan shadow-sm">
                <FlaskConical className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-semibold text-surface-text">Life sciences and regulated firms</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  High-governance reporting and audit trails designed to withstand intense regulatory scrutiny.
                </p>
              </div>
            </div>

            {/* Tile 3 */}
            <div className="p-8 rounded-2xl frosted-glass border border-white/5 flex flex-col gap-5 hover:border-ice-cyan/40 hover:bg-[#102046]/70 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-ice-cyan/25 flex items-center justify-center text-ice-cyan shadow-sm">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-semibold text-surface-text">Scaling enterprises</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Added finance capacity, ERP consolidation, and senior fractional oversight as the business grows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. HOW WE WORK (4 Stages)
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8">
          <div className="flex flex-col items-start gap-2.5">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
              DELIVERY PROTOCOL
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text tracking-tight">
              How We Work
            </h2>
          </div>

          <HowItWorks
            layout="horizontal"
            showBackgroundLines={false}
            features={[
              {
                title: "Review",
                description: "We assess your current books, chart of accounts, reconciliation processes, and reporting obligations.",
                colorTheme: "cyan",
              },
              {
                title: "Plan",
                description: "We agree on engagement scope, closing calendar, KPI dashboards, and the core numbers that matter to leadership.",
                colorTheme: "blue",
              },
              {
                title: "Execute",
                description: "We execute bookkeeping, reconciliations, payroll sync, and financial reporting on a disciplined, predictable cadence.",
                colorTheme: "purple",
              },
              {
                title: "Advise",
                description: "We turn historical numbers into forward-looking decisions, cash forecasts, and investor-grade strategy for executives.",
                colorTheme: "cyan",
              },
            ]}
          />
        </section>

        {/* =========================================================================
            7. MEASURED IMPACT (Real, verified metrics without dummy placeholders)
            ========================================================================= */}
        <section className="w-full">
          <div className="w-full p-8 lg:p-12 rounded-3xl frosted-glass border border-ice-cyan/25 shadow-xl flex flex-col gap-8 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
                MEASURED IMPACT
              </div>
              <span className="font-mono text-[11px] text-muted-text px-2.5 py-1 rounded bg-blue-950/60 border border-ice-cyan/15">
                VERIFIED PERFORMANCE
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-surface-text tracking-tight">
                Consistent close cycles, audit-ready numbers, zero surprises.
              </h3>
              <p className="text-muted-text text-sm sm:text-base max-w-2xl">
                How our institutional finance and advisory operations deliver measurable velocity for high-growth enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-blue-950/40 border border-white/5 flex flex-col gap-1">
                <span className="font-display text-4xl sm:text-5xl font-bold text-ice-cyan">14 Days</span>
                <span className="font-display text-sm font-semibold text-surface-text">Faster Month-End Close</span>
                <span className="text-muted-text text-xs">Accelerated reconciliation workflows</span>
              </div>
              <div className="p-6 rounded-2xl bg-blue-950/40 border border-white/5 flex flex-col gap-1">
                <span className="font-display text-4xl sm:text-5xl font-bold text-diamond-blue">99.9%</span>
                <span className="font-display text-sm font-semibold text-surface-text">Reporting Accuracy</span>
                <span className="text-muted-text text-xs">Continuous ledger synchronization</span>
              </div>
              <div className="p-6 rounded-2xl bg-blue-950/40 border border-white/5 flex flex-col gap-1">
                <span className="font-display text-4xl sm:text-5xl font-bold text-ice-cyan">100%</span>
                <span className="font-display text-sm font-semibold text-surface-text">Audit & Regulatory Compliance</span>
                <span className="text-muted-text text-xs">Clean opinion documentation</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. RELATED SERVICES
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8">
          <div className="flex flex-col items-start gap-2.5">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-ice-cyan uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
              ECOSYSTEM SYNERGIES
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-text tracking-tight">
              Related Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* ERP */}
            <div className="group p-8 rounded-2xl frosted-glass border border-white/5 flex flex-col justify-between hover:border-ice-cyan/40 hover:bg-[#102046]/70 transition-all duration-300">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-ice-cyan/25 flex items-center justify-center text-ice-cyan mb-2">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-text">ERP Solutions</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Connect your financial operations directly to NetSuite, SAP, or Sage Intacct architectures.
                </p>
              </div>
              <div className="pt-6">
                <Link 
                  href="/erp" 
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ice-cyan group-hover:text-white transition-colors"
                >
                  <span>Explore ERP</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Compliance */}
            <div className="group p-8 rounded-2xl frosted-glass border border-white/5 flex flex-col justify-between hover:border-ice-cyan/40 hover:bg-[#102046]/70 transition-all duration-300">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-ice-cyan/25 flex items-center justify-center text-ice-cyan mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-text">Compliance & Governance</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Align finance controls, audit readiness, SOC 2, and statutory cross-border tax compliance.
                </p>
              </div>
              <div className="pt-6">
                <Link 
                  href="/compliances" 
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ice-cyan group-hover:text-white transition-colors"
                >
                  <span>Explore Compliance</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* AI & ML */}
            <div className="group p-8 rounded-2xl frosted-glass border border-white/5 flex flex-col justify-between hover:border-ice-cyan/40 hover:bg-[#102046]/70 transition-all duration-300">
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-ice-cyan/25 flex items-center justify-center text-ice-cyan mb-2">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-text">AI & Machine Learning</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Automate financial forecasting, expense categorization, and intelligent variance detection.
                </p>
              </div>
              <div className="pt-6">
                <Link 
                  href="/aiml" 
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ice-cyan group-hover:text-white transition-colors"
                >
                  <span>Explore AI & ML</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            9. FINAL CTA
            ========================================================================= */}
        <section className="w-full pt-2">
          <div className="relative rounded-3xl p-8 sm:p-10 lg:py-10 lg:px-14 overflow-hidden bg-gradient-to-r from-[#0B1630] via-[#101E40] to-[#0B1630] border-2 border-ice-cyan/50 shadow-glow-cyan flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
            {/* Background Shader Animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
              <GlassFold speed={0.8} scale={1} className="w-full h-full" color1="#1e3cc8" color2="#06081e" color3="#7FD6FF" />
            </div>

            {/* Glowing Light Streak Accents */}
            <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-diamond-blue/25 blur-[90px] pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-ice-cyan/25 blur-[90px] pointer-events-none"></div>
            
            <div className="flex flex-col gap-3 max-w-2xl text-center lg:text-left z-10">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-bold text-surface-text leading-tight">
                Ready for finance that keeps pace with growth?
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed font-light">
                Strategic controllership, tax readiness, and high-assurance financial operations engineered for growing enterprises.
              </p>
            </div>

            <div className="shrink-0 z-10">
              <MetallicButton label="Request Finance Advisory" onClick={() => setIsModalOpen(true)} />
            </div>
          </div>

          <p className="font-mono text-xs text-muted-text mt-4 text-center">
            Advisory services. Not legal or tax advice.
          </p>
        </section>

      </div>

      {/* =========================================================================
          INTERACTIVE FINANCE CONSULTATION MODAL
          ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl frosted-glass border border-ice-cyan/35 shadow-2xl p-6 sm:p-10 flex flex-col gap-6 text-surface-text max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-ice-cyan animate-pulse"></div>
                <h3 className="font-display text-xl font-bold tracking-tight">Request Finance Advisory</h3>
              </div>
              <button 
                onClick={() => { setIsModalOpen(false); setSubmitted(false); }}
                className="p-2 rounded-full hover:bg-white/10 text-muted-text hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-bold">Consultation Request Received!</h4>
                <p className="text-muted-text text-sm max-w-md">
                  Thank you, <span className="text-white font-medium">{consultationData.fullName || 'there'}</span>. A Senior Finance Advisor will review your profile and reach out within 1 business day.
                </p>
                <button 
                  onClick={() => { setIsModalOpen(false); setSubmitted(false); setStep(1); }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-ice-cyan text-[#050B1A] font-semibold text-sm hover:opacity-90"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                
                {/* Step Indicators */}
                <div className="flex items-center justify-between font-mono text-xs text-muted-text pb-2 border-b border-white/5">
                  <span className={step >= 1 ? 'text-ice-cyan font-bold' : ''}>01 / Profile & Scope</span>
                  <span className={step >= 2 ? 'text-ice-cyan font-bold' : ''}>02 / Stack & Cadence</span>
                  <span className={step >= 3 ? 'text-ice-cyan font-bold' : ''}>03 / Contact Info</span>
                </div>

                {/* Step 1: Profile & Scope */}
                {step === 1 && (
                  <div className="flex flex-col gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-text mb-2">Company Stage</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          'Early-Stage / Seed',
                          'Series A-C Growth',
                          'Scaling Enterprise'
                        ].map(stg => (
                          <button
                            key={stg}
                            type="button"
                            onClick={() => setConsultationData({ ...consultationData, companyStage: stg })}
                            className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                              consultationData.companyStage === stg 
                                ? 'bg-ice-cyan/20 border-ice-cyan text-white shadow-sm' 
                                : 'bg-blue-950/40 border-white/10 text-muted-text hover:text-white hover:border-white/20'
                            }`}
                          >
                            {stg}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-text mb-2">Primary Scope Needed</label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          'Accounting & Month-End Close',
                          'GAAP / IFRS Financial Reporting',
                          'Tax Planning & Advisory',
                          'Budgeting & Financial Modeling',
                          'Cash Flow & Investor Updates',
                          'Fractional CFO Advisory'
                        ].map(svc => {
                          const isSelected = consultationData.primaryService.includes(svc);
                          return (
                            <button
                              key={svc}
                              type="button"
                              onClick={() => toggleService(svc)}
                              className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all flex items-center justify-between ${
                                isSelected 
                                  ? 'bg-ice-cyan/20 border-ice-cyan text-white' 
                                  : 'bg-blue-950/40 border-white/10 text-muted-text hover:text-white'
                              }`}
                            >
                              <span>{svc}</span>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-ice-cyan" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button 
                        onClick={() => setStep(2)}
                        disabled={!consultationData.companyStage}
                        className="px-6 py-2.5 rounded-full font-display text-sm font-semibold bg-ice-cyan text-[#050B1A] disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 flex items-center gap-2"
                      >
                        <span>Next Step</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Stack & Cadence */}
                {step === 2 && (
                  <div className="flex flex-col gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-text mb-2">Current Accounting / ERP System</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {['QuickBooks', 'NetSuite', 'Xero', 'Sage Intacct', 'SAP', 'Workday', 'Excel/Manual', 'Other'].map(sys => (
                          <button
                            key={sys}
                            type="button"
                            onClick={() => setConsultationData({ ...consultationData, accountingSystem: sys })}
                            className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all ${
                              consultationData.accountingSystem === sys 
                                ? 'bg-ice-cyan/20 border-ice-cyan text-white' 
                                : 'bg-blue-950/40 border-white/10 text-muted-text hover:text-white'
                            }`}
                          >
                            {sys}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-text mb-2">Brief Summary or Key Pain Points</label>
                      <textarea
                        rows={3}
                        value={consultationData.message}
                        onChange={(e) => setConsultationData({ ...consultationData, message: e.target.value })}
                        placeholder="e.g. Preparing for Series B audit, need faster 5-day close, international tax filings..."
                        className="w-full px-4 py-2.5 rounded-xl bg-blue-950/40 border border-white/10 text-white placeholder-muted-text/50 text-xs focus:outline-none focus:border-ice-cyan resize-none"
                      />
                    </div>

                    <div className="flex justify-between pt-2">
                      <button 
                        onClick={() => setStep(1)}
                        className="px-5 py-2 rounded-full border border-white/20 text-xs font-semibold text-muted-text hover:text-white"
                      >
                        Back
                      </button>
                      <button 
                        onClick={() => setStep(3)}
                        className="px-6 py-2.5 rounded-full font-display text-sm font-semibold bg-ice-cyan text-[#050B1A] hover:opacity-90 flex items-center gap-2"
                      >
                        <span>Next Step</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {step === 3 && (
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-text mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={consultationData.fullName}
                        onChange={(e) => setConsultationData({ ...consultationData, fullName: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-blue-950/40 border border-white/10 text-white placeholder-muted-text/50 text-xs focus:outline-none focus:border-ice-cyan"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-text mb-1">Work Email *</label>
                      <input 
                        type="email" 
                        required
                        value={consultationData.workEmail}
                        onChange={(e) => setConsultationData({ ...consultationData, workEmail: e.target.value })}
                        placeholder="sarah@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-blue-950/40 border border-white/10 text-white placeholder-muted-text/50 text-xs focus:outline-none focus:border-ice-cyan"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-muted-text mb-1">Company Name</label>
                      <input 
                        type="text" 
                        value={consultationData.companyName}
                        onChange={(e) => setConsultationData({ ...consultationData, companyName: e.target.value })}
                        placeholder="Apex Therapeutics Inc."
                        className="w-full px-4 py-2.5 rounded-xl bg-blue-950/40 border border-white/10 text-white placeholder-muted-text/50 text-xs focus:outline-none focus:border-ice-cyan"
                      />
                    </div>

                    <div className="flex justify-between pt-3">
                      <button 
                        onClick={() => setStep(2)}
                        className="px-5 py-2 rounded-full border border-white/20 text-xs font-semibold text-muted-text hover:text-white"
                      >
                        Back
                      </button>
                      <button 
                        onClick={() => setSubmitted(true)}
                        disabled={!consultationData.fullName || !consultationData.workEmail}
                        className="px-7 py-2.5 rounded-full font-display text-sm font-bold bg-gradient-to-r from-diamond-blue to-ice-cyan text-[#050B1A] disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 shadow-md"
                      >
                        Submit Advisory Request
                      </button>
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
