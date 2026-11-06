"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progression from top of hero until it leaves viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Butter-smooth spring interpolation ("smooth as hell")
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Background image parallax translation and subtle cinematic scale
  const yBg = useTransform(smoothProgress, [0, 1], ["0%", "32%"]);
  const scaleBg = useTransform(smoothProgress, [0, 1], [1, 1.12]);

  // Foreground content floats subtly upward as you scroll toward Industries
  const yContent = useTransform(smoothProgress, [0, 1], ["0%", "-18%"]);
  const opacityContent = useTransform(smoothProgress, [0, 0.85], [1, 0.15]);

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-20 pb-28 md:pt-32 md:pb-44 overflow-hidden flex items-center min-h-[80vh]"
    >
      {/* Parallax Background Photo (Original Hero Image) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none will-change-transform"
        style={{
          backgroundImage: "url('/images/hero_enterprise.jpg')",
          y: yBg,
          scale: scaleBg,
        }}
      />

      {/* Gradient overlays for contrast and readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050B1A]/85 via-[#050B1A]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A]/70 via-transparent to-transparent pointer-events-none" />

      {/* Foreground Content */}
      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full will-change-transform"
      >
        <div className="max-w-2xl sm:max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold text-white leading-[1.08] tracking-tight font-space mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            Big-company systems.{" "}
            <span className="block mt-1 bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(127,214,255,0.3)]">
              Growth-stage speed.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg lg:text-[18px] text-slate-100 leading-relaxed max-w-2xl font-inter mb-9 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Matic Global Solutions brings AI, ERP, application development, compliance and finance support to life sciences and other regulated companies, so you can grow without building a full IT and compliance department first.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contactus"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded text-sm font-bold tracking-wide bg-gradient-to-r from-[#3D8BFF] to-[#7FD6FF] text-[#050B1A] font-space hover:shadow-[0_0_24px_rgba(127,214,255,0.45)] hover:-translate-y-0.5 transition-all shadow-lg"
            >
              Contact Us
            </Link>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded text-sm font-medium tracking-wide bg-[#101E40]/80 border border-[rgba(125,170,255,0.35)] text-white font-space hover:border-[#7FD6FF] hover:bg-[#101E40] transition-all backdrop-blur-md shadow-lg"
            >
              Explore Services
            </a>
          </div>
        </div>
      </motion.div>

      {/* Seamless fade transition into Industries section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#050B1A] pointer-events-none z-10" />
    </section>
  );
}

