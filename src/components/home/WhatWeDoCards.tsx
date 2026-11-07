"use client";

import React from "react";
import Link from "next/link";

// 01. AI & ML: Neural Processor Core (Replaces generic AI sparkles)
function NeuralProcessorIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="8.5" y="8.5" width="7" height="7" rx="1.75" className="fill-cyan-400/20 stroke-cyan-300" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.3" className="fill-cyan-200" />
      <path d="M12 2.5V8.5M12 15.5V21.5M2.5 12H8.5M15.5 12H21.5" className="stroke-cyan-300" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="3" r="1.25" className="fill-cyan-300" />
      <circle cx="12" cy="21" r="1.25" className="fill-cyan-300" />
      <circle cx="3" cy="12" r="1.25" className="fill-cyan-300" />
      <circle cx="21" cy="12" r="1.25" className="fill-cyan-300" />
      <path d="M5.5 5.5L8.5 8.5M18.5 5.5L15.5 8.5M5.5 18.5L8.5 15.5M18.5 18.5L15.5 15.5" className="stroke-cyan-400/60" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// 02. ERP: Enterprise Architecture Cube / Sync Nexus
function EnterpriseHubIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5L20.5 7.2L12 12L3.5 7.2L12 2.5Z" className="fill-sky-400/25 stroke-sky-300" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3.5 7.2V16.8L12 21.5V12L3.5 7.2Z" className="fill-sky-500/10 stroke-sky-300" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 12V21.5L20.5 16.8V7.2L12 12Z" className="fill-sky-600/15 stroke-sky-300" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.5" className="fill-sky-200" />
      <circle cx="12" cy="2.5" r="1" className="fill-sky-300" />
      <circle cx="20.5" cy="7.2" r="1" className="fill-sky-300" />
      <circle cx="20.5" cy="16.8" r="1" className="fill-sky-300" />
      <circle cx="12" cy="21.5" r="1" className="fill-sky-300" />
      <circle cx="3.5" cy="16.8" r="1" className="fill-sky-300" />
      <circle cx="3.5" cy="7.2" r="1" className="fill-sky-300" />
    </svg>
  );
}

// 03. Application Development: Isometric Layered Cloud Stack
function AppArchitectureIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.8L21 7.2L12 11.6L3 7.2L12 2.8Z" className="fill-indigo-400/30 stroke-indigo-300" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3 11.4L12 15.8L21 11.4" className="stroke-indigo-300" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 15.6L12 20L21 15.6" className="stroke-indigo-300" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 6.6L8.5 7.2L10 7.8M14 6.6L15.5 7.2L14 7.8" className="stroke-indigo-100" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7.2" r="0.8" className="fill-white" />
    </svg>
  );
}

// 04. Compliance: Multi-ring Cryptographic Audit Shield
function ComplianceShieldIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.2L20.2 5.8C20.2 13.8 16.5 18.8 12 21.2C7.5 18.8 3.8 13.8 3.8 5.8L12 2.2Z" className="fill-teal-400/15 stroke-teal-300" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 5.4L17.5 7.8C17.5 13.4 14.8 16.8 12 18.5C9.2 16.8 6.5 13.4 6.5 7.8L12 5.4Z" className="stroke-teal-400/50" strokeWidth="1.2" strokeLinejoin="round" strokeDasharray="2 1.5" />
      <path d="M9 12.2L11 14.2L15.2 9.8" className="stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 05. Accounting & Taxation: Sovereign Fiscal Growth Matrix
function FiscalMatrixIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 20.5H21" className="stroke-amber-400/60" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="4.5" y="14" width="3.2" height="6.5" rx="0.8" className="fill-amber-400/20 stroke-amber-300" strokeWidth="1.4" />
      <rect x="10.4" y="9.5" width="3.2" height="11" rx="0.8" className="fill-amber-400/30 stroke-amber-300" strokeWidth="1.4" />
      <rect x="16.3" y="5.2" width="3.2" height="15.3" rx="0.8" className="fill-amber-400/40 stroke-amber-300" strokeWidth="1.4" />
      <path d="M6.1 11.5L12 7.5L17.9 3.5" className="stroke-amber-300" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.8 3.5H17.9V6.6" className="stroke-amber-300" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7.5" r="1.3" className="fill-white" />
    </svg>
  );
}

interface ServiceCardData {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  icon: React.ReactNode;
  iconBoxClass: string;
}

const row1Cards: ServiceCardData[] = [
  {
    number: "01",
    category: "COGNITIVE SYSTEMS",
    title: "AI and ML",
    description: "Predict demand, automate documents and apply generative AI to your own data.",
    tags: ["Predictive analytics", "Generative AI", "NLP", "MLOps"],
    href: "/aiml",
    icon: <NeuralProcessorIcon className="w-6 h-6" />,
    iconBoxClass: "bg-gradient-to-br from-cyan-500/25 via-blue-600/15 to-[#06142e] border-cyan-400/40 text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.22)] group-hover:border-cyan-300 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]",
  },
  {
    number: "02",
    category: "CORE OPERATIONS",
    title: "ERP",
    description: "Select, implement and support NetSuite, Infor, Odoo, SAP, JD Edwards or Microsoft Dynamics 365, with finance visibility from day one.",
    tags: ["NetSuite", "Infor", "Odoo", "SAP", "JD Edwards", "Dynamics 365"],
    href: "/erp",
    icon: <EnterpriseHubIcon className="w-6 h-6" />,
    iconBoxClass: "bg-gradient-to-br from-blue-500/25 via-sky-600/15 to-[#06142e] border-sky-400/40 text-sky-300 shadow-[0_0_22px_rgba(56,189,248,0.22)] group-hover:border-sky-300 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]",
  },
];

