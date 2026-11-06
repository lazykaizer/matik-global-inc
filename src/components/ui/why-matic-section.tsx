"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Scale,
  Cpu,
  GitMerge,
  SlidersHorizontal,
  Fingerprint,
  Handshake,
  ShieldCheck,
  BrainCircuit,
  Layers,
  Rocket,
  FileCheck2,
  Users,
  Zap,
  Award,
  Calendar,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { whyMaticContent, type WhyMaticItem, type WhyMaticStat } from "@/content/why-matic";

// Map string keys to Lucide React icons
const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Scale,
  Cpu,
  GitMerge,
  SlidersHorizontal,
  Fingerprint,
  Handshake,
  ShieldCheck,
  BrainCircuit,
  Layers,
  Rocket,
  FileCheck2,
  Users,
  Award,
  Calendar,
  TrendingUp,
  Zap,
};

interface ItemCardProps {
  item: WhyMaticItem;
  mirrored?: boolean;
  reducedMotion: boolean | null;
}

function ItemCard({ item, mirrored = false, reducedMotion }: ItemCardProps) {
  const IconComponent = iconMap[item.icon] || Layers;

  return (
    <motion.li
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`group relative flex gap-4 sm:gap-5 items-start list-none ${
        mirrored ? "lg:flex-row-reverse lg:text-right" : "text-left"
      }`}
    >
      {/* Icon Box: Precision dark sapphire tile with subtle metallic rim and crisp hairline stroke */}
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-b from-[#0F2042] to-[#071126] border border-[#7FD6FF]/35 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_20px_rgba(0,0,0,0.45)] transition-all duration-300 group-hover:border-[#7FD6FF]/80 group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_0_24px_rgba(127,214,255,0.35)] group-hover:-translate-y-1">
          <IconComponent
            strokeWidth={1.65}
            className="w-6 h-6 sm:w-7 sm:h-7 text-[#7FD6FF] transition-all duration-300 group-hover:scale-110 group-hover:text-white"
          />
        </div>
      </div>

      {/* Item Text Block */}
      <div className="flex-1 min-w-0">
        {/* Number Tag: Monospaced tiny label in primary color */}
        <span className="font-mono text-xs font-bold text-[#3D8BFF] tracking-wider block mb-1">
          {item.number}
        </span>
        <h3 className="text-lg sm:text-xl font-bold font-space text-white mb-2 leading-snug group-hover:text-[#7FD6FF] transition-colors">
          {item.title}
        </h3>
        <p className="text-sm sm:text-base font-inter text-[#C5D2EA] leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}

export function WhyMaticSection() {
  const reducedMotion = useReducedMotion();
  const { header, image, items, stats, cta, flags } = whyMaticContent;

  const leftItems = items.slice(0, 3);
  const rightItems = items.slice(3, 6);

  return (
    <section
      id="why-matic"
      aria-labelledby="why-matic-title"
      className="relative w-full py-20 sm:py-24 md:py-32 overflow-hidden bg-transparent"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Decorative Background Glow Blobs & Floating Accents */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -left-32 w-80 h-80 bg-[#3D8BFF]/10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#7FD6FF]/10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/4 right-8 w-2 h-2 rounded-full bg-[#7FD6FF]/40 blur-xs pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-1/3 left-10 w-2.5 h-2.5 rounded-full bg-[#3D8BFF]/35 blur-xs pointer-events-none"
        />

          {/* =========================================================================
              1. CENTERED HEADER BLOCK WITH SHINE ACCENT LINES (~3cm top & bottom)
              ========================================================================= */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 md:mb-20">
            {/* Top Shine Line (~3cm / 110px) */}
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="w-28 sm:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent mx-auto mb-5 sm:mb-6 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
            />

            {/* H2 Title */}
            <motion.h2
              id="why-matic-title"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space text-white tracking-tight"
            >
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FD6FF] to-[#3D8BFF]">Matic</span>
            </motion.h2>

            {/* Intro Paragraph */}
            <motion.p
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg font-inter text-[#C5D2EA] mt-4 max-w-[672px] mx-auto leading-relaxed"
            >
              {header.intro}
            </motion.p>

            {/* Bottom Shine Line (~3cm / 110px) */}
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-28 sm:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent mx-auto mt-6 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
            />
          </div>

          {/* =========================================================================
              2. DESKTOP THREE-COLUMN GRID (Hidden on mobile/tablet)
              ========================================================================= */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
            {/* LEFT COLUMN: 3 Items (01, 02, 03) */}
            <ul role="list" className="space-y-10 xl:space-y-12 m-0 p-0">
              {leftItems.map((item) => (
                <ItemCard
                  key={item.number}
                  item={item}
                  mirrored={false}
                  reducedMotion={reducedMotion}
                />
              ))}
            </ul>

            {/* CENTER COLUMN: Featured Image with Pill Button */}
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative px-2 sm:px-4"
            >
              {/* Image Container with Perfectly Fitted Rounded Border & Subtle Glow */}
              <div className="relative w-full h-[460px] xl:h-[500px] rounded-2xl overflow-hidden border border-[#7FD6FF]/35 shadow-[0_0_30px_rgba(61,139,255,0.25)] group isolate">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark bottom gradient overlay for text and button contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A]/90 via-[#050B1A]/25 to-transparent pointer-events-none" />

                {/* Pill Button Overlay on Bottom of Image */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4">
                  <Link
                    href={image.ctaHref}
                    className="min-h-[44px] min-w-[44px] px-6 py-2.5 inline-flex items-center gap-2 rounded-full bg-[#050B1A]/90 border border-[#7FD6FF]/50 text-[#7FD6FF] hover:bg-gradient-to-r hover:from-[#3D8BFF] hover:to-[#7FD6FF] hover:text-[#050B1A] font-space text-xs sm:text-sm font-semibold backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_0_24px_rgba(127,214,255,0.5)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#3D8BFF] outline-none"
                  >
                    <span>{image.ctaText}</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: 3 Items (04, 05, 06) */}
            <ul role="list" className="space-y-10 xl:space-y-12 m-0 p-0">
              {rightItems.map((item) => (
                <ItemCard
                  key={item.number}
                  item={item}
                  mirrored={false}
                  reducedMotion={reducedMotion}
                />
              ))}
            </ul>
          </div>

          {/* =========================================================================
              3. MOBILE & TABLET STACKED LAYOUT (Image first, then items 01 to 06)
              ========================================================================= */}
          <div className="lg:hidden flex flex-col gap-10">
            {/* Center Image First on Mobile/Tablet */}
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-lg mx-auto w-full"
            >
              <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-[#7FD6FF]/35 shadow-[0_0_25px_rgba(61,139,255,0.2)] isolate">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={false}
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A]/90 via-[#050B1A]/25 to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-0 right-0 flex justify-center px-4">
                  <Link
                    href={image.ctaHref}
                    className="min-h-[44px] min-w-[44px] px-5 py-2.5 inline-flex items-center gap-2 rounded-full bg-[#050B1A]/90 border border-[#7FD6FF]/50 text-[#7FD6FF] hover:bg-gradient-to-r hover:from-[#3D8BFF] hover:to-[#7FD6FF] hover:text-[#050B1A] font-space text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-[#3D8BFF] outline-none"
                  >
                    <span>{image.ctaText}</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Sequential Items 01 through 06 (No mirrored alignment on mobile) */}
            <ul role="list" className="space-y-8 sm:space-y-9 m-0 p-0">
              {items.map((item) => (
                <ItemCard
                  key={item.number}
                  item={item}
                  mirrored={false}
                  reducedMotion={reducedMotion}
                />
              ))}
            </ul>
          </div>

          {/* =========================================================================
              4. OPTIONAL STATS ROW (Controlled by SHOW_STATS flag)
              ========================================================================= */}
          {flags.SHOW_STATS && stats && stats.length > 0 && (
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mt-14 sm:mt-18 pt-10 sm:pt-14 border-t border-[rgba(125,170,255,0.15)]"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, idx) => {
                  const StatIcon = iconMap[stat.icon] || Award;
                  return (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-xl bg-[#101E40]/60 border border-[rgba(125,170,255,0.18)] backdrop-blur-md text-center hover:border-[#7FD6FF]/40 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#3D8BFF]/15 border border-[#7FD6FF]/30 mx-auto flex items-center justify-center text-[#7FD6FF] mb-3">
                        <StatIcon className="w-5 h-5" />
                      </div>
                      {/* Placeholder value displayed statically as 00+ / 00% without counting */}
                      <div className="text-2xl sm:text-3xl font-bold font-space text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm font-inter text-[#8FA0C2] mt-1">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* =========================================================================
              5. OPTIONAL CTA BAND (Controlled by SHOW_CTA flag)
              ========================================================================= */}
          {flags.SHOW_CTA && (
            <motion.div
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#101E40]/80 via-[#0B1630]/90 to-[#101E40]/80 border border-[#7FD6FF]/30 flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <p className="text-lg sm:text-xl font-space font-bold text-white text-center sm:text-left">
                {cta.heading}
              </p>
              <Link
                href={cta.buttonHref}
                className="min-h-[44px] min-w-[44px] px-6 py-3 rounded-lg text-sm font-bold font-space text-[#050B1A] bg-gradient-to-r from-[#3D8BFF] to-[#7FD6FF] hover:shadow-[0_0_24px_rgba(127,214,255,0.45)] hover:-translate-y-0.5 transition-all flex-shrink-0"
              >
                {cta.buttonText}
              </Link>
            </motion.div>
          )}
      </div>
    </section>
  );
}

