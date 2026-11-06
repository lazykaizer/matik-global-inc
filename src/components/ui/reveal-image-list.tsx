"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface ImageSource {
  src: string;
  alt: string;
}

export interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
  number?: string;
  description?: string;
  tags?: string[];
  flagship?: boolean;
}

export function RevealImageListItem({
  text,
  images,
  number,
  description,
  tags,
  flagship,
}: ShowImageListItemProps) {
  const [isActive, setIsActive] = useState(false);

  // Card container anchored directly to the text (w-fit)
  const container =
    "pointer-events-none absolute right-2 sm:right-6 md:right-8 -top-3 sm:-top-6 md:-top-8 z-40 h-28 w-20 sm:h-36 sm:w-28 md:h-44 md:w-34 lg:h-48 lg:w-36";

  const effect =
    "relative duration-500 delay-100 shadow-none scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] group-hover:w-full group-hover:h-full w-full h-full overflow-hidden transition-all rounded-xl sm:rounded-2xl border border-white/20 bg-[#0B1630]";

  return (
    <div
      onClick={() => setIsActive((prev) => !prev)}
      className={cn(
        "group relative w-full overflow-visible py-6 sm:py-8 md:py-10 border-b border-blue-500/15 last:border-b-0 cursor-pointer select-none transition-colors hover:border-cyan-400/40 hover:z-30",
        isActive && "z-30",
      )}
    >
      {/* Number & Flagship badge */}
      <div className="flex items-center gap-3 mb-2 sm:mb-3">
        {number && (
          <span className="text-xs sm:text-sm font-mono font-bold text-cyan-400 tracking-wider">
            {number}
          </span>
        )}
        {flagship && (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-cyan-400/15 border border-cyan-400/40 text-cyan-300 font-space uppercase tracking-wider">
            Flagship Domain
          </span>
        )}
      </div>

      {/* Main Heading with Cards anchored DIRECTLY on top of the text */}
      <div className="relative w-fit inline-block overflow-visible">
        <h3
          className={cn(
            "text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-space text-white tracking-tight transition-all duration-500",
            "group-hover:opacity-40",
            isActive && "opacity-40",
          )}
        >
          {text}
        </h3>

        {/* Back Image (Underneath) */}
        <div className={container}>
          <div
            className={cn(
              effect,
              isActive &&
                "scale-100 opacity-100 shadow-[0_20px_45px_rgba(0,0,0,0.85)] w-full h-full",
            )}
          >
            <img
              alt={images[1].alt}
              src={images[1].src}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Front Image (Rotated & Offset on hover) */}
        <div
          className={cn(
            container,
            "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500",
            "group-hover:translate-x-5 sm:group-hover:translate-x-7 md:group-hover:translate-x-9 group-hover:translate-y-3 sm:group-hover:translate-y-5 md:group-hover:translate-y-6 group-hover:rotate-12",
            isActive &&
              "translate-x-5 sm:translate-x-7 md:translate-x-9 translate-y-3 sm:translate-y-5 md:translate-y-6 rotate-12",
          )}
        >
          <div
            className={cn(
              effect,
              "duration-200",
              isActive &&
                "scale-100 opacity-100 shadow-[0_20px_45px_rgba(0,0,0,0.85)] w-full h-full",
            )}
          >
            <img
              alt={images[0].alt}
              src={images[0].src}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Subtitle / Description */}
      {description && (
        <p className="text-[#A9B8D6] text-xs sm:text-sm md:text-base font-inter mt-3 max-w-2xl transition-colors group-hover:text-slate-200">
          {description}
        </p>
      )}

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] sm:text-xs font-medium font-space px-2 sm:px-2.5 py-0.5 rounded bg-[#050B1A]/80 border border-blue-500/20 text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export const defaultIndustriesData: ShowImageListItemProps[] = [
  {
    number: "01",
    text: "Life Sciences & Biotech",
    description: "Compliant systems and clean data from early stage to commercial launch.",
    tags: ["GxP & 21 CFR Part 11", "FDA Validation Ready", "Clinical Data Pipelines"],
    flagship: true,
    images: [
      {
        src: "/images/industries/life-sciences-1.jpg",
        alt: "Life Sciences DNA Double Helix Structure",
      },
      {
        src: "/images/industries/life-sciences-2.jpg",
        alt: "Biotechnology Laboratory & Research",
      },
    ],
  },
  {
    number: "02",
    text: "Manufacturing",
    description: "Connected operations, from the shop floor to the finance team.",
    tags: ["Shop-Floor Telemetry", "Supply Chain ERP"],
    images: [
      {
        src: "/images/industries/manufacturing-1.jpg",
        alt: "Industrial Machinery Blueprints & Gears",
      },
      {
        src: "/images/industries/manufacturing-2.jpg",
        alt: "Automated Robotic Assembly Conveyor",
      },
    ],
  },
  {
    number: "03",
    text: "Consumer Products",
    description: "Forecasting, ERP and analytics for fast-moving brands.",
    tags: ["Demand Forecasting", "Omnichannel Margins"],
    images: [
      {
        src: "/images/industries/consumer-products-1.jpg",
        alt: "Consumer Retail & E-Commerce Display",
      },
      {
        src: "/images/industries/consumer-products-2.jpg",
        alt: "Smart Consumer Devices & Electronics",
      },
    ],
  },
  {
    number: "04",
    text: "Financial Services",
    description: "Compliant platforms, reporting and controls for regulated firms.",
    tags: ["SEC / FINRA Controls", "Immutable Audit Trails"],
    images: [
      {
        src: "/images/industries/financial-services-1.jpg",
        alt: "Financial Audit Balance Sheet & Calculator",
      },
      {
        src: "/images/industries/financial-services-2.jpg",
        alt: "Trading & Spreadsheets Workspace",
      },
    ],
  },
  {
    number: "05",
    text: "Growth-Stage SMBs",
    description: "The systems of a larger company, sized for yours.",
    tags: ["Fractional Scale", "Zero Overhead Bloat"],
    images: [
      {
        src: "/images/industries/growth-stage-1.jpg",
        alt: "Growth Ladder Step Blocks",
      },
      {
        src: "/images/industries/growth-stage-2.jpg",
        alt: "Scaling Momentum & Upward Arrow",
      },
    ],
  },
];

export function RevealImageList({
  items = defaultIndustriesData,
  className,
}: {
  items?: ShowImageListItemProps[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col w-full overflow-visible", className)}>
      {items.map((item, index) => (
        <RevealImageListItem
          key={item.text || index}
          text={item.text}
          images={item.images}
          number={item.number}
          description={item.description}
          tags={item.tags}
          flagship={item.flagship}
        />
      ))}
    </div>
  );
}