const row2Cards: ServiceCardData[] = [
  {
    number: "03",
    category: "ENGINEERING",
    title: "Application Development",
    description: "Web, mobile and API products built secure from the first sprint.",
    tags: ["Web apps", "Mobile apps", "APIs"],
    href: "/applications",
    icon: <AppArchitectureIcon className="w-6 h-6" />,
    iconBoxClass: "bg-gradient-to-br from-indigo-500/25 via-blue-600/15 to-[#06142e] border-indigo-400/40 text-indigo-300 shadow-[0_0_22px_rgba(99,102,241,0.22)] group-hover:border-indigo-300 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]",
  },
  {
    number: "04",
    category: "GOVERNANCE",
    title: "Compliance",
    description: "Turn GDPR, SOC 2, ISO 27001 and GRC requirements into controls your team can actually run.",
    tags: ["GDPR", "SOC 2", "ISO 27001", "GRC"],
    href: "/compliances",
    icon: <ComplianceShieldIcon className="w-6 h-6" />,
    iconBoxClass: "bg-gradient-to-br from-teal-500/25 via-cyan-600/15 to-[#06142e] border-teal-400/40 text-teal-300 shadow-[0_0_22px_rgba(20,184,166,0.22)] group-hover:border-teal-300 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]",
  },
  {
    number: "05",
    category: "ADVISORY",
    title: "Accounting and Taxation",
    description: "GAAP and IFRS reporting, tax planning and virtual CFO support for growing finance teams.",
    tags: ["GAAP and IFRS", "Tax planning", "Virtual CFO"],
    href: "/accountingtax",
    icon: <FiscalMatrixIcon className="w-6 h-6" />,
    iconBoxClass: "bg-gradient-to-br from-amber-500/25 via-orange-600/15 to-[#06142e] border-amber-400/40 text-amber-300 shadow-[0_0_22px_rgba(251,191,36,0.22)] group-hover:border-amber-300 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]",
  },
];

function ServiceCard({ card }: { card: ServiceCardData }) {
  return (
    <div className="group relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0E1D3B]/90 via-[#0B1733]/90 to-[#071126]/95 border border-blue-500/20 hover:border-cyan-400/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_12px_40px_rgba(2,6,20,0.65)] hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]">
      {/* Top Row: Icon + Number/Category */}
      <div className="flex items-center justify-between gap-4">
        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0 ${card.iconBoxClass}`}>
          {card.icon}
        </div>
        <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.16em] flex items-center gap-1.5 select-none">
          <span className="text-amber-400 font-bold">{card.number}</span>
          <span className="text-[#8FA0C2]">· {card.category}</span>
        </div>
      </div>

      {/* Middle Content */}
      <div className="flex flex-col flex-1 mt-5 sm:mt-6">
        <h3 className="text-2xl sm:text-[26px] font-bold font-space text-white tracking-tight mb-2.5 group-hover:text-cyan-200 transition-colors">
          <Link href={card.href} className="hover:text-cyan-300 transition-colors">
            {card.title}
          </Link>
        </h3>
        <p className="text-sm sm:text-base text-[#9BB0D3] font-inter font-light leading-relaxed mb-6">
          {card.description}
        </p>

        {/* Tags with first tag amber accented */}
        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {card.tags.map((tag, idx) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-xs font-inter transition-all ${
                idx === 0
                  ? 'bg-amber-400/10 border border-amber-400/45 text-amber-300 font-medium shadow-[0_0_10px_rgba(251,191,36,0.1)]'
                  : 'bg-[#0B1A3A]/70 border border-blue-500/20 text-[#A9B8D6] font-normal'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Link */}
      <div className="pt-2">
        <Link
          href={card.href}
          className="inline-flex items-center gap-1.5 text-sm font-space font-semibold text-cyan-400 hover:text-white group-hover:translate-x-1 transition-all"
        >
          <span>Learn more</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export function WhatWeDoCards() {
  return (
    <div className="relative w-full">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-space text-white tracking-tight mb-3">
          What We Do
        </h2>
        <p className="text-[#A9B8D6] text-base sm:text-lg font-inter font-light max-w-2xl mx-auto px-4">
          AI, ERP, engineering, compliance and finance, delivered together.
        </p>
      </div>

      {/* Row 1: 2 Cards (AI and ML, ERP) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {row1Cards.map((card) => (
          <ServiceCard key={card.number} card={card} />
        ))}
      </div>

      {/* Row 2: 3 Cards (Application Development, Compliance, Accounting and Taxation) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {row2Cards.map((card) => (
          <ServiceCard key={card.number} card={card} />
        ))}
      </div>
    </div>
  );
}
