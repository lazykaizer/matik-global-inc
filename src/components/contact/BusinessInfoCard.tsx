'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Calendar, ArrowUpRight, CheckCircle2, Compass } from 'lucide-react';
import { CONTACT_CONSTANTS } from '@/lib/contactConstants';
import { CONTACT_ANIMATION } from '@/lib/contactAnimationConstants';
import { siteConfig } from '@/config/site';

interface BusinessInfoCardProps {
  isMobile?: boolean;
}

export function BusinessInfoCard({ isMobile = false }: BusinessInfoCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const getCardTransition = (index: number) => {
    if (shouldReduceMotion || isMobile) {
      return { duration: CONTACT_ANIMATION.reducedMotionDurationSec };
    }
    return {
      delay: index * CONTACT_ANIMATION.cardStaggerSec,
      duration: 0.35,
      ease: CONTACT_ANIMATION.easingCurve,
    };
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Card 1: Contact Direct Access Details */}
      <motion.div
        initial={shouldReduceMotion || isMobile ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={getCardTransition(0)}
        className="p-6 sm:p-7 rounded-2xl frosted-glass border border-blue-500/25 shadow-lg flex flex-col gap-5"
      >
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-400/25 bg-[#0B1736]/70 backdrop-blur-md shadow-[0_0_20px_rgba(61,139,255,0.12)] w-fit mb-1">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs uppercase tracking-[0.16em] text-cyan-300 font-space font-semibold">
            Direct Channels
          </span>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          {/* Email */}
          <div className="flex items-start gap-3.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan shrink-0 mt-0.5 group-hover:bg-blue-500/25 transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-mono uppercase text-muted-text">Email</span>
              {CONTACT_CONSTANTS.placeholders.email.startsWith('[') ? (
                <span className="font-mono text-muted-text select-all">
                  {CONTACT_CONSTANTS.placeholders.email}
                </span>
              ) : (
                <a
                  href={`mailto:${CONTACT_CONSTANTS.placeholders.email}`}
                  className="font-mono text-muted-text hover:text-ice-cyan transition-colors select-all"
                >
                  {CONTACT_CONSTANTS.placeholders.email}
                </a>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan shrink-0 mt-0.5 group-hover:bg-blue-500/25 transition-colors">
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-mono uppercase text-muted-text">Phone</span>
              {CONTACT_CONSTANTS.placeholders.phone.startsWith('[') ? (
                <span className="font-mono text-muted-text select-all">
                  {CONTACT_CONSTANTS.placeholders.phone}
                </span>
              ) : (
                <a
                  href={`tel:${CONTACT_CONSTANTS.placeholders.phone.replace(/[^0-9+]/g, '')}`}
                  className="font-mono text-muted-text hover:text-ice-cyan transition-colors select-all"
                >
                  {CONTACT_CONSTANTS.placeholders.phone}
                </a>
              )}
            </div>
          </div>

          {/* Headquarters */}
          <div className="flex items-start gap-3.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan shrink-0 mt-0.5 group-hover:bg-blue-500/25 transition-colors">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-mono uppercase text-muted-text">Headquarters</span>
              <span className="font-mono text-muted-text select-all">
                {CONTACT_CONSTANTS.placeholders.address}
              </span>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-3.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan shrink-0 mt-0.5 group-hover:bg-blue-500/25 transition-colors">
              <Clock className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-mono uppercase text-muted-text">Business Hours</span>
              <span className="font-mono text-muted-text">
                {CONTACT_CONSTANTS.placeholders.hours}
              </span>
            </div>
          </div>
        </div>

        {/* LinkedIn Button */}
        <div className="pt-2 border-t border-blue-500/15">
          <a
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl frosted-glass border border-blue-500/30 hover:border-ice-cyan/50 text-xs font-mono text-surface-text hover:text-ice-cyan flex items-center justify-between transition-colors group cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="fill-current text-ice-cyan"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span>Connect on LinkedIn</span>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>

      {/* Card 2: Fast-Track Call card */}
      <motion.div
        initial={shouldReduceMotion || isMobile ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={getCardTransition(1)}
        className="p-6 rounded-2xl bg-gradient-to-br from-[#101E40] to-[#0B1630] border border-ice-cyan/30 shadow-lg flex flex-col gap-3 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-ice-cyan/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex items-center gap-2 text-ice-cyan">
          <Calendar className="w-4 h-4" />
          <span className="text-xs font-mono uppercase tracking-wider font-bold">Fast-Track Call</span>
        </div>
        <h3 className="font-display text-base font-bold text-surface-text">
          Prefer a direct discussion?
        </h3>
        <p className="text-xs text-muted-text leading-relaxed">
          Speak directly with our enterprise architects and practice leadership regarding your timeline.
        </p>
        <div className="pt-2">
          {/* TODO: Add real calendar booking URL */}
          <a
            href={CONTACT_CONSTANTS.placeholders.bookingUrl}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-display text-xs font-bold text-[#050B1A] bg-gradient-to-r from-diamond-blue via-ice-cyan to-[#bfe8ff] shadow-[0_0_16px_rgba(122,209,250,0.35)] hover:shadow-[0_0_24px_rgba(122,209,250,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Schedule a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>

      {/* Card 3: What happens next */}
      <motion.div
        initial={shouldReduceMotion || isMobile ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={getCardTransition(2)}
        className="p-6 rounded-2xl frosted-glass border border-blue-500/20 flex flex-col gap-3"
      >
        <span className="text-xs font-mono uppercase tracking-wider text-ice-cyan font-bold">
          What happens next
        </span>
        <ul className="flex flex-col gap-2.5 text-xs text-muted-text">
          {CONTACT_CONSTANTS.business.whatHappensNext.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-ice-cyan shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
