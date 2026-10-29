"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "motion/react";

export interface CardProps {
  number: string;
  title: string;
  description: string;
  colorTheme?: "orange" | "blue" | "purple" | "cyan";
  className?: string;
  rotate?: string;
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

export const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

export const Card = ({
  number,
  title,
  description,
  colorTheme = "blue",
  className = "",
  rotate = "",
  colors: customColors,
}: CardProps) => {
  const defaultBgColors: Record<string, string> = {
    orange: "bg-orange-500/10 dark:bg-orange-500/10",
    blue: "bg-blue-500/10 dark:bg-blue-500/10",
    purple: "bg-purple-500/10 dark:bg-purple-500/10",
    cyan: "bg-cyan-500/10 dark:bg-cyan-500/10",
  };
  const defaultTextColors: Record<string, string> = {
    orange: "text-orange-400 dark:text-orange-400",
    blue: "text-blue-400 dark:text-blue-400",
    purple: "text-purple-400 dark:text-purple-400",
    cyan: "text-cyan-300 dark:text-cyan-300",
  };
  const defaultBorderColors: Record<string, string> = {
    orange: "border-orange-500/30 dark:border-orange-500/30",
    blue: "border-blue-500/30 dark:border-blue-500/30",
    purple: "border-purple-500/30 dark:border-purple-500/30",
    cyan: "border-cyan-400/30 dark:border-cyan-400/30",
  };

  const bgColor = customColors?.bg || defaultBgColors[colorTheme] || defaultBgColors.blue;
  const textColor = customColors?.text || defaultTextColors[colorTheme] || defaultTextColors.blue;
  const borderColor = customColors?.border || defaultBorderColors[colorTheme] || defaultBorderColors.blue;

  return (
    <div
      className={`relative w-full transition-all duration-300 hover:z-30 hover:scale-105 hover:rotate-0 ${rotate} ${className}`}
    >
      <div className="bg-[#0B1630]/90 p-3 rounded-[24px] shadow-[0_12px_28px_rgba(0,0,0,0.5)] border border-blue-500/20 backdrop-blur-md h-full flex flex-col">
        <Pin className={`w-8 h-8 ${textColor} z-20 mb-4 mx-auto shrink-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]`} />
        <div
          className={`${bgColor} border ${borderColor} rounded-[16px] p-5 h-full flex flex-col relative overflow-hidden flex-1`}
        >
          <span
            className={`${textColor} text-3xl sm:text-4xl font-space font-bold mb-3`}
          >
            {number}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-space text-white leading-tight mb-2.5">
            {title}
          </h3>
          <p className="text-[#A9B8D6] text-sm leading-relaxed font-inter">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export interface Step {
  title: string;
  description: string;
  colorTheme?: "orange" | "blue" | "purple" | "cyan";
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

export interface StepPosition {
  className?: string;
  rotate?: string;
}

export interface HowItWorksProps {
  features?: Step[];
  className?: string;
  stepPositions?: StepPosition[];
  layout?: "vertical" | "horizontal";
  showBackgroundLines?: boolean;
}

const DEFAULT_CARD_POSITIONS: StepPosition[] = [
  { className: "md:absolute md:top-0 md:left-[15%]", rotate: "rotate-8" },
  {
    className: "md:absolute md:top-[120px] md:right-[15%]",
    rotate: "-rotate-8",
  },
  { className: "md:absolute md:top-[450px] md:left-[15%]", rotate: "rotate-8" },
  {
    className: "md:absolute md:top-[570px] md:right-[10%]",
    rotate: "-rotate-8",
  },
  { className: "md:absolute md:top-[850px] md:left-[15%]", rotate: "rotate-8" },
];

const DEFAULT_HORIZONTAL_POSITIONS: StepPosition[] = [
  { rotate: "rotate-2" },
  { rotate: "-rotate-2" },
  { rotate: "rotate-2" },
  { rotate: "-rotate-2" },
];

export default function HowItWorks({
  features,
  className = "",
  stepPositions,
  layout = "vertical",
  showBackgroundLines = true,
}: HowItWorksProps) {
  const defaultFeatures: Step[] = [
    {
      title: "Create Account",
      description:
        "Sign up in minutes. Enter your details and verify your email to get started.",
      colorTheme: "orange",
    },
    {
      title: "Verify Identity",
      description:
        "Complete your profile verification to ensure secure transactions and compliance.",
      colorTheme: "blue",
    },
    {
      title: "Select Plan",
      description:
        "Choose from a variety of investment plans tailored to your financial goals.",
      colorTheme: "purple",
    },
    {
      title: "Analyze & Invest",
      description:
        "Review returns and make your first investment with confidence.",
      colorTheme: "orange",
    },
    {
      title: "Track Growth",
      description:
        "Monitor your portfolio in real-time and watch your wealth grow over time.",
      colorTheme: "blue",
    },
  ];

  const data = features && features.length > 0 ? features : defaultFeatures;

  if (layout === "horizontal") {
    const horizontalPositions = stepPositions || DEFAULT_HORIZONTAL_POSITIONS;

    return (
      <LazyMotion features={domAnimation}>
        <div className={`relative w-full ${className}`}>
          {showBackgroundLines && (
            <>
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.06] dark:opacity-[0.08]"
                style={{
                  backgroundImage: "linear-gradient(#7FD6FF 1px, transparent 1px)",
                  backgroundSize: "100% 32px",
                  marginTop: "4px",
                }}
              />
            </>
          )}

          <div className="relative z-10 w-full pt-4 pb-2">
            {/* Desktop Animated Connecting Track */}
            {data.length > 1 && (
              <svg
                className="absolute top-10 left-0 w-full h-8 pointer-events-none hidden lg:block z-0"
                viewBox="0 0 1000 40"
                preserveAspectRatio="none"
              >
                {(() => {
                  const segCount = data.length;
                  const stepX = 1000 / segCount;
                  let d = "";
                  for (let i = 0; i < segCount - 1; i++) {
                    const startX = stepX * i + stepX * 0.5;
                    const endX = stepX * (i + 1) + stepX * 0.5;
                    const midX = (startX + endX) / 2;
                    const waveY1 = i % 2 === 0 ? 10 : 30;
                    const waveY2 = i % 2 === 0 ? 30 : 10;
                    if (i === 0) {
                      d = `M ${startX} 20 C ${midX - 25} ${waveY1}, ${midX + 25} ${waveY2}, ${endX} 20`;
                    } else {
                      d += ` C ${midX - 25} ${waveY1}, ${midX + 25} ${waveY2}, ${endX} 20`;
                    }
                  }
                  return (
                    <m.path
                      d={d}
                      stroke="currentColor"
                      className="text-cyan-400/60"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{
                        strokeDashoffset: -140,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  );
                })()}
              </svg>
            )}

            {/* Grid of Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {data.map((step, index) => {
                const position = horizontalPositions[index % horizontalPositions.length];
                return (
                  <Card
                    key={step.title}
                    number={`0${index + 1}`}
                    title={step.title}
                    description={step.description}
                    colorTheme={step.colorTheme || "cyan"}
                    colors={step.colors}
                    rotate={position?.rotate}
                    className={position?.className}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </LazyMotion>
    );
  }

  // Default Vertical Zig-Zag Layout
  const positions = stepPositions || DEFAULT_CARD_POSITIONS;

  let height = 1130;
  if (data.length === 1) height = 400;
  else if (data.length === 2) height = 450;
  else if (data.length === 3) height = 800;
  else if (data.length === 4) height = 900;
  else height = 1130;

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`bg-white dark:bg-black max-md:pt-10 max-md:pb-25 md:py-20 px-8 relative ${className}`}
      >
        {showBackgroundLines && (
          <>
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.15]"
              style={{
                backgroundImage: "linear-gradient(#000 1px, transparent 1px)",
                backgroundSize: "100% 32px",
                marginTop: "4px",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-[0.1]"
              style={{
                backgroundImage: "linear-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "100% 32px",
                marginTop: "4px",
              }}
            />
          </>
        )}
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className="relative w-full max-w-[1000px] mx-auto flex flex-col space-y-8 md:space-y-0 md:block h-auto md:h-[var(--md-height)]"
            style={{ "--md-height": `${height}px` } as React.CSSProperties}
          >
            {data.length > 1 && (
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
                viewBox={`0 0 1000 ${height}`}
                preserveAspectRatio="none"
              >
                {(() => {
                  const pathD = data.reduce((acc, _, index) => {
                    if (index >= data.length - 1) return acc;
                    if (index === 0)
                      return "M 290 150 C 500 150, 550 270, 710 270"; // 1 -> 2
                    if (index === 1)
                      return acc + " C 850 270, 500 350, 290 450"; // 2 -> 3
                    if (index === 2)
                      return acc + " C 290 600, 550 720, 750 720"; // 3 -> 4
                    if (index === 3)
                      return acc + " C 950 720, 500 800, 290 850"; // 4 -> 5
                    return acc;
                  }, "");
                  return (
                    <m.path
                      d={pathD}
                      stroke="currentColor"
                      className="text-neutral-300 dark:text-neutral-700"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{
                        strokeDashoffset: -140, // Multiple of 14 (8+6) for seamless loop
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  );
                })()}
              </svg>
            )}

            {data.map((step, index) => {
              const position = positions[index % positions.length];

              return (
                <Card
                  key={step.title}
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  colorTheme={step.colorTheme || "blue"}
                  colors={step.colors}
                  rotate={position?.rotate}
                  className={position?.className}
                />
              );
            })}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
