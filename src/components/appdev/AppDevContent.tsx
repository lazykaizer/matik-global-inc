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
  FileCheck,
  Code2,
  Cpu,
  Compass
} from 'lucide-react';
import { motion } from 'framer-motion';
import { MetallicButton } from '@/components/ui/metallic-button';
import HowItWorks from '@/components/ui/how-it-works';
import { GlassFold } from '@/components/ui/glass-fold';
import { SculptureFigure } from '@/components/ui/SculptureFigure';
import {
  SiNodedotjs,
  SiSwift,
  SiGraphql,
  SiDocker,
  SiKubernetes
} from 'react-icons/si';

function ReactIcon() {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NextjsIcon() {
  return (
    <svg viewBox="0 0 180 180" className="w-5 h-5" fill="none">
      <circle cx="90" cy="90" r="88" fill="#000000" stroke="#383838" strokeWidth="4" />
      <path d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#next-g1-app)" />
      <rect x="115" y="54" width="12" height="72" fill="#FFFFFF" />
      <defs>
        <linearGradient id="next-g1-app" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function NodejsIcon() {
  return <SiNodedotjs className="w-5 h-5 text-[#5FA04E]" />;
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <path d="M11.91 2c-5.07 0-4.75 2.2-4.75 2.2l.01 2.28h4.82v.69H5.16S2 6.8 2 11.9c0 5.1 2.76 4.93 2.76 4.93h1.65v-2.31c0-2.64 2.25-2.6 2.25-2.6h4.74c2.2 0 2.2-2.13 2.2-2.13V4.28S16.14 2 11.91 2zm-2.62 1.52c.49 0 .89.4.89.89 0 .49-.4.89-.89.89-.49 0-.89-.4-.89-.89 0-.49.4-.89.89-.89z" fill="#3776AB" />
      <path d="M12.09 22c5.07 0 4.75-2.2 4.75-2.2l-.01-2.28H12.01v-.69h6.83S22 17.2 22 12.1c0-5.1-2.76-4.93-2.76-4.93h-1.65v2.31c0 2.64-2.25 2.6-2.25 2.6H10.6c-2.2 0-2.2 2.13-2.2 2.13v5.51S7.86 22 12.09 22zm2.62-1.52c-.49 0-.89-.4-.89-.89 0-.49.4-.89.89-.89.49 0 .89.4.89.89 0 .49-.4.89-.89.89z" fill="#FFD43B" />
    </svg>
  );
}

function JavaIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
      <path d="M12.2 24.2c-2.8 0-4.5-.4-4.5-.4s.8.5 2.6.7c3.1.3 6.9.1 9.4-.5 1.1-.3 1.8-.7 1.8-.7s-1 .5-2.7.7c-2.3.2-4.6.2-6.6.2z" fill="#5382A1" />
      <path d="M10.8 21.2c-3.3 0-5.3-.4-5.3-.4s1 .6 3.1.8c3.7.4 8.2.2 11.2-.5 1.3-.3 2.1-.8 2.1-.8s-1.2.6-3.2.8c-2.7.2-5.5.1-7.9.1z" fill="#5382A1" />
      <path d="M17.1 17.3c2.4-2.7 1.3-4.8.5-5.9-.2-.3-.4-.5-.6-.8-.2-.3-.4-.6-.4-.9 0-.6.7-1.2 1.3-1.6-1.5.3-2.6 1.4-2.6 2.6 0 .8.4 1.5.9 2.1.8 1 1.2 1.8.9 2.7-.4 1.1-1.7 1.9-2.3 2.3 1.1-.1 1.9-.3 2.3-.5z" fill="#EA2D2E" />
      <path d="M21.5 20.3c.7-.6 1.1-1.4 1.1-2.4 0-1.8-1.5-3.3-3.1-4.7 1.1 1.1 1.7 2.2 1.7 3.3 0 .7-.3 1.3-.8 1.8-1.3 1.3-3.6 1.7-5.5 2 2.3.4 5.2.2 6.6 0z" fill="#EA2D2E" />
      <path d="M14.5 27.2c4.8 0 8.7-1 8.7-2.1 0 0-.9.6-3.6.8-3.5.3-9.3.2-12-.7 0 0 1.3 2 6.9 2z" fill="#5382A1" />
    </svg>
  );
}

function SwiftIcon() {
  return <SiSwift className="w-5 h-5 text-[#F05138]" />;
}

function KotlinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
      <defs>
        <linearGradient id="kt-g1-app" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C757BC" />
          <stop offset="50%" stopColor="#D25C74" />
          <stop offset="100%" stopColor="#F18E33" />
        </linearGradient>
        <linearGradient id="kt-g2-app" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F52FF" />
          <stop offset="100%" stopColor="#C757BC" />
        </linearGradient>
      </defs>
      <polygon points="24,0 0,0 0,24 24,0" fill="url(#kt-g1-app)" />
      <polygon points="0,0 12,12 0,24" fill="url(#kt-g2-app)" />
    </svg>
  );
}

