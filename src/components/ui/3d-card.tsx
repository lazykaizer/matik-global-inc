"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveTravelCardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  actionText?: string;
  href: string;
  onActionClick?: (e?: React.MouseEvent) => void;
  className?: string;
  badge?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const InteractiveTravelCard = React.forwardRef<
  HTMLDivElement,
  InteractiveTravelCardProps
>(
  (
    {
      title,
      subtitle,
      imageUrl,
      actionText = "Learn more",
      href,
      onActionClick,
      className,
      badge,
      description,
      icon,
    },
    ref
  ) => {
    // 3D Tilt Spring Animation
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const { width, height, left, top } = rect;
      const mouseXVal = e.clientX - left;
      const mouseYVal = e.clientY - top;
      const xPct = mouseXVal / width - 0.5;
      const yPct = mouseYVal / height - 0.5;
      mouseX.set(xPct);
      mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const handleCardClick = (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;
      // Ensure clicks anywhere on the card body/text do NOT trigger any redirect
      if (!target.closest("a")) {
        e.stopPropagation();
      }
    };

    return (
      <div
        style={{ perspective: "1000px" }}
        className={cn("block h-full w-full select-none", className)}
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleCardClick}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative h-full min-h-[380px] w-full rounded-xl bg-transparent transition-colors duration-300 flex flex-col cursor-default"
        >
          {/* Inner 3D card surface matching Manufacturing card styling (p-8, rounded-xl) */}
          <div
            style={{
              transform: "translateZ(30px)",
              transformStyle: "preserve-3d",
            }}
            className="relative h-full w-full rounded-xl bg-[#101E40]/75 border border-blue-500/20 backdrop-blur-md p-8 flex flex-col justify-between flex-1 shadow-xl hover:border-cyan-400/40 hover:bg-[#101E40] hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-300 cursor-default"
          >
            {/* Background Image with dimmed opacity & rounded-xl corners */}
            <img
              src={imageUrl}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover rounded-xl opacity-20 pointer-events-none select-none"
            />

            {/* Bottom-to-top dark gradient overlay for guaranteed contrast */}
            <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-t from-[#050B1A] via-[#050B1A]/85 to-[#050B1A]/60 pointer-events-none" />

            {/* Top Content: Badge, Icon, Title, Description (NO TOP-RIGHT ARROW) */}
            <div 
              style={{
                transform: "translateZ(40px)",
                transformStyle: "preserve-3d",
              }}
              className="relative z-10 flex flex-col flex-1 cursor-default"
            >
              {/* Header row with icon and badge only */}
              <div className="flex items-center justify-between mb-6">
                {icon && (
                  <div
                    style={{ transform: "translateZ(20px)" }}
                    className="w-12 h-12 rounded-lg bg-blue-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                  >
                    {icon}
                  </div>
                )}
                {badge && (
                  <span
                    style={{ transform: "translateZ(15px)" }}
                    className="text-xs uppercase font-space font-semibold tracking-wider text-cyan-300/90 bg-cyan-950/60 px-3 py-1 rounded-md border border-cyan-500/30 backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                )}
              </div>

              {/* Title without any stray chevron */}
              <h3
                style={{ transform: "translateZ(20px)" }}
                className="text-xl sm:text-2xl font-bold font-space text-white mb-3 group-hover:text-cyan-300 transition-colors"
              >
                {title}
              </h3>

              {subtitle && (
                <p
                  style={{ transform: "translateZ(15px)" }}
                  className="text-xs font-semibold text-cyan-400/90 font-space mb-2"
                >
                  {subtitle}
                </p>
              )}

              {/* Full Description - NEVER truncated (shows ERP text in full) */}
              {description && (
                <p
                  style={{ transform: "translateZ(15px)" }}
                  className="text-[#A9B8D6] text-sm sm:text-base font-inter leading-relaxed mb-6"
                >
                  {description}
                </p>
              )}
            </div>

            {/* Bottom Button: ONLY THIS BUTTON REDIRECTS ON CLICK */}
            <div
              style={{
                transform: "translateZ(30px)",
              }}
              className="relative z-20 pt-4 border-t border-blue-500/15 mt-auto"
            >
              <Link
                href={href}
                onClick={onActionClick}
                className="w-full rounded-xl py-3 px-4 text-center font-semibold text-white transition-all font-space text-sm tracking-wide flex items-center justify-center gap-2 bg-blue-600/30 backdrop-blur-md border border-cyan-400/40 hover:bg-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-[0.98] cursor-pointer"
              >
                <span>{actionText}</span>
                <ArrowRight className="h-4 w-4 text-cyan-300 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
);
InteractiveTravelCard.displayName = "InteractiveTravelCard";
