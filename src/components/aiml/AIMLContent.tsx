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
  X
} from 'lucide-react';
import InkOrbitHero from './InkOrbitHero';
import { GlassFold } from '@/components/ui/glass-fold';
import { MetallicButton } from '@/components/ui/metallic-button';
import HowItWorks from '@/components/ui/how-it-works';
import ToolDockDemo from '@/components/ui/techstack-demo';

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
      <div className="w-full pt-4 sm:pt-6 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-14 lg:gap-18 pb-6 sm:pb-8">
        
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
            sculptureHint="Drag to rotate · Click to reforge"
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
                <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase block mb-3 font-semibold">STRATEGIC REALITY</span>
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
              <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase font-semibold">CORE CAPABILITIES</span>
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
            4. CLOUD-AGNOSTIC BAND (Full Width Glass Band with Telemetry Accents)
            ========================================================================= */}
        <section className="w-full rounded-2xl border border-ice-cyan/30 bg-[#0B1630]/75 backdrop-blur-xl py-12 px-6 lg:px-12 relative overflow-hidden shadow-frosted">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-ice-cyan/40 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-diamond-blue/30 to-transparent"></div>
          <div className="absolute -top-12 left-1/4 w-80 h-24 bg-ice-cyan/10 blur-3xl pointer-events-none"></div>

          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[32px] font-bold text-surface-text mb-6">
              Cloud-agnostic by design
            </h2>

            {/* 4 Chips */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-6">
              <span className="px-5 py-2 rounded-xl bg-midnight/80 border border-glass-border font-display text-sm sm:text-base text-surface-text font-semibold hover:border-ice-cyan/50 transition-colors">
                Microsoft Azure
              </span>
              <span className="px-5 py-2 rounded-xl bg-midnight/80 border border-glass-border font-display text-sm sm:text-base text-surface-text font-semibold hover:border-ice-cyan/50 transition-colors">
                AWS
              </span>
              <span className="px-5 py-2 rounded-xl bg-midnight/80 border border-glass-border font-display text-sm sm:text-base text-surface-text font-semibold hover:border-ice-cyan/50 transition-colors">
                Google Cloud
              </span>
              <span className="px-5 py-2 rounded-xl bg-midnight/80 border border-ice-cyan/40 font-mono text-xs sm:text-sm text-ice-cyan font-bold tracking-wider">
                Multi-Cloud Certified Architects
              </span>
            </div>

            {/* Verbatim line */}
            <p className="text-muted-text text-base sm:text-lg leading-relaxed max-w-2xl font-light">
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
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase font-semibold">OPERATIONAL METHODOLOGY</span>
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
            7. RELATED SERVICES (3 Glass Cards with "Learn more →")
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase font-semibold">ECOSYSTEM EXTENSION</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">Related Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan">
                  <Code2 className="w-5 h-5 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-text">Application Development</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Put AI inside your product with scalable microservices and real-time inference APIs.
                </p>
              </div>
              <Link className="mt-8 font-display text-sm font-semibold text-ice-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="/applications">
                Learn more →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-diamond-blue">
                  <Database className="w-5 h-5 text-diamond-blue" />
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-text">ERP Systems</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Connect machine learning pipelines directly to your core business operations.
                </p>
              </div>
              <Link className="mt-8 font-display text-sm font-semibold text-diamond-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="/erp">
                Learn more →
              </Link>
            </div>

            {/* Card 3 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan">
                  <Scale className="w-5 h-5 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-semibold text-surface-text">Compliance</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Keep AI within international regulation, HIPAA, GxP, and SOC 2 frameworks.
                </p>
              </div>
              <Link className="mt-8 font-display text-sm font-semibold text-ice-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="/compliances">
                Learn more →
              </Link>
            </div>

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