function GraphqlIcon() {
  return <SiGraphql className="w-5 h-5 text-[#E535AB]" />;
}

function DockerIcon() {
  return <SiDocker className="w-5 h-5 text-[#2496ED]" />;
}

function KubernetesIcon() {
  return <SiKubernetes className="w-5 h-5 text-[#326CE5]" />;
}

function AwsIcon() {
  return (
    <svg viewBox="0 0 640 512" className="w-5 h-5" fill="none">
      <path fill="#FFFFFF" d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42z"/>
      <path fill="#FF9900" d="M578.57 375.14c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"/>
    </svg>
  );
}

function AzureIcon() {
  return (
    <svg viewBox="0 0 96 96" className="w-5 h-5" fill="none">
      <defs>
        <linearGradient id="az-dark-app" x1="-1032.17" x2="-1059.21" y1="145.31" y2="65.43" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#114a8b"/>
          <stop offset="1" stopColor="#0669bc"/>
        </linearGradient>
        <linearGradient id="az-light-app" x1="-1027.16" x2="-997.48" y1="147.64" y2="68.56" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3ccbf4"/>
          <stop offset="1" stopColor="#2892df"/>
        </linearGradient>
      </defs>
      <path fill="url(#az-dark-app)" d="M33.34 6.54h26.04l-27.03 80.1a4.15 4.15 0 0 1-3.94 2.81H8.15a4.14 4.14 0 0 1-3.93-5.47L29.4 9.38a4.15 4.15 0 0 1 3.94-2.83z"/>
      <path fill="#0078d4" d="M71.17 60.26H29.88a1.91 1.91 0 0 0-1.3 3.31l26.53 24.76a4.17 4.17 0 0 0 2.85 1.13h23.38z"/>
      <path fill="url(#az-light-app)" d="M66.6 9.36a4.14 4.14 0 0 0-3.93-2.82H33.65a4.15 4.15 0 0 1 3.93 2.82l25.18 74.62a4.15 4.15 0 0 1-3.94 5.54h23.19a4.15 4.15 0 0 0 3.93-5.48z"/>
    </svg>
  );
}

function GoogleCloudIcon() {
  return (
    <svg preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256" className="w-5 h-5" fill="none">
      <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"/>
      <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"/>
      <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"/>
      <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"/>
    </svg>
  );
}

