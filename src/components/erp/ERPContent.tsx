'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Workflow, 
  SlidersHorizontal, 
  Settings, 
  CloudUpload, 
  Network, 
  Headphones, 
  BarChart3, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  Brain, 
  RefreshCw, 
  Receipt, 
  Calendar 
} from 'lucide-react';
import { GlassFold } from '@/components/ui/glass-fold';
import { MetallicButton } from '@/components/ui/metallic-button';
import HowItWorks from '@/components/ui/how-it-works';

export function ERPContent() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  // Assessment Form State
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState({
    industry: '',
    companySize: '',
    currentPlatform: '',
    timeline: '',
    fullName: '',
    workEmail: '',
    companyName: ''
  });
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

  return (
    <div 
      id="erp-stitch-page" 
      className="radial-bg min-h-screen relative antialiased selection:bg-diamond-blue selection:text-white overflow-x-hidden w-full"
      style={{
        backgroundColor: '#050B1A',
        color: '#E1E8F8',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* =========================================================================
          MAIN CONTAINER (Sits cleanly inside site layout)
          ========================================================================= */}
      <div className="w-full pt-4 sm:pt-6 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-14 lg:gap-18 pb-6 sm:pb-8">
        
        {/* HERO WRAPPER (Keeps Breadcrumb close to Hero) */}
        <div className="w-full flex flex-col gap-3">

          {/* 1. HERO SECTION */}
          <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* H1 verbatim */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] lg:leading-[64px] font-bold text-surface-text tracking-tight">
              Choose the right ERP. <br className="hidden sm:inline"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-ice-cyan to-diamond-blue drop-shadow-[0_0_25px_rgba(127,214,255,0.35)]">
                Get it live without handoff gaps.
              </span>
            </h1>

            {/* Subtext verbatim */}
            <p className="text-muted-text text-[17px] leading-relaxed max-w-2xl font-light">
              Consulting, implementation and managed services across Oracle NetSuite, SAP S/4HANA, Infor CloudSuite, IBM Maximo, JD Edwards EnterpriseOne and Microsoft Dynamics 365.
            </p>

            {/* Buttons verbatim */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => setIsAssessmentOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-display text-[15px] font-semibold text-white bg-gradient-to-r from-diamond-blue to-[#1D4ED8] border border-ice-cyan/40 shadow-glow-blue hover:shadow-[0_0_35px_rgba(61,139,255,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>Book a Free ERP Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a 
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-display text-[15px] font-medium text-surface-text frosted-glass hover:bg-glass-highlight hover:border-ice-cyan/40 hover:-translate-y-0.5 transition-all duration-200" 
                href="#platforms"
              >
                Explore Platforms
              </a>
            </div>
          </div>

          {/* Right Visual: Multi-layered frosted glass crystal facets & glowing orbital nodes */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-6">
            <div className="relative w-full max-w-[480px] aspect-square rounded-3xl p-6 flex items-center justify-center">
              
              {/* Background Glow Concentric Rings */}
              <div className="absolute inset-0 rounded-full bg-diamond-blue/10 blur-[80px]"></div>
              <div className="absolute w-72 h-72 rounded-full border border-ice-cyan/20 animate-pulse"></div>
              <div className="absolute w-96 h-96 rounded-full border border-glass-border/30"></div>
              
              {/* Faceted Crystal 1 (Center Front) */}
              <div className="relative z-20 w-64 h-64 rounded-2xl frosted-glass border border-ice-cyan/40 p-5 shadow-glow-cyan/20 flex flex-col justify-between transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-ice-cyan font-semibold">CORE FABRIC</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-ice-cyan shadow-[0_0_10px_#7FD6FF]"></span>
                </div>
                <div className="space-y-3 py-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-midnight/60 border border-glass-border text-xs">
                    <span className="font-mono text-muted-text">Zero Handoff Mesh</span>
                    <span className="text-ice-cyan font-mono font-medium">99.98%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-midnight/60 border border-glass-border text-xs">
                    <span className="font-mono text-muted-text">Architecture Parity</span>
                    <span className="text-diamond-blue font-mono font-medium">Active</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-glass-border flex items-center justify-between text-[11px] font-mono text-muted-text">
                  <span>FACET // 01</span>
                  <span className="text-surface-text">Continuous Sync</span>
                </div>
              </div>

              {/* Faceted Crystal 2 (Top Right Layer) */}
              <div className="absolute top-10 right-2 z-10 w-44 h-44 rounded-2xl bg-[#0B1630]/70 backdrop-blur-md border border-glass-border p-4 shadow-frosted transform rotate-12 hover:rotate-6 transition-transform duration-500 hidden sm:block">
                <div className="w-6 h-6 rounded-md bg-diamond-blue/20 flex items-center justify-center text-diamond-blue mb-3">
                  <Workflow className="w-4 h-4 text-diamond-blue" />
                </div>
                <div className="font-display text-xs font-semibold text-surface-text">Orchestration</div>
                <p className="font-mono text-[10px] text-muted-text mt-1">Cross-platform schema bridge</p>
              </div>

              {/* Faceted Crystal 3 (Bottom Left Layer) */}
              <div className="absolute bottom-6 left-2 z-10 w-48 h-40 rounded-2xl bg-[#101E40]/70 backdrop-blur-md border border-glass-border p-4 shadow-frosted transform -rotate-6 hover:rotate-0 transition-transform duration-500 hidden sm:block">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-diamond-blue animate-ping"></span>
                  <span className="font-mono text-[10px] text-diamond-blue font-semibold">ENTERPRISE NODE</span>
                </div>
                <div className="font-display text-xs font-semibold text-surface-text">Unified Ledgers</div>
                <p className="font-mono text-[10px] text-muted-text mt-1">Direct API &amp; BAPI Pipeline</p>
              </div>

              {/* Interconnected Orbital Luminous Nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-15" viewBox="0 0 400 400">
                <line stroke="rgba(127,214,255,0.25)" strokeDasharray="3,3" strokeWidth="1.5" x1="80" x2="200" y1="120" y2="200"></line>
                <line stroke="rgba(61,139,255,0.3)" strokeDasharray="4,4" strokeWidth="1.5" x1="320" x2="240" y1="100" y2="220"></line>
                <line stroke="rgba(127,214,255,0.25)" strokeWidth="1" x1="120" x2="210" y1="320" y2="260"></line>
                <circle cx="80" cy="120" fill="#7FD6FF" r="3.5"></circle>
                <circle cx="320" cy="100" fill="#3D8BFF" r="4"></circle>
                <circle cx="120" cy="320" fill="#7FD6FF" r="3"></circle>
              </svg>
            </div>
          </div>
        </section>
        </div>

        {/* =========================================================================
            2. INTRO SECTION
            ========================================================================= */}
        <section className="w-full">
          <div className="frosted-glass rounded-3xl p-8 lg:p-14 shadow-frosted relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-diamond-blue/10 blur-[100px] pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left statement verbatim */}
              <div className="lg:col-span-5">
                <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase block mb-3 font-semibold">Executive Context</span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] lg:leading-[48px] font-bold text-surface-text">
                  Disconnected systems slow growth.
                </h2>
              </div>

              {/* Glowing gradient vertical divider */}
              <div className="hidden lg:flex lg:col-span-1 justify-center">
                <div className="w-[1px] h-36 bg-gradient-to-b from-transparent via-ice-cyan/50 to-transparent"></div>
              </div>

              {/* Right paragraph verbatim */}
              <div className="lg:col-span-6">
                <p className="text-surface-text/90 text-lg sm:text-[19px] leading-relaxed font-light">
                  When finance, operations, supply chain and HR each run on their own tools, every report becomes a manual project. A well-implemented ERP puts them on one platform with one version of the numbers. Our team covers the full lifecycle, from choosing the platform to supporting it after go-live.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            3. WHAT WE DO (7 Frosted Glass Bento: 4 + 3)
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase font-semibold">End-To-End Capabilities</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">What We Do</h2>
          </div>

          {/* Bento Row 1: 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan group-hover:scale-105 transition-transform">
                  <SlidersHorizontal className="w-5 h-5 text-ice-cyan" />
                </div>
                <h3 className="font-display text-[19px] font-semibold text-surface-text">Strategy and Platform Selection</h3>
                <p className="text-muted-text text-[14px] leading-relaxed">
                  Vendor evaluation, business case, total cost modeling and a roadmap.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-glass-border/40 font-mono text-[11px] text-ice-cyan/80">Phase 01 · Advisory</div>
            </div>

            {/* Card 2 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-diamond-blue group-hover:scale-105 transition-transform">
                  <Settings className="w-5 h-5 text-diamond-blue" />
                </div>
                <h3 className="font-display text-[19px] font-semibold text-surface-text">Implementation and Configuration</h3>
                <p className="text-muted-text text-[14px] leading-relaxed">
                  Fit-gap analysis, solution design, configuration, testing, data migration and go-live.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-glass-border/40 font-mono text-[11px] text-diamond-blue/90">Phase 02 · Execution</div>
            </div>

            {/* Card 3 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan group-hover:scale-105 transition-transform">
                  <CloudUpload className="w-5 h-5 text-ice-cyan" />
                </div>
                <h3 className="font-display text-[19px] font-semibold text-surface-text">Upgrades and Cloud Migration</h3>
                <p className="text-muted-text text-[14px] leading-relaxed">
                  Version upgrades and moves from on-premise to cloud.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-glass-border/40 font-mono text-[11px] text-ice-cyan/80">Phase 03 · Evolution</div>
            </div>

            {/* Card 4 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-diamond-blue group-hover:scale-105 transition-transform">
                  <Network className="w-5 h-5 text-diamond-blue" />
                </div>
                <h3 className="font-display text-[19px] font-semibold text-surface-text">Integration and Development</h3>
                <p className="text-muted-text text-[14px] leading-relaxed">
                  APIs, middleware, custom development, workflow automation and third-party connectors.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-glass-border/40 font-mono text-[11px] text-diamond-blue/90">Phase 04 · Interconnect</div>
            </div>

          </div>

          {/* Bento Row 2: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 5 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan group-hover:scale-105 transition-transform">
                  <Headphones className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-[20px] font-semibold text-surface-text">Managed Services</h3>
                <p className="text-muted-text text-[15px] leading-relaxed">
                  Ongoing application support, helpdesk, break-fix and continuous improvement.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-glass-border/40 font-mono text-[11px] text-ice-cyan/80">Continuous SLA Support</div>
            </div>

            {/* Card 6 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-diamond-blue group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-6 h-6 text-diamond-blue" />
                </div>
                <h3 className="font-display text-[20px] font-semibold text-surface-text">Analytics and Reporting</h3>
                <p className="text-muted-text text-[15px] leading-relaxed">
                  Embedded reporting, BI integration, KPI dashboards and data warehousing.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-glass-border/40 font-mono text-[11px] text-diamond-blue/90">Executive Telemetry</div>
            </div>

            {/* Card 7 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-[20px] font-semibold text-surface-text">Training and Change Management</h3>
                <p className="text-muted-text text-[15px] leading-relaxed">
                  Role-based training and adoption support, so people actually use the new system.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-glass-border/40 font-mono text-[11px] text-ice-cyan/80">Human Adoption Engine</div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            4. PLATFORMS WE SUPPORT (6 Glass Tiles - Text Names Only)
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8 scroll-mt-28" id="platforms">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase font-semibold">Tier-1 Ecosystem</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">Platforms We Support</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Platform 1 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[11px] text-ice-cyan tracking-wider uppercase font-semibold">PLATFORM 01</span>
                <div className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors">
                  Oracle NetSuite
                </div>
                <p className="text-muted-text text-sm">Unified multi-entity cloud operations, global finance and automated compliance.</p>
              </div>
              <a className="mt-6 font-display text-sm font-semibold text-diamond-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#fit-analysis">
                Explore Oracle NetSuite →
              </a>
            </div>

            {/* Platform 2 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[11px] text-diamond-blue tracking-wider uppercase font-semibold">PLATFORM 02</span>
                <div className="font-display text-xl font-bold text-surface-text group-hover:text-diamond-blue transition-colors">
                  SAP S/4HANA
                </div>
                <p className="text-muted-text text-sm">Clean core architecture, sub-second BAPI data propagation and global ERP dominance.</p>
              </div>
              <a className="mt-6 font-display text-sm font-semibold text-ice-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#fit-analysis">
                Explore SAP S/4HANA →
              </a>
            </div>

            {/* Platform 3 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[11px] text-ice-cyan tracking-wider uppercase font-semibold">PLATFORM 03</span>
                <div className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors">
                  Infor CloudSuite
                </div>
                <p className="text-muted-text text-sm">Deep micro-vertical industry specialization for high-throughput distribution &amp; process manufacturing.</p>
              </div>
              <a className="mt-6 font-display text-sm font-semibold text-diamond-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#fit-analysis">
                Explore Infor CloudSuite →
              </a>
            </div>

            {/* Platform 4 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[11px] text-diamond-blue tracking-wider uppercase font-semibold">PLATFORM 04</span>
                <div className="font-display text-xl font-bold text-surface-text group-hover:text-diamond-blue transition-colors">
                  IBM Maximo
                </div>
                <p className="text-muted-text text-sm">Capital asset lifecycle governance, enterprise maintenance schedules and IoT telemetry tracking.</p>
              </div>
              <a className="mt-6 font-display text-sm font-semibold text-ice-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#fit-analysis">
                Explore IBM Maximo →
              </a>
            </div>

            {/* Platform 5 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[11px] text-ice-cyan tracking-wider uppercase font-semibold">PLATFORM 05</span>
                <div className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors">
                  JD Edwards EnterpriseOne
                </div>
                <p className="text-muted-text text-sm">Industrial supply resilience, ag-business operations and high-volume asset-heavy accounting.</p>
              </div>
              <a className="mt-6 font-display text-sm font-semibold text-diamond-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#fit-analysis">
                Explore JD Edwards EnterpriseOne →
              </a>
            </div>

            {/* Platform 6 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-[11px] text-diamond-blue tracking-wider uppercase font-semibold">PLATFORM 06</span>
                <div className="font-display text-xl font-bold text-surface-text group-hover:text-diamond-blue transition-colors">
                  Microsoft Dynamics 365
                </div>
                <p className="text-muted-text text-sm">Complete Power Platform interoperability, Dataverse orchestration and intelligent F&amp;O telemetry.</p>
              </div>
              <a className="mt-6 font-display text-sm font-semibold text-ice-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#fit-analysis">
                Explore Microsoft Dynamics 365 →
              </a>
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. WHICH ERP FITS YOUR BUSINESS (Hero Container with 2x3 Grid)
            ========================================================================= */}
        <section className="w-full scroll-mt-28" id="fit-analysis">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden bg-gradient-to-b from-[#0B1630]/90 to-[#050B1A]/95 border-2 border-ice-cyan/40 shadow-glow-cyan">
            <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-ice-cyan/15 blur-[120px] pointer-events-none"></div>
            
            {/* Header */}
            <div className="flex flex-col gap-4 max-w-3xl mb-12">
              <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase font-semibold">Comparative Advisory Engine</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-surface-text">
                Which ERP fits your business?
              </h2>
              <p className="text-surface-text/85 text-base sm:text-lg leading-relaxed font-light">
                There is no universally right ERP. The best choice depends on your industry, size, complexity, existing systems, budget and growth plans. We compare platforms against your requirements and give you a clear recommendation.
              </p>
            </div>

            {/* 2x3 Grid of spacious frosted glass panels with "Best for" badge */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* 1. Oracle NetSuite */}
              <div className="frosted-glass rounded-2xl p-7 flex flex-col justify-between border border-glass-border hover:border-ice-cyan/50 transition-all">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-surface-text">Oracle NetSuite</span>
                    <span className="px-2.5 py-1 rounded-full bg-ice-cyan/15 border border-ice-cyan/30 text-ice-cyan font-mono text-[11px] font-semibold">Best for</span>
                  </div>
                  <p className="text-muted-text text-[14px] leading-relaxed">
                    Fast-growing mid-market companies and multi-subsidiary organizations needing rapid time-to-value, cloud-native architecture, and unified financials across global entities without heavy IT overhead.
                  </p>
                </div>
              </div>

              {/* 2. SAP S/4HANA */}
              <div className="frosted-glass rounded-2xl p-7 flex flex-col justify-between border border-glass-border hover:border-diamond-blue/50 transition-all">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-surface-text">SAP S/4HANA</span>
                    <span className="px-2.5 py-1 rounded-full bg-diamond-blue/15 border border-diamond-blue/30 text-diamond-blue font-mono text-[11px] font-semibold">Best for</span>
                  </div>
                  <p className="text-muted-text text-[14px] leading-relaxed">
                    Large global enterprises with complex operational workflows, massive transaction volumes, sophisticated supply chain interdependencies, and strict multinational regulatory obligations.
                  </p>
                </div>
              </div>

              {/* 3. Infor CloudSuite */}
              <div className="frosted-glass rounded-2xl p-7 flex flex-col justify-between border border-glass-border hover:border-ice-cyan/50 transition-all">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-surface-text">Infor CloudSuite</span>
                    <span className="px-2.5 py-1 rounded-full bg-ice-cyan/15 border border-ice-cyan/30 text-ice-cyan font-mono text-[11px] font-semibold">Best for</span>
                  </div>
                  <p className="text-muted-text text-[14px] leading-relaxed">
                    Specialized manufacturing, distribution, automotive, and aerospace firms seeking pre-configured industry workflows that drastically reduce the need for custom customizations.
                  </p>
                </div>
              </div>

              {/* 4. IBM Maximo */}
              <div className="frosted-glass rounded-2xl p-7 flex flex-col justify-between border border-glass-border hover:border-diamond-blue/50 transition-all">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-surface-text">IBM Maximo</span>
                    <span className="px-2.5 py-1 rounded-full bg-diamond-blue/15 border border-diamond-blue/30 text-diamond-blue font-mono text-[11px] font-semibold">Best for</span>
                  </div>
                  <p className="text-muted-text text-[14px] leading-relaxed">
                    Capital asset-intensive enterprises in energy, utilities, facilities, and transportation requiring comprehensive enterprise asset management (EAM), predictive maintenance, and strict regulatory adherence.
                  </p>
                </div>
              </div>

              {/* 5. JD Edwards EnterpriseOne */}
              <div className="frosted-glass rounded-2xl p-7 flex flex-col justify-between border border-glass-border hover:border-ice-cyan/50 transition-all">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-surface-text">JD Edwards EnterpriseOne</span>
                    <span className="px-2.5 py-1 rounded-full bg-ice-cyan/15 border border-ice-cyan/30 text-ice-cyan font-mono text-[11px] font-semibold">Best for</span>
                  </div>
                  <p className="text-muted-text text-[14px] leading-relaxed">
                    Established organizations in manufacturing, engineering, real estate, and agribusiness with mission-critical supply networks that need continuous stability, modern orchestrator integrations, and long-term durability.
                  </p>
                </div>
              </div>

              {/* 6. Microsoft Dynamics 365 */}
              <div className="frosted-glass rounded-2xl p-7 flex flex-col justify-between border border-diamond-blue/30 hover:border-diamond-blue/50 transition-all">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-surface-text">Microsoft Dynamics 365</span>
                    <span className="px-2.5 py-1 rounded-full bg-diamond-blue/15 border border-diamond-blue/30 text-diamond-blue font-mono text-[11px] font-semibold">Best for</span>
                  </div>
                  <p className="text-muted-text text-[14px] leading-relaxed">
                    Enterprises deeply invested in the Microsoft stack (Azure, Office 365, Teams, Power Platform) seeking seamless interoperability, rapid low-code customization, and modern operational agility.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            6. WHY MATIC FOR ERP (6 Numbered Points & Side Crystal Artwork)
            ========================================================================= */}
        <section className="w-full">
          <div className="frosted-glass rounded-3xl p-8 lg:p-14 shadow-frosted relative overflow-hidden">
            <div className="flex flex-col gap-3 mb-10">
              <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase font-semibold">Institutional Advantage</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">Why Matic for ERP</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* 6 Numbered Points */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* 01 verbatim */}
                <div className="flex flex-col gap-2">
                  <div className="font-mono text-ice-cyan text-sm font-bold tracking-wider">01</div>
                  <h3 className="font-display text-lg font-semibold text-surface-text">Independent advice</h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    We are not married to a single software vendor. We evaluate your true operational needs and recommend the exact architecture that aligns with your 5-year enterprise trajectory.
                  </p>
                </div>

                {/* 02 verbatim */}
                <div className="flex flex-col gap-2">
                  <div className="font-mono text-diamond-blue text-sm font-bold tracking-wider">02</div>
                  <h3 className="font-display text-lg font-semibold text-surface-text">Platform-specific depth</h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    Certified senior architects across NetSuite, SAP S/4HANA, Infor, Maximo, JDE, and Dynamics 365 with battle-tested experience in enterprise configurations.
                  </p>
                </div>

                {/* 03 verbatim */}
                <div className="flex flex-col gap-2">
                  <div className="font-mono text-ice-cyan text-sm font-bold tracking-wider">03</div>
                  <h3 className="font-display text-lg font-semibold text-surface-text">One accountable team</h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    Eliminate the handoff gap between strategic advisory consultants and offshore implementation vendors. The architects who design your solution lead your rollout to go-live.
                  </p>
                </div>

                {/* 04 verbatim */}
                <div className="flex flex-col gap-2">
                  <div className="font-mono text-diamond-blue text-sm font-bold tracking-wider">04</div>
                  <h3 className="font-display text-lg font-semibold text-surface-text">Industry context</h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    Deep vertical domain mastery across manufacturing, global trade, retail, life sciences, energy, and supply chain logistics with pre-built regulatory templates.
                  </p>
                </div>

                {/* 05 verbatim */}
                <div className="flex flex-col gap-2">
                  <div className="font-mono text-ice-cyan text-sm font-bold tracking-wider">05</div>
                  <h3 className="font-display text-lg font-semibold text-surface-text">Global delivery</h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    24/7 follow-the-sun delivery capability, blending on-shore executive leadership with highly skilled technical delivery centers across multiple geographic zones.
                  </p>
                </div>

                {/* 06 verbatim */}
                <div className="flex flex-col gap-2">
                  <div className="font-mono text-diamond-blue text-sm font-bold tracking-wider">06</div>
                  <h3 className="font-display text-lg font-semibold text-surface-text">Reusable accelerators</h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    Proprietary pre-built data migration scripts, API connectors, automated test suites, and compliance mapping libraries that shorten time-to-value by up to 40%.
                  </p>
                </div>

              </div>

              {/* Side Decorative Faceted Crystal Artwork */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="relative w-full max-w-[320px] aspect-square rounded-2xl frosted-glass border border-ice-cyan/30 p-6 flex flex-col justify-between shadow-glow-blue">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-ice-cyan uppercase font-semibold">MATIC COGNITIVE CORE</span>
                    <ShieldCheck className="w-5 h-5 text-ice-cyan" />
                  </div>

                  {/* Geometric Crystal graphic */}
                  <div className="w-full flex items-center justify-center py-6">
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-xl border border-ice-cyan/40 rotate-45 animate-pulse"></div>
                      <div className="absolute inset-2 rounded-xl border border-diamond-blue/50 -rotate-12"></div>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-diamond-blue to-ice-cyan flex items-center justify-center shadow-glow-cyan">
                        <CheckCircle2 className="w-6 h-6 text-midnight" />
                      </div>
                    </div>
                  </div>

                  <div className="font-mono text-center text-xs text-muted-text">
                    0% Handoff Risk · 100% Accountable
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            7. HOW WE WORK (Horizontal 4-Step Timeline)
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase font-semibold">Delivery Protocol</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">How We Work</h2>
          </div>

          <HowItWorks
            layout="horizontal"
            showBackgroundLines={false}
            features={[
              {
                title: "Select",
                description: "Requirements gathering, platform shortlisting, vendor bake-offs, total cost of ownership modeling, and architectural blueprinting to ensure exact business fit.",
                colorTheme: "cyan",
              },
              {
                title: "Implement",
                description: "Agile sprints covering core solution configuration, legacy data cleansing, automated migration runs, rigorous user acceptance testing (UAT), and cutover rehearsal.",
                colorTheme: "blue",
              },
              {
                title: "Integrate",
                description: "Seamlessly bind your ERP core to CRM, WMS, eCommerce, automated bank feeds, third-party logistics (3PL), and proprietary legacy data sources with fault-tolerant APIs.",
                colorTheme: "purple",
              },
              {
                title: "Support and improve",
                description: "Post go-live stabilization, 24/7 hypercare, managed application services, bi-annual release management, and continuous workflow optimizations to maximize ROI.",
                colorTheme: "cyan",
              },
            ]}
          />
        </section>


        {/* =========================================================================
            9. RELATED SERVICES (3 Cards with exact verbatim copy & "Learn more →")
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase font-semibold">Adjacent Capabilities</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">Related Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Service 1 verbatim */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan">
                  <Brain className="w-5 h-5 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-text">AI and ML</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Forecasting and automation on top of your ERP data.
                </p>
              </div>
              <Link className="mt-8 font-display text-sm font-semibold text-ice-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="/aiml">
                Learn more →
              </Link>
            </div>

            {/* Service 2 verbatim */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-diamond-blue">
                  <ShieldCheck className="w-5 h-5 text-diamond-blue" />
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-text">Compliances</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Turn regulatory frameworks into controls your ERP can enforce.
                </p>
              </div>
              <Link className="mt-8 font-display text-sm font-semibold text-diamond-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="/compliances">
                Learn more →
              </Link>
            </div>

            {/* Service 3 verbatim */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan">
                  <Receipt className="w-5 h-5 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-text">Accounting and Taxation</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Align reporting and close with your ERP.
                </p>
              </div>
              <Link className="mt-8 font-display text-sm font-semibold text-ice-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="/accountingtax">
                Learn more →
              </Link>
            </div>

          </div>
        </section>

        {/* =========================================================================
            10. FINAL CTA (Large Glowing Gradient Card)
            ========================================================================= */}
        <section className="w-full scroll-mt-28" id="assessment">
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
                Start with a free ERP readiness assessment.
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed font-light">
                We review your current state, find the gaps and opportunities, and give you a clear recommendation for your business.
              </p>
            </div>

            <div className="shrink-0 z-10">
              <MetallicButton label="Book a Free ERP Assessment" onClick={() => setIsAssessmentOpen(true)} />
            </div>

          </div>
        </section>

      </div>

      {/* =========================================================================
          FREE ERP READINESS ASSESSMENT DIAGNOSTIC MODAL
          ========================================================================= */}
      {isAssessmentOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-midnight/85 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-3xl frosted-glass border-2 border-ice-cyan/50 shadow-frosted-lg p-6 sm:p-8 overflow-hidden bg-[#0B1630]">
            <div className="flex items-center justify-between pb-4 border-b border-glass-border">
              <div>
                <span className="font-mono text-xs text-ice-cyan uppercase tracking-wider font-semibold">
                  Step {assessmentStep} of 3
                </span>
                <h3 className="font-display text-xl font-bold text-surface-text">
                  Free ERP Readiness Diagnostic
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsAssessmentOpen(false);
                  setAssessmentSubmitted(false);
                }}
                className="text-muted-text hover:text-white p-1 rounded-full cursor-pointer"
              >
                ✕
              </button>
            </div>

            {!assessmentSubmitted ? (
              <div className="py-6 flex flex-col gap-6">
                {assessmentStep === 1 && (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-text">
                      Select your sector and operating scale for architectural calibration:
                    </p>
                    <div>
                      <label className="block text-xs font-mono text-surface-text mb-1.5">Industry Sector</label>
                      <select
                        value={assessmentData.industry}
                        onChange={(e) => setAssessmentData({ ...assessmentData, industry: e.target.value })}
                        className="w-full bg-midnight border border-glass-border rounded-xl px-4 py-2.5 text-sm text-surface-text focus:border-ice-cyan outline-none"
                      >
                        <option value="">Select industry</option>
                        <option value="Life Sciences & Biotech">Life Sciences &amp; Biotech (FDA 21 CFR Part 11)</option>
                        <option value="Process & Discrete Manufacturing">Process &amp; Discrete Manufacturing</option>
                        <option value="Global Supply Chain & 3PL">Global Supply Chain &amp; 3PL Distribution</option>
                        <option value="Energy & Utilities">Energy, Utilities &amp; Capital Assets</option>
                        <option value="Financial Services">Financial Services &amp; FinTech</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-surface-text mb-1.5">Company Size / Annual Revenue</label>
                      <select
                        value={assessmentData.companySize}
                        onChange={(e) => setAssessmentData({ ...assessmentData, companySize: e.target.value })}
                        className="w-full bg-midnight border border-glass-border rounded-xl px-4 py-2.5 text-sm text-surface-text focus:border-ice-cyan outline-none"
                      >
                        <option value="">Select revenue scale</option>
                        <option value="Growth Scale-up ($10M - $50M)">$10M - $50M (Scaling fast)</option>
                        <option value="Mid-Market ($50M - $250M)">$50M - $250M (Multi-subsidiary)</option>
                        <option value="Enterprise ($250M+)">$250M+ (Global Complex)</option>
                      </select>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setAssessmentStep(2)}
                        disabled={!assessmentData.industry || !assessmentData.companySize}
                        className="px-6 py-2.5 rounded-full font-display text-sm font-semibold text-white bg-diamond-blue hover:bg-[#2563EB] disabled:opacity-50 transition-all cursor-pointer"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {assessmentStep === 2 && (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-text">
                      Current system setup and migration objectives:
                    </p>
                    <div>
                      <label className="block text-xs font-mono text-surface-text mb-1.5">Current Platform</label>
                      <select
                        value={assessmentData.currentPlatform}
                        onChange={(e) => setAssessmentData({ ...assessmentData, currentPlatform: e.target.value })}
                        className="w-full bg-midnight border border-glass-border rounded-xl px-4 py-2.5 text-sm text-surface-text focus:border-ice-cyan outline-none"
                      >
                        <option value="">Select current core system</option>
                        <option value="QuickBooks / Manual spreadsheets">QuickBooks / Manual spreadsheets</option>
                        <option value="Legacy on-prem SAP ECC / Oracle EBS">Legacy on-prem SAP ECC / Oracle EBS</option>
                        <option value="JD Edwards on-prem">JD Edwards on-prem</option>
                        <option value="Infor / Epicor / Sage">Infor / Epicor / Sage</option>
                        <option value="NetSuite seeking optimization">Existing NetSuite seeking optimization</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-surface-text mb-1.5">Target Deployment Schedule</label>
                      <select
                        value={assessmentData.timeline}
                        onChange={(e) => setAssessmentData({ ...assessmentData, timeline: e.target.value })}
                        className="w-full bg-midnight border border-glass-border rounded-xl px-4 py-2.5 text-sm text-surface-text focus:border-ice-cyan outline-none"
                      >
                        <option value="">Select timeline</option>
                        <option value="Urgent (Within 3 months)">Urgent (Within 3 months)</option>
                        <option value="Strategic (3 - 6 months)">Strategic (3 - 6 months)</option>
                        <option value="Long Term (6 - 12 months)">Long Term (6 - 12 months)</option>
                      </select>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setAssessmentStep(1)}
                        className="px-5 py-2 rounded-full font-display text-sm text-muted-text hover:text-white"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setAssessmentStep(3)}
                        disabled={!assessmentData.currentPlatform || !assessmentData.timeline}
                        className="px-6 py-2.5 rounded-full font-display text-sm font-semibold text-white bg-diamond-blue hover:bg-[#2563EB] disabled:opacity-50 transition-all cursor-pointer"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {assessmentStep === 3 && (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-text">
                      Where should our Senior Enterprise Architect send your tailored report?
                    </p>
                    <div>
                      <label className="block text-xs font-mono text-surface-text mb-1.5">Full Name</label>
                      <input
                        type="text"
                        value={assessmentData.fullName}
                        onChange={(e) => setAssessmentData({ ...assessmentData, fullName: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-midnight border border-glass-border rounded-xl px-4 py-2.5 text-sm text-surface-text focus:border-ice-cyan outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-surface-text mb-1.5">Work Email</label>
                      <input
                        type="email"
                        value={assessmentData.workEmail}
                        onChange={(e) => setAssessmentData({ ...assessmentData, workEmail: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full bg-midnight border border-glass-border rounded-xl px-4 py-2.5 text-sm text-surface-text focus:border-ice-cyan outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-surface-text mb-1.5">Company Name</label>
                      <input
                        type="text"
                        value={assessmentData.companyName}
                        onChange={(e) => setAssessmentData({ ...assessmentData, companyName: e.target.value })}
                        placeholder="Global Enterprise Inc"
                        className="w-full bg-midnight border border-glass-border rounded-xl px-4 py-2.5 text-sm text-surface-text focus:border-ice-cyan outline-none"
                      />
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setAssessmentStep(2)}
                        className="px-5 py-2 rounded-full font-display text-sm text-muted-text hover:text-white"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setAssessmentSubmitted(true)}
                        disabled={!assessmentData.fullName || !assessmentData.workEmail}
                        className="px-7 py-3 rounded-full font-display text-sm font-semibold text-white bg-gradient-to-r from-diamond-blue to-[#1D4ED8] shadow-glow-blue hover:shadow-glow-cyan transition-all cursor-pointer"
                      >
                        Generate Assessment Report →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-8 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-diamond-blue/20 border border-ice-cyan/40 flex items-center justify-center text-ice-cyan shadow-glow-cyan">
                  <CheckCircle2 className="w-8 h-8 text-ice-cyan" />
                </div>
                <h4 className="font-display text-2xl font-bold text-surface-text">
                  Assessment Dispatched!
                </h4>
                <p className="text-sm text-muted-text max-w-md">
                  Thank you, <span className="text-ice-cyan font-semibold">{assessmentData.fullName}</span>. Based on your profile ({assessmentData.industry}), our Senior Enterprise Architect is preparing an unbiased zero-handoff evaluation for <span className="text-white font-medium">{assessmentData.companyName || 'your organization'}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsAssessmentOpen(false);
                    setAssessmentSubmitted(false);
                    setAssessmentStep(1);
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full font-display text-xs font-semibold text-white bg-midnight border border-glass-border hover:border-ice-cyan cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
