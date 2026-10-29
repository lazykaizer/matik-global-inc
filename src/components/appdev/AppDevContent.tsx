'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Terminal, 
  Layers, 
  Globe, 
  Smartphone, 
  Network, 
  RefreshCw, 
  Lock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Sparkles, 
  Brain, 
  Cloud, 
  Scale, 
  Rocket,
  Shield,
  FileCheck
} from 'lucide-react';
import { MetallicButton } from '@/components/ui/metallic-button';
import HowItWorks from '@/components/ui/how-it-works';
import { GlassFold } from '@/components/ui/glass-fold';
import { SculptureFigure } from '@/components/ui/SculptureFigure';

export function AppDevContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scoping Modal State
  const [step, setStep] = useState(1);
  const [scopingData, setScopingData] = useState({
    projectType: '',
    complianceNeeds: [] as string[],
    targetTimeline: '',
    fullName: '',
    workEmail: '',
    companyName: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleCompliance = (item: string) => {
    if (scopingData.complianceNeeds.includes(item)) {
      setScopingData({
        ...scopingData,
        complianceNeeds: scopingData.complianceNeeds.filter(i => i !== item)
      });
    } else {
      setScopingData({
        ...scopingData,
        complianceNeeds: [...scopingData.complianceNeeds, item]
      });
    }
  };

  return (
    <div 
      id="appdev-stitch-page" 
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
        <div className="absolute top-[1400px] -left-48 w-[650px] h-[650px] bg-[#3D8BFF]/10 blur-[170px]"></div>
        <div className="absolute top-[2800px] -right-48 w-[700px] h-[700px] bg-[#7FD6FF]/10 blur-[180px]"></div>
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
                Software your team can ship, and your{' '}
                <span className="bg-gradient-to-r from-[#3D8BFF] via-[#7FD6FF] to-[#bfe8ff] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(122,209,250,0.4)]">
                  auditor can trust.
                </span>
              </h1>

              {/* Subtext verbatim */}
              <p className="text-muted-text text-[17px] leading-relaxed max-w-2xl font-light">
                We design and build custom web, mobile and API products for life sciences and other regulated companies. Security and compliance are part of the first sprint, not a review at the end.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-display text-[15px] font-semibold text-white bg-gradient-to-r from-diamond-blue via-[#2563EB] to-[#1D4ED8] border border-ice-cyan/40 shadow-glow-blue hover:shadow-[0_0_35px_rgba(61,139,255,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                >
                  <span>Talk to an Engineer</span>
                  <Terminal className="w-4 h-4" />
                </button>
                <a 
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-display text-[15px] font-medium text-surface-text frosted-glass hover:bg-glass-highlight hover:border-ice-cyan/40 hover:-translate-y-0.5 transition-all duration-200" 
                  href="#what-we-build"
                >
                  <Layers className="w-4 h-4 text-ice-cyan" />
                  <span>See What We Build</span>
                </a>
              </div>
            </div>

            {/* Right Visual: Interactive Liquid Particle Sculpture */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] lg:min-h-[520px] w-full pt-4 lg:pt-0">
              <div className="relative w-full aspect-square max-w-[560px] flex items-center justify-center">
                {/* Ambient Outer Halo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3D8BFF]/25 via-[#7FD6FF]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

                {/* Interactive Liquid Particle Sculpture Figure */}
                <SculptureFigure 
                  className="w-full h-full"
                  darkSrc="/sculpture-dark.webp"
                  src="/sculpture-dark.webp"
                  sculptureScale={1.2}
                  mobileSculptureScale={1.1}
                  ambient={true}
                  ambientIntensity={0.5}
                  interactive={true}
                  liquid={1.2}
                  streaks={true}
                  intro={true}
                />
              </div>
            </div>
          </section>
        </div>

        {/* =========================================================================
            2. WHAT WE BUILD (6 Frosted Glass Bento Cards in 3x2 Grid)
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8 scroll-mt-28" id="what-we-build">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-ice-cyan"></span>
                <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase font-semibold">ENGINEERED FOR SCALE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">What We Build</h2>
            </div>
            <p className="text-muted-text text-sm sm:text-base max-w-md font-light">
              Custom digital products designed, validated, and scaled specifically for high-growth and regulated environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted">
              <div>
                <div className="w-12 h-12 rounded-xl bg-diamond-blue/15 flex items-center justify-center border border-ice-cyan/30 text-ice-cyan mb-5 group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors mb-3">
                  Custom Web Applications
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Portals, dashboards and internal tools built around how your teams actually work.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-glass-border/40 flex items-center justify-between font-mono text-[11px] text-muted-text">
                <span>MODERN WEB SPAS &amp; SSR</span>
                <ArrowRight className="w-4 h-4 text-ice-cyan group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted">
              <div>
                <div className="w-12 h-12 rounded-xl bg-diamond-blue/15 flex items-center justify-center border border-ice-cyan/30 text-diamond-blue mb-5 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-6 h-6 text-diamond-blue" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors mb-3">
                  Mobile Apps
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Native and cross-platform apps for field teams, clinicians and customers.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-glass-border/40 flex items-center justify-between font-mono text-[11px] text-muted-text">
                <span>IOS · ANDROID · FLUTTER</span>
                <ArrowRight className="w-4 h-4 text-diamond-blue group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted">
              <div>
                <div className="w-12 h-12 rounded-xl bg-diamond-blue/15 flex items-center justify-center border border-ice-cyan/30 text-ice-cyan mb-5 group-hover:scale-105 transition-transform">
                  <Network className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors mb-3">
                  APIs and Integrations
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Connect your ERP, CRM, lab and finance systems so data stops living in silos.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-glass-border/40 flex items-center justify-between font-mono text-[11px] text-muted-text">
                <span>EVENT-DRIVEN ARCHITECTURE</span>
                <ArrowRight className="w-4 h-4 text-ice-cyan group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted">
              <div>
                <div className="w-12 h-12 rounded-xl bg-diamond-blue/15 flex items-center justify-center border border-ice-cyan/30 text-diamond-blue mb-5 group-hover:scale-105 transition-transform">
                  <RefreshCw className="w-6 h-6 text-diamond-blue" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors mb-3">
                  Legacy Modernization
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Move aging systems to the cloud in stages, without stopping day-to-day operations.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-glass-border/40 flex items-center justify-between font-mono text-[11px] text-muted-text">
                <span>STRANGLER PATTERN MIGRATION</span>
                <ArrowRight className="w-4 h-4 text-diamond-blue group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 5 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted">
              <div>
                <div className="w-12 h-12 rounded-xl bg-diamond-blue/15 flex items-center justify-center border border-ice-cyan/30 text-ice-cyan mb-5 group-hover:scale-105 transition-transform">
                  <Lock className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors mb-3">
                  Secure by Design
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Access control, audit trails and encryption built in, aligned to HIPAA and GDPR requirements.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-glass-border/40 flex items-center justify-between font-mono text-[11px] text-muted-text">
                <span>ZERO TRUST COMPLIANCE</span>
                <ArrowRight className="w-4 h-4 text-ice-cyan group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 6 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted">
              <div>
                <div className="w-12 h-12 rounded-xl bg-diamond-blue/15 flex items-center justify-center border border-ice-cyan/30 text-diamond-blue mb-5 group-hover:scale-105 transition-transform">
                  <Terminal className="w-6 h-6 text-diamond-blue" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors mb-3">
                  QA and DevOps
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Automated testing and release pipelines that make every deployment predictable.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-glass-border/40 flex items-center justify-between font-mono text-[11px] text-muted-text">
                <span>CI/CD &amp; CONTINUOUS TESTING</span>
                <ArrowRight className="w-4 h-4 text-diamond-blue group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            3. BUILT FOR REGULATED WORK (Full-width Glass Band with Inner Glow)
            ========================================================================= */}
        <section className="w-full">
          <div className="relative rounded-3xl p-8 md:p-12 lg:p-14 bg-gradient-to-r from-[#0B1630]/90 via-[#101E40]/80 to-[#0B1630]/90 border border-ice-cyan/35 backdrop-blur-2xl shadow-frosted overflow-hidden">
            <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#7FD6FF]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col gap-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-glass-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-diamond-blue/15 flex items-center justify-center border border-ice-cyan/40 text-ice-cyan">
                    <FileCheck className="w-5 h-5 text-ice-cyan" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-surface-text tracking-tight">
                    Built for regulated work
                  </h2>
                </div>

                {/* 4 Glass Pill Chips */}
                <div className="flex flex-wrap items-center gap-3">
                  {[
                    'Audit trails',
                    'Role-based access',
                    'Validation-ready documentation',
                    'Privacy by design'
                  ].map((feature) => (
                    <span 
                      key={feature}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-midnight/85 border border-ice-cyan/30 backdrop-blur-xl font-display text-xs sm:text-sm font-semibold text-surface-text shadow-[0_4px_16px_rgba(7,14,29,0.4)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-ice-cyan"></span>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Supporting line verbatim */}
              <p className="text-surface-text/90 text-base sm:text-lg leading-relaxed max-w-4xl font-light">
                Regulated teams need more than working software. They need to show how it was built, who can use it and what changed. We plan for that from day one.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. TECHNOLOGIES (Supported Languages, Frameworks & Clouds)
            ========================================================================= */}
        <section className="w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-ice-cyan"></span>
              <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase font-semibold">TECHNOLOGY STACK</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-surface-text">Technologies</h2>
            <p className="text-muted-text text-sm sm:text-base max-w-lg mt-2 font-light">
              Modern, proven enterprise languages, frameworks and hyperscaler infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {[
              'React',
              'Next.js',
              'Node.js',
              'Python',
              'Java',
              'Swift',
              'Kotlin',
              'GraphQL',
              'Docker',
              'Kubernetes',
              'AWS',
              'Microsoft Azure',
              'Google Cloud'
            ].map((tech) => (
              <span 
                key={tech}
                className="px-5 py-2.5 rounded-full bg-[#0B1630]/70 border border-glass-border hover:border-ice-cyan/60 hover:text-ice-cyan backdrop-blur-xl font-mono text-xs sm:text-sm text-surface-text font-medium transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* =========================================================================
            5. HOW WE BUILD (Horizontal 4-Step Process with Connecting Bridge)
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-ice-cyan"></span>
                <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase font-semibold">LIFECYCLE METHODOLOGY</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">How We Build</h2>
            </div>
            <p className="text-muted-text text-sm sm:text-base max-w-md font-light">
              Predictable sprint cadences pairing agile engineering speed with rigorous compliance validation.
            </p>
          </div>

          <HowItWorks
            layout="horizontal"
            showBackgroundLines={false}
            features={[
              {
                title: "Scope",
                description: "We define users, requirements and compliance needs before any code is written.",
                colorTheme: "cyan",
              },
              {
                title: "Architect",
                description: "We choose the stack, data model and integrations, and document the decisions.",
                colorTheme: "blue",
              },
              {
                title: "Build and test",
                description: "We ship in short sprints with automated tests, and you review working software every cycle.",
                colorTheme: "purple",
              },
              {
                title: "Release and evolve",
                description: "We deploy, monitor and keep improving after launch.",
                colorTheme: "cyan",
              },
            ]}
          />
        </section>

        {/* =========================================================================
            6. RELATED SERVICES (3 Glass Cards with "Learn more →")
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest text-ice-cyan uppercase font-semibold">COMPLEMENTARY CAPABILITIES</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">Related Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted">
              <div>
                <div className="w-12 h-12 rounded-xl bg-diamond-blue/15 flex items-center justify-center border border-ice-cyan/30 text-ice-cyan mb-5">
                  <Brain className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors mb-2">AI and ML</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Add predictive intelligence and automated cognitive features directly inside your product.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-glass-border/40 flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted-text">APPLIED INTELLIGENCE</span>
                <Link className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ice-cyan hover:underline transition-colors" href="/aiml">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted">
              <div>
                <div className="w-12 h-12 rounded-xl bg-diamond-blue/15 flex items-center justify-center border border-ice-cyan/30 text-diamond-blue mb-5">
                  <Layers className="w-6 h-6 text-diamond-blue" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors mb-2">ERP Systems</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Integrate your custom digital applications directly with enterprise ERP backbones.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-glass-border/40 flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted-text">CORE OPERATIONS</span>
                <Link className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-diamond-blue hover:underline transition-colors" href="/erp">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted">
              <div>
                <div className="w-12 h-12 rounded-xl bg-diamond-blue/15 flex items-center justify-center border border-ice-cyan/30 text-ice-cyan mb-5">
                  <Scale className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors mb-2">Compliance</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Prepare your application stack for SOC 2, HIPAA, and ISO 27001 regulatory audits.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-glass-border/40 flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted-text">AUDIT AUTOMATION</span>
                <Link className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-ice-cyan hover:underline transition-colors" href="/compliances">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            7. FINAL CTA (Large Glowing Gradient Card)
            ========================================================================= */}
        <section className="w-full scroll-mt-28" id="scoping">
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
                You have the idea. We make it real.
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed font-light">
                From architecture design to compliant deployment, our team builds software you can ship with confidence.
              </p>
            </div>

            <div className="shrink-0 z-10">
              <MetallicButton label="Start Your Project" onClick={() => setIsModalOpen(true)} />
            </div>

          </div>
        </section>

      </div>

      {/* =========================================================================
          INTERACTIVE 3-STEP APPLICATION SCOPING MODAL
          ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-midnight/85 backdrop-blur-xl">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0B1630] border border-ice-cyan/40 p-8 shadow-[0_0_60px_rgba(61,139,255,0.35)] overflow-hidden">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-midnight/80 border border-glass-border flex items-center justify-center text-muted-text hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div className="flex flex-col gap-6">
                
                {/* Header & Steps */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-ice-cyan" />
                    <span className="font-mono text-xs uppercase text-ice-cyan tracking-wider font-semibold">
                      STEP {step} OF 3
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-surface-text">
                    Application Scoping &amp; Architecture Review
                  </h3>
                  <p className="text-sm text-muted-text mt-1">
                    Answer a few quick questions to receive a tailored architectural evaluation, technical design document, and sprint estimate.
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-midnight rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-diamond-blue to-ice-cyan transition-all duration-300"
                    style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
                  ></div>
                </div>

                {/* STEP 1: Application Type */}
                {step === 1 && (
                  <div className="flex flex-col gap-5 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-muted-text uppercase mb-2">1. What type of application are you building?</label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          'Custom Enterprise Web Portal', 
                          'Cross-Platform Mobile App', 
                          'API & System Integration Mesh', 
                          'Legacy Modernization Migration',
                          'Internal Operations Tool',
                          'SaaS Product Development'
                        ].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setScopingData({ ...scopingData, projectType: type })}
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                              scopingData.projectType === type 
                                ? 'bg-diamond-blue/25 border-ice-cyan text-white shadow-glow-cyan/20' 
                                : 'bg-[#050B1A]/70 border-glass-border text-muted-text hover:border-ice-cyan/40'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end pt-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!scopingData.projectType}
                        className="px-6 py-2.5 rounded-full font-display text-sm font-semibold text-white bg-gradient-to-r from-diamond-blue to-[#1D4ED8] disabled:opacity-40 disabled:cursor-not-allowed shadow-glow-blue cursor-pointer"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Compliance & Timeline */}
                {step === 2 && (
                  <div className="flex flex-col gap-5 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-muted-text uppercase mb-2">2. Regulatory &amp; Compliance Requirements (Select all that apply)</label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          'HIPAA / HITECH', 
                          'SOC 2 Type II', 
                          'FDA 21 CFR Part 11 / GxP', 
                          'GDPR / CCPA Privacy',
                          'ISO 27001 Security',
                          'Standard Enterprise SLA'
                        ].map((comp) => {
                          const isSelected = scopingData.complianceNeeds.includes(comp);
                          return (
                            <button
                              key={comp}
                              type="button"
                              onClick={() => toggleCompliance(comp)}
                              className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                                isSelected 
                                  ? 'bg-diamond-blue/25 border-ice-cyan text-white shadow-glow-cyan/20' 
                                  : 'bg-[#050B1A]/70 border-glass-border text-muted-text hover:border-ice-cyan/40'
                              }`}
                            >
                              <span>{comp}</span>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-ice-cyan" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-muted-text uppercase mb-2">3. Target Delivery Timeline</label>
                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          'Immediate Sprint (< 30 days)', 
                          '1 - 3 Months', 
                          '3 - 6 Months', 
                          'Strategic Roadmap Planning'
                        ].map((tl) => (
                          <button
                            key={tl}
                            type="button"
                            onClick={() => setScopingData({ ...scopingData, targetTimeline: tl })}
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                              scopingData.targetTimeline === tl 
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
                        onClick={() => setStep(1)}
                        className="px-5 py-2 rounded-full font-display text-sm text-muted-text hover:text-white"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        disabled={!scopingData.targetTimeline}
                        className="px-6 py-2.5 rounded-full font-display text-sm font-semibold text-white bg-gradient-to-r from-diamond-blue to-[#1D4ED8] disabled:opacity-40 disabled:cursor-not-allowed shadow-glow-blue cursor-pointer"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact Details */}
                {step === 3 && (
                  <div className="flex flex-col gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-muted-text uppercase mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        value={scopingData.fullName}
                        onChange={(e) => setScopingData({ ...scopingData, fullName: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050B1A] border border-glass-border text-white text-sm focus:border-ice-cyan outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-muted-text uppercase mb-1.5">Work Email (for Technical Scope delivery)</label>
                      <input 
                        type="email" 
                        value={scopingData.workEmail}
                        onChange={(e) => setScopingData({ ...scopingData, workEmail: e.target.value })}
                        placeholder="alex.morgan@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050B1A] border border-glass-border text-white text-sm focus:border-ice-cyan outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-muted-text uppercase mb-1.5">Company Name</label>
                      <input 
                        type="text" 
                        value={scopingData.companyName}
                        onChange={(e) => setScopingData({ ...scopingData, companyName: e.target.value })}
                        placeholder="Vanguard Health Technologies"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050B1A] border border-glass-border text-white text-sm focus:border-ice-cyan outline-none"
                      />
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-5 py-2 rounded-full font-display text-sm text-muted-text hover:text-white"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setSubmitted(true)}
                        disabled={!scopingData.fullName || !scopingData.workEmail}
                        className="px-7 py-3 rounded-full font-display text-sm font-semibold text-white bg-gradient-to-r from-diamond-blue to-[#1D4ED8] shadow-glow-blue hover:shadow-glow-cyan transition-all cursor-pointer"
                      >
                        Request Architecture Scope →
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
                  Scope Dispatched to Engineering!
                </h4>
                <p className="text-sm text-muted-text max-w-md">
                  Thank you, <span className="text-ice-cyan font-semibold">{scopingData.fullName}</span>. Based on your application specs ({scopingData.projectType}), our Principal Systems Architect is drafting a technical design document and sprint plan for <span className="text-white font-medium">{scopingData.companyName || 'your team'}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSubmitted(false);
                    setStep(1);
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
