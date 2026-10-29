'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  FileCheck, 
  ScrollText, 
  CheckCircle2, 
  Search, 
  Scale, 
  ArrowRight, 
  X, 
  Sparkles, 
  Activity, 
  SlidersHorizontal,
  Radar,
  Lock,
  Layers,
  Database,
  Brain,
  Calculator,
  Server,
  Users,
  Network
} from 'lucide-react';
import { GlassFold } from '@/components/ui/glass-fold';
import { MetallicButton } from '@/components/ui/metallic-button';
import HowItWorks from '@/components/ui/how-it-works';

export function ComplianceContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Gap Assessment Modal State
  const [step, setStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState({
    frameworks: [] as string[],
    timeline: '',
    currentStatus: '',
    fullName: '',
    workEmail: '',
    companyName: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFramework = (item: string) => {
    if (assessmentData.frameworks.includes(item)) {
      setAssessmentData({
        ...assessmentData,
        frameworks: assessmentData.frameworks.filter(i => i !== item)
      });
    } else {
      setAssessmentData({
        ...assessmentData,
        frameworks: [...assessmentData.frameworks, item]
      });
    }
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setAssessmentData({
        frameworks: [],
        timeline: '',
        currentStatus: '',
        fullName: '',
        workEmail: '',
        companyName: '',
        message: ''
      });
    }, 300);
  };

  return (
    <div 
      id="compliance-stitch-page" 
      className="radial-bg min-h-screen relative antialiased selection:bg-diamond-blue selection:text-white overflow-x-hidden w-full"
      style={{
        backgroundColor: '#050B1A',
        color: '#E1E8F8',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Background Ambient Glow Accents */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[15%] left-[20%] w-[700px] h-[700px] rounded-full bg-[#017ba0]/15 blur-[150px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[650px] h-[650px] rounded-full bg-[#468fff]/15 blur-[160px]"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[600px] h-[600px] rounded-full bg-[#7ad1fa]/10 blur-[140px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(172,199,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(172,199,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Main Container */}
      <div className="w-full pt-4 sm:pt-6 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-12 lg:gap-16 pb-6 sm:pb-8">

        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="relative w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 flex flex-col gap-6 z-10">

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[60px] lg:leading-[68px] font-bold text-surface-text tracking-tight">
                Be audit-ready{' '}
                <span className="bg-gradient-to-r from-[#acc7ff] via-[#7ad1fa] to-[#bfe8ff] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(122,209,250,0.4)]">
                  before the auditor arrives.
                </span>
              </h1>

              <p className="text-muted-text text-base sm:text-lg max-w-xl leading-relaxed">
                We turn GDPR, SOC 2, ISO 27001 and other regulatory requirements into controls your team can run every day, with the documentation to prove it.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 rounded-full font-display text-sm font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] shadow-[0_0_24px_rgba(122,209,250,0.4)] hover:shadow-[0_0_36px_rgba(122,209,250,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#050B1A]" />
                  <span>Book a Gap Assessment</span>
                </button>
                <a 
                  href="#coverage" 
                  className="px-8 py-4 rounded-full font-display text-sm font-bold text-surface-text frosted-glass hover:bg-[#162A58]/60 hover:text-ice-cyan border border-blue-500/25 hover:border-ice-cyan/60 hover:shadow-[0_0_20px_rgba(122,209,250,0.25)] transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span>See What We Cover</span>
                  <ArrowRight className="w-4 h-4 text-ice-cyan" />
                </a>
              </div>
            </div>

            {/* Right Column: Faceted 3D Crystal Shield Vector Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[480px] aspect-square rounded-3xl frosted-glass p-8 flex items-center justify-center shadow-[0_20px_50px_rgba(7,14,29,0.9),0_0_30px_rgba(70,143,255,0.22)] overflow-hidden border border-ice-cyan/25 group">
                
                {/* Ambient Radial Glowing Backplate */}
                <div className="absolute inset-0 bg-radial from-ice-cyan/20 via-diamond-blue/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-ice-cyan/25 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-diamond-blue/25 rounded-full blur-[60px] pointer-events-none"></div>
                
                {/* Layered Faceted 3D Crystal Shield SVG */}
                <svg className="w-full h-full relative z-10 drop-shadow-[0_10px_35px_rgba(122,209,250,0.45)]" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Concentric Coordinate Rings */}
                  <circle cx="200" cy="200" r="168" stroke="#7ad1fa" strokeDasharray="3 7" strokeOpacity="0.22" strokeWidth="1.2"></circle>
                  <circle cx="200" cy="200" r="132" stroke="#468fff" strokeDasharray="6 6" strokeOpacity="0.25" strokeWidth="1"></circle>
                  <circle cx="200" cy="200" r="92" stroke="#acc7ff" strokeOpacity="0.18" strokeWidth="0.8"></circle>
                  
                  {/* Outer Refraction Halo */}
                  <path d="M200 36 L318 92 V202 C318 276 200 350 200 350 C200 350 82 276 82 202 V92 L200 36 Z" fill="#070e1d" fillOpacity="0.75" stroke="#7ad1fa" strokeOpacity="0.35" strokeWidth="1.5"></path>
                  
                  {/* Faceted Outer Crystal Wings */}
                  <path d="M200 40 L310 95 L260 170 L200 130 Z" fill="url(#facet-grad-topright)" fillOpacity="0.9"></path>
                  <path d="M200 40 L90 95 L140 170 L200 130 Z" fill="url(#facet-grad-topleft)" fillOpacity="0.85"></path>
                  <path d="M310 95 V200 L250 255 L260 170 Z" fill="url(#facet-grad-midright)" fillOpacity="0.8"></path>
                  <path d="M90 95 V200 L150 255 L140 170 Z" fill="url(#facet-grad-midleft)" fillOpacity="0.85"></path>
                  <path d="M250 255 L200 340 L200 240 Z" fill="url(#facet-grad-botright)" fillOpacity="0.95"></path>
                  <path d="M150 255 L200 340 L200 240 Z" fill="url(#facet-grad-botleft)" fillOpacity="0.8"></path>
                  
                  {/* Central Refraction Core */}
                  <polygon fill="url(#core-grad-right)" fillOpacity="0.95" points="200,130 260,170 250,255 200,240"></polygon>
                  <polygon fill="url(#core-grad-left)" fillOpacity="0.88" points="200,130 140,170 150,255 200,240"></polygon>
                  
                  {/* Specular Highlights */}
                  <polygon fill="#ffffff" fillOpacity="0.14" points="200,130 230,150 200,185 170,150"></polygon>
                  
                  {/* Geometric Facet Wireframe Edges */}
                  <line stroke="#bfe8ff" strokeOpacity="0.85" strokeWidth="2" x1="200" x2="200" y1="40" y2="340"></line>
                  <line stroke="#7ad1fa" strokeOpacity="0.45" strokeWidth="1.5" x1="90" x2="310" y1="95" y2="95"></line>
                  <line stroke="#7ad1fa" strokeOpacity="0.6" strokeWidth="1.5" x1="140" x2="260" y1="170" y2="170"></line>
                  <line stroke="#7ad1fa" strokeOpacity="0.5" strokeWidth="1.5" x1="150" x2="250" y1="255" y2="255"></line>
                  <line stroke="#acc7ff" strokeOpacity="0.4" strokeWidth="1" x1="200" x2="260" y1="130" y2="170"></line>
                  <line stroke="#acc7ff" strokeOpacity="0.4" strokeWidth="1" x1="200" x2="140" y1="130" y2="170"></line>
                  <line stroke="#acc7ff" strokeOpacity="0.4" strokeWidth="1" x1="200" x2="250" y1="240" y2="255"></line>
                  <line stroke="#acc7ff" strokeOpacity="0.4" strokeWidth="1" x1="200" x2="150" y1="240" y2="255"></line>
                  
                  {/* Luminous Holographic Audit Pass Checkmark */}
                  <g className="animate-pulse" opacity="0.95">
                    <circle cx="200" cy="188" fill="#017ba0" fillOpacity="0.3" filter="url(#glow-filter)" r="32"></circle>
                    <polyline fill="none" points="180,189 194,203 222,173" stroke="#bfe8ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5"></polyline>
                    <polyline fill="none" opacity="0.75" points="180,189 194,203 222,173" stroke="#7ad1fa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7"></polyline>
                  </g>
                  
                  <defs>
                    <filter height="200%" id="glow-filter" width="200%" x="-50%" y="-50%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="6"></feGaussianBlur>
                    </filter>
                    <linearGradient gradientUnits="userSpaceOnUse" id="facet-grad-topright" x1="200" x2="310" y1="40" y2="170">
                      <stop stopColor="#468fff" stopOpacity="0.8"></stop>
                      <stop offset="1" stopColor="#0c1322" stopOpacity="0.95"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="facet-grad-topleft" x1="200" x2="90" y1="40" y2="170">
                      <stop stopColor="#7ad1fa" stopOpacity="0.9"></stop>
                      <stop offset="1" stopColor="#017ba0" stopOpacity="0.7"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="facet-grad-midright" x1="310" x2="250" y1="95" y2="255">
                      <stop stopColor="#017ba0" stopOpacity="0.75"></stop>
                      <stop offset="1" stopColor="#070e1d" stopOpacity="0.95"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="facet-grad-midleft" x1="90" x2="150" y1="95" y2="255">
                      <stop stopColor="#468fff" stopOpacity="0.85"></stop>
                      <stop offset="1" stopColor="#0c1322" stopOpacity="0.95"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="facet-grad-botright" x1="250" x2="200" y1="255" y2="340">
                      <stop stopColor="#468fff" stopOpacity="0.9"></stop>
                      <stop offset="1" stopColor="#070e1d" stopOpacity="0.9"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="facet-grad-botleft" x1="150" x2="200" y1="255" y2="340">
                      <stop stopColor="#7ad1fa" stopOpacity="0.8"></stop>
                      <stop offset="1" stopColor="#00285a" stopOpacity="0.9"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="core-grad-right" x1="200" x2="260" y1="130" y2="255">
                      <stop stopColor="#7ad1fa"></stop>
                      <stop offset="1" stopColor="#00285a"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="core-grad-left" x1="200" x2="140" y1="130" y2="255">
                      <stop stopColor="#acc7ff"></stop>
                      <stop offset="1" stopColor="#017ba0"></stop>
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Micro Telemetry Chips */}
                <div className="absolute top-5 right-5 px-3 py-1 rounded-full frosted-glass border border-ice-cyan/40 shadow-[0_0_12px_rgba(122,209,250,0.2)]">
                  <span className="font-mono text-[11px] text-ice-cyan font-bold">CTRL-PASS: 100%</span>
                </div>
                <div className="absolute bottom-5 left-5 px-3 py-1 rounded-full frosted-glass border border-diamond-blue/30 shadow-[0_0_12px_rgba(70,143,255,0.15)]">
                  <span className="font-mono text-[11px] text-muted-text font-medium">EVIDENCE: SYNCHRONIZED</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. FRAMEWORKS BAR
            ========================================================================= */}
        <section className="w-full">
          <div className="w-full rounded-2xl frosted-glass p-5 lg:px-8 lg:py-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_32px_rgba(7,14,29,0.6)] border border-blue-500/20">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-lg bg-blue-950/60 flex items-center justify-center border border-ice-cyan/30 text-ice-cyan">
                <ShieldCheck className="w-5 h-5 text-ice-cyan" />
              </div>
              <span className="font-display text-base font-bold tracking-wider text-surface-text uppercase">
                Frameworks
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 w-full">
              {['GDPR', 'CCPA', 'HIPAA', 'SOC 2', 'ISO 27001', 'GxP', '21 CFR Part 11'].map((fw) => (
                <span 
                  key={fw}
                  className="px-4 py-2 rounded-xl bg-[#101E40]/70 border border-blue-500/20 text-surface-text font-mono text-[13px] hover:border-ice-cyan hover:text-ice-cyan hover:shadow-[0_0_16px_rgba(122,209,250,0.25)] transition-all cursor-default"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. INTRO SECTION (Two Columns)
            ========================================================================= */}
        <section className="w-full py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] text-surface-text font-semibold tracking-tight">
                Regulation doesn't wait until you're ready.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <p className="text-muted-text text-base sm:text-lg leading-relaxed">
                Growth-stage companies face the same audits and customer security questionnaires as much larger firms, often with a compliance team of one or two. We turn legal and industry requirements into clear policies, working controls and evidence, so compliance becomes part of how you operate instead of a scramble before each review.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="w-2 h-2 rounded-full bg-ice-cyan shadow-[0_0_8px_#7ad1fa]"></span>
                <span className="font-mono text-[12px] text-ice-cyan tracking-wider uppercase font-semibold">
                  CONTINUOUS REGULATORY SYNCHRONIZATION
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. WHAT WE COVER (3x2 Glass Grid)
            ========================================================================= */}
        <section className="w-full scroll-mt-24" id="coverage">
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ice-cyan shadow-[0_0_8px_#7ad1fa]"></span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-ice-cyan font-bold">
                CAPABILITIES MATRIX
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-surface-text font-semibold tracking-tight">
              What We Cover
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="group h-full rounded-2xl frosted-glass hover:bg-[#101E40] p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(7,14,29,0.5)] hover:shadow-[0_16px_40px_rgba(7,14,29,0.8),0_0_20px_rgba(122,209,250,0.2)] hover:-translate-y-1 border border-blue-500/20 hover:border-ice-cyan/50">
              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center border border-blue-500/30 group-hover:border-ice-cyan transition-colors group-hover:shadow-[0_0_16px_rgba(122,209,250,0.3)]">
                  <Radar className="w-6 h-6 text-ice-cyan" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors">
                    Regulatory Readiness
                  </h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    Gap assessments against GDPR, CCPA, HIPAA, SOC 2 and ISO 27001, with a prioritized list of fixes.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-blue-500/15 flex items-center justify-between">
                <span className="font-mono text-[11px] text-ice-cyan">TIER 1 ARCHITECTURE</span>
                <ArrowRight className="w-4 h-4 text-muted-text group-hover:text-ice-cyan group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group h-full rounded-2xl frosted-glass hover:bg-[#101E40] p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(7,14,29,0.5)] hover:shadow-[0_16px_40px_rgba(7,14,29,0.8),0_0_20px_rgba(122,209,250,0.2)] hover:-translate-y-1 border border-blue-500/20 hover:border-ice-cyan/50">
              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center border border-blue-500/30 group-hover:border-ice-cyan transition-colors group-hover:shadow-[0_0_16px_rgba(122,209,250,0.3)]">
                  <SlidersHorizontal className="w-6 h-6 text-ice-cyan" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors">
                    Governance, Risk and Compliance
                  </h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    One unified GRC platform to manage enterprise risks, policies and controls in one place.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-blue-500/15 flex items-center justify-between">
                <span className="font-mono text-[11px] text-ice-cyan">UNIFIED CONTROL HUB</span>
                <ArrowRight className="w-4 h-4 text-muted-text group-hover:text-ice-cyan group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group h-full rounded-2xl frosted-glass hover:bg-[#101E40] p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(7,14,29,0.5)] hover:shadow-[0_16px_40px_rgba(7,14,29,0.8),0_0_20px_rgba(122,209,250,0.2)] hover:-translate-y-1 border border-blue-500/20 hover:border-ice-cyan/50">
              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center border border-blue-500/30 group-hover:border-ice-cyan transition-colors group-hover:shadow-[0_0_16px_rgba(122,209,250,0.3)]">
                  <CheckCircle2 className="w-6 h-6 text-ice-cyan" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors">
                    Audit Support
                  </h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    We prepare evidence, coordinate directly with external auditors and help you respond to findings quickly.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-blue-500/15 flex items-center justify-between">
                <span className="font-mono text-[11px] text-ice-cyan">INSTITUTIONAL LIAISON</span>
                <ArrowRight className="w-4 h-4 text-muted-text group-hover:text-ice-cyan group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="group h-full rounded-2xl frosted-glass hover:bg-[#101E40] p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(7,14,29,0.5)] hover:shadow-[0_16px_40px_rgba(7,14,29,0.8),0_0_20px_rgba(122,209,250,0.2)] hover:-translate-y-1 border border-blue-500/20 hover:border-ice-cyan/50">
              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center border border-blue-500/30 group-hover:border-ice-cyan transition-colors group-hover:shadow-[0_0_16px_rgba(122,209,250,0.3)]">
                  <ScrollText className="w-6 h-6 text-ice-cyan" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors">
                    Policy Development
                  </h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    Security and data privacy policies your engineering and business teams can actually follow, written and rolled out.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-blue-500/15 flex items-center justify-between">
                <span className="font-mono text-[11px] text-ice-cyan">OPERATIONAL FRAMEWORK</span>
                <ArrowRight className="w-4 h-4 text-muted-text group-hover:text-ice-cyan group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* Card 5 */}
            <div className="group h-full rounded-2xl frosted-glass hover:bg-[#101E40] p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(7,14,29,0.5)] hover:shadow-[0_16px_40px_rgba(7,14,29,0.8),0_0_20px_rgba(122,209,250,0.2)] hover:-translate-y-1 border border-blue-500/20 hover:border-ice-cyan/50">
              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center border border-blue-500/30 group-hover:border-ice-cyan transition-colors group-hover:shadow-[0_0_16px_rgba(122,209,250,0.3)]">
                  <Scale className="w-6 h-6 text-ice-cyan" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors">
                    Data Privacy Programs
                  </h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    End-to-end data mapping, consent management, and automated subject access request (DSAR) workflows.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-blue-500/15 flex items-center justify-between">
                <span className="font-mono text-[11px] text-ice-cyan">SOVEREIGNTY WORKFLOWS</span>
                <ArrowRight className="w-4 h-4 text-muted-text group-hover:text-ice-cyan group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* Card 6 */}
            <div className="group h-full rounded-2xl frosted-glass hover:bg-[#101E40] p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_8px_30px_rgba(7,14,29,0.5)] hover:shadow-[0_16px_40px_rgba(7,14,29,0.8),0_0_20px_rgba(122,209,250,0.2)] hover:-translate-y-1 border border-blue-500/20 hover:border-ice-cyan/50">
              <div className="flex flex-col gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center border border-blue-500/30 group-hover:border-ice-cyan transition-colors group-hover:shadow-[0_0_16px_rgba(122,209,250,0.3)]">
                  <Network className="w-6 h-6 text-ice-cyan" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors">
                    Third-Party Risk Management
                  </h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    Assess, continuously monitor, and govern vendors so your supply chain doesn't become your audit finding.
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-blue-500/15 flex items-center justify-between">
                <span className="font-mono text-[11px] text-ice-cyan">ECOSYSTEM SURVEILLANCE</span>
                <ArrowRight className="w-4 h-4 text-muted-text group-hover:text-ice-cyan group-hover:translate-x-1 transition-all" />
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. BUILT FOR LIFE SCIENCES
            ========================================================================= */}
        <section className="w-full">
          <div className="w-full rounded-3xl frosted-glass p-8 lg:p-12 shadow-[0_16px_40px_-8px_rgba(7,14,29,0.9),0_0_24px_rgba(70,143,255,0.15)] relative overflow-hidden border border-blue-500/25">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-ice-cyan/15 blur-[100px] pointer-events-none"></div>
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-ice-cyan shadow-[0_0_10px_#7ad1fa]"></span>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-text">
                  Built for life sciences
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {['Data integrity', 'Electronic records', 'System validation', 'Inspection readiness'].map((item) => (
                  <span 
                    key={item}
                    className="px-5 py-2.5 rounded-xl frosted-glass border border-ice-cyan/30 font-display text-sm font-semibold text-ice-cyan shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-muted-text text-base sm:text-lg max-w-3xl pt-2 leading-relaxed">
                Regulated product companies need systems that can be validated and records that hold up to inspection. We plan for that from the start.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. TOOLS SECTION
            ========================================================================= */}
        <section className="w-full">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-text">
                Tools
              </h2>
              <span className="font-mono text-[12px] text-muted-text tracking-wider font-semibold">
                GRC &amp; AUDIT INFRASTRUCTURE
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {['OneTrust', 'ServiceNow GRC', 'RSA Archer', 'AuditBoard', 'Vanta', 'Drata'].map((tool) => (
                <div 
                  key={tool}
                  className="px-6 py-5 rounded-xl frosted-glass text-center font-display text-base font-semibold text-surface-text hover:text-ice-cyan hover:border-ice-cyan/50 hover:shadow-[0_0_20px_rgba(122,209,250,0.2)] transition-all cursor-default border border-blue-500/20"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. HOW WE WORK (4-Step Methodology)
            ========================================================================= */}
        <section className="w-full">
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ice-cyan shadow-[0_0_8px_#7ad1fa]"></span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-ice-cyan font-bold">
                METHODOLOGY
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-surface-text font-semibold tracking-tight">
              How We Work
            </h2>
          </div>

          <HowItWorks
            layout="horizontal"
            showBackgroundLines={false}
            features={[
              {
                title: "Assess gaps",
                description: "We compare your current state against the framework and rank the gaps by risk.",
                colorTheme: "cyan",
              },
              {
                title: "Build controls",
                description: "We write policies, set up controls and connect them to your systems.",
                colorTheme: "blue",
              },
              {
                title: "Prepare for audit",
                description: "We collect evidence, run a readiness review and coach your team.",
                colorTheme: "purple",
              },
              {
                title: "Maintain and monitor",
                description: "We keep controls current as your business and regulations change.",
                colorTheme: "cyan",
              },
            ]}
          />
        </section>

        {/* =========================================================================
            8. PROOF SLOT
            ========================================================================= */}
        <section className="w-full">
          <div className="w-full rounded-3xl frosted-glass p-8 lg:p-12 shadow-[0_20px_50px_rgba(7,14,29,0.9),0_0_24px_rgba(122,209,250,0.15)] flex flex-col gap-8 border border-blue-500/25">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-blue-500/15 pb-6 gap-4">
              <h3 className="font-display text-2xl sm:text-3xl text-surface-text font-semibold">
                Institutional Audit Readiness &amp; Control Velocity
              </h3>
              <span className="font-mono text-[11px] text-ice-cyan uppercase px-3.5 py-1.5 rounded-full frosted-glass border border-ice-cyan/30 font-semibold tracking-wider w-fit">
                VERIFIED ENGAGEMENT
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2 p-7 rounded-2xl bg-[#101E40]/60 border border-blue-500/20 shadow-sm">
                <div className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-diamond-blue to-ice-cyan bg-clip-text text-transparent">
                  40+
                </div>
                <div className="text-surface-text text-base font-medium">
                  Audits supported &amp; passed
                </div>
              </div>
              <div className="flex flex-col gap-2 p-7 rounded-2xl bg-[#101E40]/60 border border-blue-500/20 shadow-sm">
                <div className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-diamond-blue to-ice-cyan bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-surface-text text-base font-medium">
                  First-pass audit success
                </div>
              </div>
              <div className="flex flex-col gap-2 p-7 rounded-2xl bg-[#101E40]/60 border border-blue-500/20 shadow-sm">
                <div className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-diamond-blue to-ice-cyan bg-clip-text text-transparent">
                  8 wks
                </div>
                <div className="text-surface-text text-base font-medium">
                  Average time to full audit readiness
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. RELATED SERVICES (3 Cards: AI & ML, ERP, Accounting & Taxation)
            ========================================================================= */}
        <section className="w-full">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ice-cyan shadow-[0_0_8px_#7ad1fa]"></span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-ice-cyan font-bold">
                CROSS-FUNCTIONAL ALIGNMENT
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-surface-text font-semibold tracking-tight">
              Related Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Related 1 */}
            <div className="rounded-2xl frosted-glass hover:bg-[#101E40] p-8 flex flex-col justify-between transition-all group shadow-sm hover:shadow-[0_16px_40px_rgba(7,14,29,0.8),0_0_20px_rgba(122,209,250,0.15)] hover:-translate-y-1 border border-blue-500/20 hover:border-ice-cyan/40">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center border border-blue-500/30 text-ice-cyan group-hover:border-ice-cyan transition-colors group-hover:shadow-[0_0_16px_rgba(122,209,250,0.3)]">
                  <Brain className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors">
                  AI and ML
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Keep autonomous AI models governed, auditable and explainable across regulations.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-blue-500/15">
                <Link 
                  href="/aiml"
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ice-cyan hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Related 2 */}
            <div className="rounded-2xl frosted-glass hover:bg-[#101E40] p-8 flex flex-col justify-between transition-all group shadow-sm hover:shadow-[0_16px_40px_rgba(7,14,29,0.8),0_0_20px_rgba(122,209,250,0.15)] hover:-translate-y-1 border border-blue-500/20 hover:border-ice-cyan/40">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center border border-blue-500/30 text-ice-cyan group-hover:border-ice-cyan transition-colors group-hover:shadow-[0_0_16px_rgba(122,209,250,0.3)]">
                  <Database className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors">
                  ERP
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Embed internal audit and financial controls into your NetSuite, SAP or Infor ERP.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-blue-500/15">
                <Link 
                  href="/erp"
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ice-cyan hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Related 3 */}
            <div className="rounded-2xl frosted-glass hover:bg-[#101E40] p-8 flex flex-col justify-between transition-all group shadow-sm hover:shadow-[0_16px_40px_rgba(7,14,29,0.8),0_0_20px_rgba(122,209,250,0.15)] hover:-translate-y-1 border border-blue-500/20 hover:border-ice-cyan/40">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center border border-blue-500/30 text-ice-cyan group-hover:border-ice-cyan transition-colors group-hover:shadow-[0_0_16px_rgba(122,209,250,0.3)]">
                  <Calculator className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors">
                  Accounting and Taxation
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Align GAAP/IFRS fiscal reporting and tax readiness with operational compliance controls.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-blue-500/15">
                <Link 
                  href="/accountingtax"
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ice-cyan hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            10. FINAL CTA
            ========================================================================= */}
        <section className="w-full" id="contact">
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
                Audit coming up? Find the gaps first.
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed font-light">
                Get a dedicated gap assessment and roadmap tailored to your specific tech stack, regulatory obligations, and audit timeline.
              </p>
            </div>

            <div className="shrink-0 z-10">
              <MetallicButton label="Book a Gap Assessment" onClick={() => setIsModalOpen(true)} />
            </div>
          </div>

          <div className="text-center pt-5">
            <p className="font-mono text-xs text-muted-text/70">
              Advisory services. Not legal advice.
            </p>
          </div>
        </section>

      </div>

      {/* =========================================================================
          INTERACTIVE GAP ASSESSMENT MODAL
          ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050B1A]/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-2xl rounded-3xl frosted-glass border border-ice-cyan/40 p-6 sm:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(122,209,250,0.25)] text-surface-text overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Ambient Corner Light */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-ice-cyan/20 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Modal Close Button */}
            <button 
              onClick={resetModal}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-blue-950/60 text-muted-text hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <form onSubmit={handleModalSubmit} className="flex flex-col gap-6">
                
                {/* Header */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-ice-cyan font-mono text-[11px] mb-3 border border-ice-cyan/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>EXECUTIVE AUDIT READINESS SCOPING</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-surface-text">
                    Book a Gap Assessment
                  </h3>
                  <p className="text-muted-text text-sm mt-1">
                    Step {step} of 2 &bull; {step === 1 ? 'Frameworks & Audit Context' : 'Your Contact Details'}
                  </p>
                </div>

                {step === 1 ? (
                  <div className="flex flex-col gap-5">
                    {/* Target Frameworks Multi-Select */}
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-muted-text mb-2.5">
                        Select Target Frameworks (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {[
                          'SOC 2 Type II',
                          'ISO 27001',
                          'GDPR & CCPA',
                          'HIPAA / HITECH',
                          'GxP / 21 CFR Part 11',
                          'Vendor Questionnaires'
                        ].map((fw) => {
                          const active = assessmentData.frameworks.includes(fw);
                          return (
                            <button
                              type="button"
                              key={fw}
                              onClick={() => toggleFramework(fw)}
                              className={`px-3 py-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                                active 
                                  ? 'bg-ice-cyan/20 border-ice-cyan text-white shadow-[0_0_12px_rgba(122,209,250,0.3)]'
                                  : 'bg-blue-950/40 border-blue-500/20 text-muted-text hover:border-ice-cyan/40 hover:text-surface-text'
                              }`}
                            >
                              {fw}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Timeline Radio Selection */}
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-muted-text mb-2.5">
                        Audit Timeline / Urgency
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {[
                          'Under 30 days',
                          '1-3 months',
                          '3-6 months',
                          'Proactive'
                        ].map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setAssessmentData({ ...assessmentData, timeline: t })}
                            className={`px-3 py-2 rounded-xl border text-xs font-semibold transition-all ${
                              assessmentData.timeline === t
                                ? 'bg-ice-cyan/20 border-ice-cyan text-white'
                                : 'bg-blue-950/40 border-blue-500/20 text-muted-text hover:border-ice-cyan/40'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Current Compliance Status */}
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-muted-text mb-2.5">
                        Current Preparedness
                      </label>
                      <select 
                        value={assessmentData.currentStatus}
                        onChange={(e) => setAssessmentData({ ...assessmentData, currentStatus: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-blue-950/50 border border-blue-500/25 text-surface-text text-sm focus:outline-none focus:border-ice-cyan"
                      >
                        <option value="" className="bg-[#050B1A] text-muted-text">Select current status...</option>
                        <option value="starting" className="bg-[#050B1A]">Starting from scratch (no formalized controls)</option>
                        <option value="in_progress" className="bg-[#050B1A]">Policies exist, but controls lack evidence automation</option>
                        <option value="imminent_audit" className="bg-[#050B1A]">Auditor engaged; audit starts soon</option>
                        <option value="questionnaire" className="bg-[#050B1A]">Need to answer customer enterprise security reviews</option>
                      </select>
                    </div>

                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={assessmentData.frameworks.length === 0}
                        className="w-full py-3.5 rounded-full font-display text-sm font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] hover:shadow-[0_0_24px_rgba(122,209,250,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        <span>Continue to Contact Info</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-muted-text mb-1.5">
                          Full Name *
                        </label>
                        <input 
                          type="text"
                          required
                          value={assessmentData.fullName}
                          onChange={(e) => setAssessmentData({ ...assessmentData, fullName: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-2.5 rounded-xl bg-blue-950/50 border border-blue-500/25 text-surface-text text-sm focus:outline-none focus:border-ice-cyan placeholder:text-muted-text/50"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-muted-text mb-1.5">
                          Work Email *
                        </label>
                        <input 
                          type="email"
                          required
                          value={assessmentData.workEmail}
                          onChange={(e) => setAssessmentData({ ...assessmentData, workEmail: e.target.value })}
                          placeholder="sjenkins@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-blue-950/50 border border-blue-500/25 text-surface-text text-sm focus:outline-none focus:border-ice-cyan placeholder:text-muted-text/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-muted-text mb-1.5">
                        Company Name *
                      </label>
                      <input 
                        type="text"
                        required
                        value={assessmentData.companyName}
                        onChange={(e) => setAssessmentData({ ...assessmentData, companyName: e.target.value })}
                        placeholder="e.g. Apex Biotech Corp"
                        className="w-full px-4 py-2.5 rounded-xl bg-blue-950/50 border border-blue-500/25 text-surface-text text-sm focus:outline-none focus:border-ice-cyan placeholder:text-muted-text/50"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-muted-text mb-1.5">
                        Additional Context / Specific Requirements
                      </label>
                      <textarea 
                        rows={3}
                        value={assessmentData.message}
                        onChange={(e) => setAssessmentData({ ...assessmentData, message: e.target.value })}
                        placeholder="Briefly describe your environment or any immediate deadlines..."
                        className="w-full px-4 py-2.5 rounded-xl bg-blue-950/50 border border-blue-500/25 text-surface-text text-sm focus:outline-none focus:border-ice-cyan placeholder:text-muted-text/50 resize-none"
                      />
                    </div>

                    <div className="flex items-center gap-3 pt-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="py-3 px-5 rounded-full frosted-glass text-xs font-semibold text-surface-text hover:bg-blue-950/60 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3.5 rounded-full font-display text-sm font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] hover:shadow-[0_0_24px_rgba(122,209,250,0.6)] transition-all flex items-center justify-center gap-2"
                      >
                        <Sparkles className="w-4 h-4 text-[#050B1A]" />
                        <span>Submit Assessment Request</span>
                      </button>
                    </div>
                  </div>
                )}

              </form>
            ) : (
              <div className="py-8 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-ice-cyan/20 border border-ice-cyan flex items-center justify-center text-ice-cyan shadow-[0_0_24px_rgba(122,209,250,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-surface-text">
                  Assessment Request Received
                </h3>
                <p className="text-muted-text text-sm max-w-md">
                  Thank you, <span className="text-ice-cyan font-semibold">{assessmentData.fullName}</span>. Our regulatory audit specialists will review your frameworks ({assessmentData.frameworks.join(', ')}) and contact you within 1 business day.
                </p>
                <button
                  onClick={resetModal}
                  className="mt-4 px-8 py-3 rounded-full font-display text-sm font-semibold text-[#050B1A] bg-ice-cyan hover:bg-white transition-colors"
                >
                  Done
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
