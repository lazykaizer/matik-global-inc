'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Compass, 
  Database, 
  CheckCircle2, 
  Brain, 
  Cpu, 
  ShieldCheck, 
  Code2, 
  Cloud, 
  Scale, 
  Calendar, 
  Sparkles,
  Layers,
  Network,
  X
} from 'lucide-react';
import InkOrbitHero from './InkOrbitHero';
import { GlassFold } from '@/components/ui/glass-fold';
import { MetallicButton } from '@/components/ui/metallic-button';
import HowItWorks from '@/components/ui/how-it-works';
import ToolDockDemo from '@/components/ui/techstack-demo';
import { ToolDock, ToolDockTile, type ToolDockItem } from '@/components/ui/techstack';

function AzureIcon() {
  return (
    <svg viewBox="0 0 96 96" className="w-[62%] h-[62%]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="az-dark-aiml" x1="-1032.17" x2="-1059.21" y1="145.31" y2="65.43" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#114a8b"/>
          <stop offset="1" stopColor="#0669bc"/>
        </linearGradient>
        <linearGradient id="az-light-aiml" x1="-1027.16" x2="-997.48" y1="147.64" y2="68.56" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3ccbf4"/>
          <stop offset="1" stopColor="#2892df"/>
        </linearGradient>
      </defs>
      <path fill="url(#az-dark-aiml)" d="M33.34 6.54h26.04l-27.03 80.1a4.15 4.15 0 0 1-3.94 2.81H8.15a4.14 4.14 0 0 1-3.93-5.47L29.4 9.38a4.15 4.15 0 0 1 3.94-2.83z"/>
      <path fill="#0078d4" d="M71.17 60.26H29.88a1.91 1.91 0 0 0-1.3 3.31l26.53 24.76a4.17 4.17 0 0 0 2.85 1.13h23.38z"/>
      <path fill="url(#az-light-aiml)" d="M66.6 9.36a4.14 4.14 0 0 0-3.93-2.82H33.65a4.15 4.15 0 0 1 3.93 2.82l25.18 74.62a4.15 4.15 0 0 1-3.94 5.54h23.19a4.15 4.15 0 0 0 3.93-5.48z"/>
    </svg>
  );
}

function AwsIcon() {
  return (
    <svg viewBox="0 0 640 512" className="w-[72%] h-[72%]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFFFFF" d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42z"/>
      <path fill="#FF9900" d="M578.57 375.14c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"/>
    </svg>
  );
}

function GoogleCloudIcon() {
  return (
    <svg preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256" className="w-[66%] h-[66%]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"/>
      <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"/>
      <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"/>
      <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"/>
    </svg>
  );
}

function MultiCloudCertifiedIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-[64%] h-[64%]" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mcc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7FD6FF" />
          <stop offset="100%" stopColor="#3D8BFF" />
        </linearGradient>
      </defs>
      <path d="M32 6L14 14v16c0 13.2 7.7 25.5 18 29 10.3-3.5 18-15.8 18-29V14L32 6z" stroke="url(#mcc-grad)" strokeWidth="3" fill="#0B1A3A" fillOpacity="0.85"/>
      <path d="M32 16l3.5 7.1 7.8 1.1-5.6 5.5 1.3 7.8-7-3.7-7 3.7 1.3-7.8-5.6-5.5 7.8-1.1L32 16z" fill="url(#mcc-grad)"/>
      <path d="M26 31l4 4 8-8" stroke="#050B1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const cloudDockItems: ToolDockItem[] = [
  {
    label: "Microsoft Azure",
    icon: (
      <ToolDockTile className="bg-[#002447] border border-[#0078D4]/50 shadow-[0_4px_20px_rgba(0,120,212,0.4)]">
        <AzureIcon />
      </ToolDockTile>
    ),
  },
  {
    label: "Amazon Web Services (AWS)",
    icon: (
      <ToolDockTile className="bg-[#141C2B] border border-[#FF9900]/50 shadow-[0_4px_20px_rgba(255,153,0,0.35)]">
        <AwsIcon />
      </ToolDockTile>
    ),
  },
  {
    label: "Google Cloud Platform",
    icon: (
      <ToolDockTile className="bg-[#13223B] border border-[#4285F4]/50 shadow-[0_4px_20px_rgba(66,133,244,0.4)]">
        <GoogleCloudIcon />
      </ToolDockTile>
    ),
  },
  {
    label: "Multi-Cloud Certified Architects",
    icon: (
      <ToolDockTile className="bg-[#081838] border border-cyan-400/50 shadow-[0_4px_20px_rgba(127,214,255,0.4)]">
        <MultiCloudCertifiedIcon />
      </ToolDockTile>
    ),
  },
];

