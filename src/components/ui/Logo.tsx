import React from 'react';
import { siteConfig } from '@/config/site';

export function Logo({ className = '', inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`relative w-8 h-8 rounded-full border-2 ${inverted ? 'border-cyan-400' : 'border-[var(--logo-navy)]'} flex items-center justify-center`}>
        {/* Wireframe globe representation */}
        <div className={`absolute inset-0 rounded-full border ${inverted ? 'border-cyan-300 opacity-40' : 'border-[var(--logo-navy)] opacity-50'} rotate-45 scale-x-50`}></div>
        <div className={`absolute inset-0 rounded-full border ${inverted ? 'border-cyan-300 opacity-40' : 'border-[var(--logo-navy)] opacity-50'} -rotate-45 scale-x-50`}></div>
        {/* Growth Arrow */}
        <svg viewBox="0 0 24 24" className={`w-5 h-5 ${inverted ? 'text-cyan-300' : 'text-[var(--logo-green)]'} absolute z-10 -right-1 -top-1 stroke-current stroke-2 fill-none`} strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`${inverted ? 'text-white' : 'text-[var(--logo-navy)]'} font-bold text-xl leading-none tracking-tight font-space`}>{siteConfig.shortName}</span>
        <span className={`${inverted ? 'text-cyan-400' : 'text-[var(--logo-green)]'} font-bold text-[0.55rem] leading-none tracking-wider mt-0.5 font-space`}>{siteConfig.tagline}</span>
      </div>
    </div>
  );
}
