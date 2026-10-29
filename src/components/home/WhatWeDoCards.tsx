"use client";

import React from "react";
import { 
  Sparkles, 
  Database, 
  Code2, 
  ShieldCheck, 
  Calculator 
} from "lucide-react";
import { InteractiveTravelCard } from "@/components/ui/3d-card";

export const servicesCards = [
  {
    id: "card-1",
    badge: "01 · Cognitive Systems",
    title: "AI and ML",
    description: "Predict demand, automate documents and apply generative AI to your own data.",
    href: "/aiml",
    icon: <Sparkles className="w-5 h-5 text-cyan-300" />,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    gridClass: "services-card-1",
  },
  {
    id: "card-2",
    badge: "02 · Core Operations",
    title: "ERP",
    description: "Select, implement and support NetSuite, Infor, Odoo, SAP, JD Edwards or Microsoft Dynamics 365, with finance visibility from day one.",
    href: "/erp",
    icon: <Database className="w-5 h-5 text-cyan-300" />,
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    gridClass: "services-card-2",
  },
  {
    id: "card-3",
    badge: "03 · Engineering",
    title: "Application Development",
    description: "Web, mobile and API products built secure from the first sprint.",
    href: "/applications",
    icon: <Code2 className="w-5 h-5 text-cyan-300" />,
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    gridClass: "services-card-3",
  },
  {
    id: "card-4",
    badge: "04 · Governance",
    title: "Compliance",
    description: "Turn GDPR, SOC 2, ISO 27001 and GRC requirements into controls your team can actually run.",
    href: "/compliances",
    icon: <ShieldCheck className="w-5 h-5 text-cyan-300" />,
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    gridClass: "services-card-4",
  },
  {
    id: "card-5",
    badge: "05 · Advisory",
    title: "Accounting and Taxation",
    description: "GAAP and IFRS reporting, tax planning and virtual CFO support for growing finance teams.",
    href: "/accountingtax",
    icon: <Calculator className="w-5 h-5 text-cyan-300" />,
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    gridClass: "services-card-5",
  },
];

export function WhatWeDoCards() {
  return (
    <div className="relative w-full">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-white">
          What We Do
        </h2>
        <p className="text-[#A9B8D6] text-base sm:text-lg font-inter mt-3 max-w-2xl mx-auto">
          End-to-end execution across AI, ERP platforms, custom engineering, compliance, and fiscal operations.
        </p>
      </div>

      {/* Static Responsive Grid */}
      <div className="services-static-grid">
        {servicesCards.map((service) => (
          <div
            key={service.title}
            className={`services-grid-item ${service.gridClass}`}
          >
            <InteractiveTravelCard
              title={service.title}
              badge={service.badge}
              description={service.description}
              imageUrl={service.imageUrl}
              actionText="Learn more"
              href={service.href}
              icon={service.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