const TECHNOLOGY_ITEMS = [
  { name: 'React', icon: ReactIcon },
  { name: 'Next.js', icon: NextjsIcon },
  { name: 'Node.js', icon: NodejsIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'Java', icon: JavaIcon },
  { name: 'Swift', icon: SwiftIcon },
  { name: 'Kotlin', icon: KotlinIcon },
  { name: 'GraphQL', icon: GraphqlIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'Kubernetes', icon: KubernetesIcon },
  { name: 'AWS', icon: AwsIcon },
  { name: 'Microsoft Azure', icon: AzureIcon },
  { name: 'Google Cloud', icon: GoogleCloudIcon },
];

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
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-[#0B1736]/70 backdrop-blur-md shadow-[0_0_20px_rgba(61,139,255,0.12)] mb-3">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs uppercase tracking-[0.16em] text-cyan-300 font-space font-semibold">
                  Engineered For Scale
                </span>
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
              <div className="mt-8 pt-4 border-t border-glass-border/40 font-mono text-[11px] text-muted-text">
                <span>MODERN WEB SPAS &amp; SSR</span>
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
              <div className="mt-8 pt-4 border-t border-glass-border/40 font-mono text-[11px] text-muted-text">
                <span>IOS · ANDROID · FLUTTER</span>
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
              <div className="mt-8 pt-4 border-t border-glass-border/40 font-mono text-[11px] text-muted-text">
                <span>EVENT-DRIVEN ARCHITECTURE</span>
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
              <div className="mt-8 pt-4 border-t border-glass-border/40 font-mono text-[11px] text-muted-text">
                <span>STRANGLER PATTERN MIGRATION</span>
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
              <div className="mt-8 pt-4 border-t border-glass-border/40 font-mono text-[11px] text-muted-text">
                <span>ZERO TRUST COMPLIANCE</span>
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
              <div className="mt-8 pt-4 border-t border-glass-border/40 font-mono text-[11px] text-muted-text">
                <span>CI/CD &amp; CONTINUOUS TESTING</span>
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
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
        <section className="w-full relative py-2">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-[#0B1736]/70 backdrop-blur-md shadow-[0_0_20px_rgba(61,139,255,0.12)] mb-3">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs uppercase tracking-[0.16em] text-cyan-300 font-space font-semibold">
                Technology Stack
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">Technologies</h2>
            <p className="text-muted-text text-sm sm:text-base max-w-lg mt-2 font-light">
              Modern, proven enterprise languages, frameworks and hyperscaler infrastructure.
            </p>
          </div>

          {/* Floating Line Ribbon (Open, borderless track without an enclosed box/card - Infinite Moving Train) */}
          <div className="relative w-full py-7 sm:py-8 border-y border-blue-500/20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            {/* Luminous center laser guideline passing through */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent pointer-events-none -translate-y-1/2"></div>

            {/* Glowing animated pulse beam racing across the line */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-[2px] w-72 bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-[1px] pointer-events-none z-0"
              animate={{ left: ['-20%', '120%'] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            />

            {/* Smooth Infinite Marquee: Continuously glides without stopping */}
            <motion.div
              className="flex w-max items-center z-10 relative"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 32,
                  ease: 'linear',
                },
              }}
            >
              {[...TECHNOLOGY_ITEMS, ...TECHNOLOGY_ITEMS].map((tech, idx) => (
                <div
                  key={`tech-item-${idx}`}
                  className="relative mx-2 sm:mx-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-[#09152e]/95 backdrop-blur-xl border border-blue-500/25 hover:border-cyan-400/70 hover:bg-[#102044] hover:shadow-[0_0_30px_rgba(61,139,255,0.45)] flex items-center gap-3.5 shadow-[0_8px_24px_rgba(3,7,18,0.55)] transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none group/pill shrink-0"
                >
                  {/* Floating Squircle Logo Box */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#050C1F]/90 border border-blue-400/30 flex items-center justify-center p-2 shrink-0 shadow-inner group-hover/pill:scale-110 group-hover/pill:border-cyan-400/60 transition-all duration-300">
                    <tech.icon />
                  </div>
                  {/* Tech Name */}
                  <span className="font-display text-sm sm:text-[15px] font-semibold text-surface-text tracking-wide whitespace-nowrap group-hover/pill:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            5. HOW WE BUILD (Horizontal 4-Step Process with Connecting Bridge)
            ========================================================================= */}
        <section className="w-full flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-[#0B1736]/70 backdrop-blur-md shadow-[0_0_20px_rgba(61,139,255,0.12)] w-fit mb-1">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs uppercase tracking-[0.16em] text-cyan-300 font-space font-semibold">
                Lifecycle Methodology
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">How We Build</h2>
            <p className="text-muted-text text-sm sm:text-base max-w-lg mt-1 font-light">
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
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/25 bg-[#0B1736]/70 backdrop-blur-md shadow-[0_0_20px_rgba(61,139,255,0.12)] mb-1 w-fit">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs uppercase tracking-[0.16em] text-cyan-300 font-space font-semibold">
                Complementary Capabilities
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-surface-text">Related Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <Link 
              href="/aiml"
              className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted hover:-translate-y-1 block"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-diamond-blue/15 flex items-center justify-center border border-ice-cyan/30 text-ice-cyan mb-5 group-hover:scale-105 transition-transform">
                  <Brain className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors mb-2">AI and ML</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Add predictive intelligence and automated cognitive features directly inside your product.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-glass-border/40 font-mono text-[11px] text-muted-text">
                <span>APPLIED INTELLIGENCE</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link 
              href="/erp"
              className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted hover:-translate-y-1 block"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-diamond-blue/15 flex items-center justify-center border border-ice-cyan/30 text-diamond-blue mb-5 group-hover:scale-105 transition-transform">
                  <Layers className="w-6 h-6 text-diamond-blue" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors mb-2">ERP Systems</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Integrate your custom digital applications directly with enterprise ERP backbones.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-glass-border/40 font-mono text-[11px] text-muted-text">
                <span>CORE OPERATIONS</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link 
              href="/compliances"
              className="frosted-glass frosted-glass-hover rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-frosted hover:-translate-y-1 block"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-diamond-blue/15 flex items-center justify-center border border-ice-cyan/30 text-ice-cyan mb-5 group-hover:scale-105 transition-transform">
                  <Scale className="w-6 h-6 text-ice-cyan" />
                </div>
                <h3 className="font-display text-xl font-bold text-surface-text group-hover:text-ice-cyan transition-colors mb-2">Compliance</h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  Prepare your application stack for SOC 2, HIPAA, and ISO 27001 regulatory audits.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-glass-border/40 font-mono text-[11px] text-muted-text">
                <span>AUDIT AUTOMATION</span>
              </div>
            </Link>

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
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${scopingData.projectType === type
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
                              className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${isSelected
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
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${scopingData.targetTimeline === tl
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