export function AIMLContent() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  // Assessment Form State
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState({
    industry: '',
    aiMaturity: '',
    primaryObjective: '',
    timeline: '',
    fullName: '',
    workEmail: '',
    companyName: ''
  });
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

  return (
    <div 
      id="aiml-stitch-page" 
      className="radial-bg min-h-screen relative antialiased selection:bg-diamond-blue selection:text-white overflow-hidden w-full"
      style={{
        backgroundColor: '#050B1A',
        color: '#E1E8F8',
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Ambient Backdrop Glow Spots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-diamond-blue/15 via-ice-cyan/5 to-transparent blur-[140px]"></div>
        <div className="absolute top-[1300px] -left-48 w-[600px] h-[600px] bg-diamond-blue/10 blur-[160px]"></div>
        <div className="absolute top-[2600px] -right-48 w-[650px] h-[650px] bg-ice-cyan/10 blur-[180px]"></div>
      </div>

      {/* =========================================================================
          MAIN CONTAINER (Sits cleanly inside site layout)
          ========================================================================= */}
      <div className="w-full pt-0 sm:pt-1 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-14 lg:gap-18 pb-6 sm:pb-8">
        
        {/* HERO WRAPPER */}
        <div className="w-full flex flex-col gap-3">

          {/* 1. HERO SECTION (Ink Orbit Generative 3D Sculpture + Animated Cycling Serif Headline) */}
          <InkOrbitHero
            theme="dark"
            titleTop="AI that makes it past the"
            titleAccent={['pilot.', 'prototype.', 'drawing board.', 'sandbox.']}
            description="We help life sciences and other regulated companies take AI from idea to production, with clean data, validated models and governance built in."
            primaryCta="Book Your Free Assessment"
            onPrimary={() => setIsAssessmentOpen(true)}
            secondaryCta="Watch AI Workflow"
            proof={{ before: 'Trusted by', value: 'Life Sciences & Regulated', after: 'enterprises' }}
            sculptureLabel="MATIC · AI 3D"
            sculptureHint="Click to change shape · Drag to rotate"
          />
        </div>

        {/* =========================================================================
            2. INTRO SECTION (Two-Column with Luminous Glowing Divider)
            ========================================================================= */}
        <section className="w-full pt-4">
          <div className="frosted-glass rounded-3xl p-8 lg:p-14 shadow-frosted relative overflow-hidden border border-ice-cyan/20">
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-diamond-blue/10 blur-[100px] pointer-events-none"></div>
            
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Large Statement */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-[#0B1736]/70 backdrop-blur-md shadow-[0_0_20px_rgba(61,139,255,0.12)] w-fit mb-4">
                  <Brain className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs uppercase tracking-[0.16em] text-cyan-300 font-space font-semibold">
                    Strategic Reality
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] lg:leading-[48px] font-bold text-surface-text">
                  Most AI projects stall between the demo and production.
                </h2>
              </div>

              {/* Glowing vertical divider */}
              <div className="hidden lg:flex lg:col-span-1 justify-center">
                <div className="w-[1px] h-40 bg-gradient-to-b from-transparent via-ice-cyan/50 to-transparent"></div>
              </div>

              {/* Right Column: Paragraph verbatim */}
              <div className="lg:col-span-6">
                <p className="text-surface-text/90 text-lg sm:text-[19px] leading-relaxed font-light">
                  Our AI and ML team brings data scientists, ML engineers and cloud architects together to build AI that runs in production, on data you can trust and with models you can explain. Whether this is your first use case or you are scaling an existing program, we start from the business problem, not the tool.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. WHAT WE DO (3x2 Glass Bento Grid)
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8 scroll-mt-28" id="what-we-do">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-[#0B1736]/70 backdrop-blur-md shadow-[0_0_20px_rgba(61,139,255,0.12)] w-fit mb-1">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs uppercase tracking-[0.16em] text-cyan-300 font-space font-semibold">
                  Core Capabilities
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">What We Do</h2>
            </div>
            <span className="font-mono text-xs text-muted-text hidden md:block">ENTERPRISE DELIVERY SPECIFICATIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan group-hover:scale-105 transition-transform">
                  <Compass className="w-5 h-5 text-ice-cyan" />
                </div>
                <h3 className="font-display text-[20px] font-semibold text-surface-text">AI Strategy and Readiness</h3>
                <p className="text-muted-text text-[14px] leading-relaxed">
                  Find where AI will pay off first. We assess your use cases, data and platform, then give you a prioritized roadmap.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-glass-border/40 font-mono text-[11px] text-ice-cyan/80">
                Phase 01 · Diagnostic Roadmap
              </div>
            </div>

            {/* Card 2 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-diamond-blue group-hover:scale-105 transition-transform">
                  <Database className="w-5 h-5 text-diamond-blue" />
                </div>
                <h3 className="font-display text-[20px] font-semibold text-surface-text">Data Engineering</h3>
                <p className="text-muted-text text-[14px] leading-relaxed">
                  Build the governed, high-quality data pipelines every production AI system depends on.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-glass-border/40 font-mono text-[11px] text-diamond-blue/90">
                Phase 02 · Enterprise Data Fabric
              </div>
            </div>

            {/* Card 3 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="w-5 h-5 text-ice-cyan" />
                </div>
                <h3 className="font-display text-[20px] font-semibold text-surface-text">Model Development and Validation</h3>
                <p className="text-muted-text text-[14px] leading-relaxed">
                  Our data scientists build, train and validate models for real business problems, documented so they can be reviewed.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-glass-border/40 font-mono text-[11px] text-ice-cyan/80">
                Phase 03 · Mathematical Rigor
              </div>
            </div>

            {/* Card 4 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-diamond-blue group-hover:scale-105 transition-transform">
                  <Brain className="w-5 h-5 text-diamond-blue" />
                </div>
                <h3 className="font-display text-[20px] font-semibold text-surface-text">Generative AI and LLM Engineering</h3>
                <p className="text-muted-text text-[14px] leading-relaxed">
                  Custom LLM applications grounded in your own data, with guardrails for accuracy and privacy.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-glass-border/40 font-mono text-[11px] text-diamond-blue/90">
                Phase 04 · Sovereign RAG
              </div>
            </div>

            {/* Card 5 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan group-hover:scale-105 transition-transform">
                  <Cpu className="w-5 h-5 text-ice-cyan" />
                </div>
                <h3 className="font-display text-[20px] font-semibold text-surface-text">MLOps and Production Engineering</h3>
                <p className="text-muted-text text-[14px] leading-relaxed">
                  Deploy, scale and retrain models reliably, so AI doesn't stall after the pilot.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-glass-border/40 font-mono text-[11px] text-ice-cyan/80">
                Phase 05 · Automated CI/CD
              </div>
            </div>

            {/* Card 6 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-diamond-blue group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5 text-diamond-blue" />
                </div>
                <h3 className="font-display text-[20px] font-semibold text-surface-text">AI Governance and Responsible AI</h3>
                <p className="text-muted-text text-[14px] leading-relaxed">
                  Monitoring, transparency and policy controls that keep your AI explainable, fair and audit-ready.
                </p>
              </div>
              <div className="pt-5 mt-4 border-t border-glass-border/40 font-mono text-[11px] text-diamond-blue/90">
                Phase 06 · Audit Readiness
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            4. CLOUD-AGNOSTIC BAND (Interactive Cloud Platform Dock)
            ========================================================================= */}
        <section className="w-full rounded-2xl border border-ice-cyan/25 bg-[#0B1630]/75 backdrop-blur-xl py-6 sm:py-7 px-5 lg:px-10 relative overflow-hidden shadow-frosted">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-ice-cyan/40 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-diamond-blue/30 to-transparent"></div>
          <div className="absolute -top-12 left-1/4 w-80 h-24 bg-ice-cyan/10 blur-3xl pointer-events-none"></div>

          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-surface-text mb-1">
              Cloud-agnostic by design
            </h2>

            {/* Interactive macOS-Style Cloud Platform Dock */}
            <div className="w-full flex justify-center -mt-7 -mb-2">
              <ToolDock
                items={cloudDockItems}
                size={62}
                overlap={0.06}
                magnification={0.32}
                tilt={true}
                label="Cloud Platforms"
              />
            </div>

            {/* Verbatim line on one single line */}
            <p className="text-muted-text text-sm sm:text-base leading-normal max-w-none font-light whitespace-normal sm:whitespace-nowrap mt-3">
              We work across all three major platforms and recommend the one, or the mix, that fits each use case.
            </p>
          </div>
        </section>

        {/* =========================================================================
            5. TECHNOLOGIES / TECH STACK (Interactive Tool Dock)
            ========================================================================= */}
        <section className="w-full frosted-glass rounded-3xl p-6 sm:p-10 border border-ice-cyan/20 overflow-hidden relative shadow-frosted">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-diamond-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
          <ToolDockDemo 
            title="Tech Stack & Infrastructure" 
            subtitle="SUPPORTED INFRASTRUCTURE & FRAMEWORKS" 
          />
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6 mt-4 border-t border-glass-border/30">
            {[
              'TensorFlow',
              'PyTorch',
              'Scikit-learn',
              'OpenAI',
              'LangChain',
              'Hugging Face',
              'Databricks',
              'Snowflake',
              'MLflow',
              'Apache Spark'
            ].map((tech) => (
              <span 
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-[#0B1630]/70 border border-glass-border/60 hover:border-ice-cyan/40 text-surface-text/90 font-mono text-xs tracking-wide transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* =========================================================================
            6. HOW WE WORK (Horizontal 4-Step Process with Progress Bars)
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-[#0B1736]/70 backdrop-blur-md shadow-[0_0_20px_rgba(61,139,255,0.12)] w-fit mb-1">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs uppercase tracking-[0.16em] text-cyan-300 font-space font-semibold">
                Operational Methodology
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">How We Work</h2>
          </div>

          <HowItWorks
            layout="horizontal"
            showBackgroundLines={false}
            features={[
              {
                title: "Prioritize",
                description: "We rank use cases by business value and feasibility.",
                colorTheme: "cyan",
              },
              {
                title: "Prepare",
                description: "We clean, connect and govern the data the models need.",
                colorTheme: "blue",
              },
              {
                title: "Build and validate",
                description: "We develop models and test them against your acceptance criteria.",
                colorTheme: "purple",
              },
              {
                title: "Deploy and monitor",
                description: "We release to production and track performance, drift and risk.",
                colorTheme: "cyan",
              },
            ]}
          />
        </section>

        {/* =========================================================================
            7. RELATED SERVICES (3 Frosted Glass Cards without "Learn more →")
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-[#0B1736]/70 backdrop-blur-md shadow-[0_0_20px_rgba(61,139,255,0.12)] w-fit mb-1">
              <Network className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs uppercase tracking-[0.16em] text-cyan-300 font-space font-semibold">
                Ecosystem Extension
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">Related Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <Link 
              href="/applications"
              className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted hover:-translate-y-1 block"
            >
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan group-hover:scale-105 transition-transform">
                  <Code2 className="w-5 h-5 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-text group-hover:text-ice-cyan transition-colors">
                  Application Development
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Put AI inside your product with scalable microservices and real-time inference APIs.
                </p>
              </div>
            </Link>

            {/* Card 2 */}
            <Link 
              href="/erp"
              className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted hover:-translate-y-1 block"
            >
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-diamond-blue group-hover:scale-105 transition-transform">
                  <Database className="w-5 h-5 text-diamond-blue" />
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-text group-hover:text-ice-cyan transition-colors">
                  ERP Systems
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Connect machine learning pipelines directly to your core business operations.
                </p>
              </div>
            </Link>

            {/* Card 3 */}
            <Link 
              href="/compliances"
              className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted hover:-translate-y-1 block"
            >
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan group-hover:scale-105 transition-transform">
                  <Scale className="w-5 h-5 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-text group-hover:text-ice-cyan transition-colors">
                  Compliance
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Keep AI within international regulation, HIPAA, GxP, and SOC 2 frameworks.
                </p>
              </div>
            </Link>

          </div>
        </section>

        {/* =========================================================================
            8. FINAL CTA (Large Glowing Gradient Card)
            ========================================================================= */}
        <section className="w-full scroll-mt-28" id="assessment">
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
                Start with a free AI readiness assessment.
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed font-light">
                We map your use cases, data and platform to a prioritized roadmap. No cost, no commitment.
              </p>
            </div>

            <div className="shrink-0 z-10">
              <MetallicButton label="Book Your Free Assessment" onClick={() => setIsAssessmentOpen(true)} />
            </div>

          </div>
        </section>

      </div>

      {/* =========================================================================
          INTERACTIVE 3-STEP AI READINESS ASSESSMENT MODAL
          ========================================================================= */}
      {isAssessmentOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-midnight/85 backdrop-blur-xl">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0B1630] border border-ice-cyan/40 p-8 shadow-[0_0_60px_rgba(61,139,255,0.35)] overflow-hidden">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsAssessmentOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-midnight/80 border border-glass-border flex items-center justify-center text-muted-text hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!assessmentSubmitted ? (
              <div className="flex flex-col gap-6">
                
                {/* Header & Steps */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-ice-cyan" />
                    <span className="font-mono text-xs uppercase text-ice-cyan tracking-wider font-semibold">
                      STEP {assessmentStep} OF 3
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-surface-text">
                    AI Readiness Assessment
                  </h3>
                  <p className="text-sm text-muted-text mt-1">
                    Complete this 60-second diagnostic to receive an unbiased feasibility evaluation and production roadmap.
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-midnight rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-diamond-blue to-ice-cyan transition-all duration-300"
                    style={{ width: assessmentStep === 1 ? '33%' : assessmentStep === 2 ? '66%' : '100%' }}
                  ></div>
                </div>

                {/* STEP 1: Industry & AI Maturity */}
                {assessmentStep === 1 && (
                  <div className="flex flex-col gap-5 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-muted-text uppercase mb-2">1. What is your industry?</label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          'Life Sciences & BioTech', 
                          'Healthcare & Payers', 
                          'Financial Services', 
                          'Advanced Manufacturing', 
                          'Retail & Consumer', 
                          'Technology / SaaS'
                        ].map((ind) => (
                          <button
                            key={ind}
                            type="button"
                            onClick={() => setAssessmentData({ ...assessmentData, industry: ind })}
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                              assessmentData.industry === ind 
                                ? 'bg-diamond-blue/25 border-ice-cyan text-white shadow-glow-cyan/20' 
                                : 'bg-[#050B1A]/70 border-glass-border text-muted-text hover:border-ice-cyan/40'
                            }`}
                          >
                            {ind}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-muted-text uppercase mb-2">2. Current AI Adoption Level?</label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          'Exploring / Ideation', 
                          'Active Proof of Concept', 
                          'Initial Production App', 
                          'Scaling Multi-Model Mesh'
                        ].map((mat) => (
                          <button
                            key={mat}
                            type="button"
                            onClick={() => setAssessmentData({ ...assessmentData, aiMaturity: mat })}
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                              assessmentData.aiMaturity === mat 
                                ? 'bg-diamond-blue/25 border-ice-cyan text-white shadow-glow-cyan/20' 
                                : 'bg-[#050B1A]/70 border-glass-border text-muted-text hover:border-ice-cyan/40'
                            }`}
                          >
                            {mat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end pt-3">
                      <button
                        type="button"
                        onClick={() => setAssessmentStep(2)}
                        disabled={!assessmentData.industry || !assessmentData.aiMaturity}
                        className="px-6 py-2.5 rounded-full font-display text-sm font-semibold text-white bg-gradient-to-r from-diamond-blue to-[#1D4ED8] disabled:opacity-40 disabled:cursor-not-allowed shadow-glow-blue cursor-pointer"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Objective & Timeline */}
                {assessmentStep === 2 && (
                  <div className="flex flex-col gap-5 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-muted-text uppercase mb-2">3. Primary AI Objective?</label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          'Custom Generative AI / LLM', 
                          'Predictive Forecasting & BI', 
                          'MLOps & Production Pipeline', 
                          'Data Engineering & Governance'
                        ].map((obj) => (
                          <button
                            key={obj}
                            type="button"
                            onClick={() => setAssessmentData({ ...assessmentData, primaryObjective: obj })}
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                              assessmentData.primaryObjective === obj 
                                ? 'bg-diamond-blue/25 border-ice-cyan text-white shadow-glow-cyan/20' 
                                : 'bg-[#050B1A]/70 border-glass-border text-muted-text hover:border-ice-cyan/40'
                            }`}
                          >
                            {obj}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-muted-text uppercase mb-2">4. Target Timeline for Production?</label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          'Immediate (< 30 days)', 
                          'Next 1-3 Months', 
                          '3-6 Months', 
                          'Fiscal Budget Planning'
                        ].map((tl) => (
                          <button
                            key={tl}
                            type="button"
                            onClick={() => setAssessmentData({ ...assessmentData, timeline: tl })}
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                              assessmentData.timeline === tl 
                                ? 'bg-diamond-blue/25 border-ice-cyan text-white shadow-glow-cyan/20' 
                                : 'bg-[#050B1A]/70 border-glass-border text-muted-text hover:border-ice-cyan/40'
                            }`}
                          >
                            {tl}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between pt-3">
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
                        disabled={!assessmentData.primaryObjective || !assessmentData.timeline}
                        className="px-6 py-2.5 rounded-full font-display text-sm font-semibold text-white bg-gradient-to-r from-diamond-blue to-[#1D4ED8] disabled:opacity-40 disabled:cursor-not-allowed shadow-glow-blue cursor-pointer"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Dispatch & Contact Details */}
                {assessmentStep === 3 && (
                  <div className="flex flex-col gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-muted-text uppercase mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        value={assessmentData.fullName}
                        onChange={(e) => setAssessmentData({ ...assessmentData, fullName: e.target.value })}
                        placeholder="Dr. Jordan Bennett"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050B1A] border border-glass-border text-white text-sm focus:border-ice-cyan outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-muted-text uppercase mb-1.5">Work Email (for evaluation delivery)</label>
                      <input 
                        type="email" 
                        value={assessmentData.workEmail}
                        onChange={(e) => setAssessmentData({ ...assessmentData, workEmail: e.target.value })}
                        placeholder="jordan.bennett@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050B1A] border border-glass-border text-white text-sm focus:border-ice-cyan outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-muted-text uppercase mb-1.5">Company Name</label>
                      <input 
                        type="text" 
                        value={assessmentData.companyName}
                        onChange={(e) => setAssessmentData({ ...assessmentData, companyName: e.target.value })}
                        placeholder="Apex Therapeutics Inc"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050B1A] border border-glass-border text-white text-sm focus:border-ice-cyan outline-none"
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
                  Thank you, <span className="text-ice-cyan font-semibold">{assessmentData.fullName}</span>. Based on your profile ({assessmentData.industry}), our Principal AI Architect is preparing a production readiness roadmap for <span className="text-white font-medium">{assessmentData.companyName || 'your organization'}</span>.
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
