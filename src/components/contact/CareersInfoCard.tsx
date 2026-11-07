'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Briefcase, Target, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CONTACT_CONSTANTS } from '@/lib/contactConstants';
import { CONTACT_ANIMATION } from '@/lib/contactAnimationConstants';

interface CareersInfoCardProps {
  isMobile?: boolean;
}

export function CareersInfoCard({ isMobile = false }: CareersInfoCardProps) {
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
      {/* Card 0: Careers Inquiries Direct Card */}
      <motion.div
        initial={shouldReduceMotion || isMobile ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={getCardTransition(0)}
        className="p-6 sm:p-7 rounded-2xl frosted-glass border border-blue-500/25 shadow-lg flex flex-col gap-4"
      >
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-400/25 bg-[#0B1736]/70 backdrop-blur-md shadow-[0_0_20px_rgba(61,139,255,0.12)] w-fit mb-1">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs uppercase tracking-[0.16em] text-cyan-300 font-space font-semibold">
            Talent Channels
          </span>
        </div>

        <div className="flex items-start gap-3.5 group">
          <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-ice-cyan/30 flex items-center justify-center text-ice-cyan shrink-0 mt-0.5 group-hover:bg-blue-500/25 transition-colors">
            <Mail className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase text-muted-text">Careers Email</span>
            {CONTACT_CONSTANTS.placeholders.careersEmail.startsWith('[') ? (
              <span className="font-mono text-muted-text select-all">
                {CONTACT_CONSTANTS.placeholders.careersEmail}
              </span>
            ) : (
              <a
                href={`mailto:${CONTACT_CONSTANTS.placeholders.careersEmail}`}
                className="font-mono text-muted-text hover:text-ice-cyan transition-colors select-all"
              >
                {CONTACT_CONSTANTS.placeholders.careersEmail}
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Card 1: Why Matic */}
      <motion.div
        initial={shouldReduceMotion || isMobile ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={getCardTransition(1)}
        className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#101E40] to-[#0B1630] border border-blue-500/25 shadow-lg flex flex-col gap-4 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-diamond-blue/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="flex items-center gap-2 text-ice-cyan">
          <Target className="w-4 h-4" />
          <span className="text-xs font-mono uppercase tracking-wider font-bold">Why Matic</span>
        </div>

        <ul className="flex flex-col gap-3 text-xs sm:text-sm text-surface-text">
          {CONTACT_CONSTANTS.careers.whyMaticPoints.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed text-surface-text/90">{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Card 2: What happens next */}
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
          {CONTACT_CONSTANTS.careers.whatHappensNext.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-ice-cyan shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Card 3: Retention Policy Note */}
      <motion.div
        initial={shouldReduceMotion || isMobile ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={getCardTransition(3)}
        className="p-4 rounded-xl frosted-glass border border-blue-500/15 flex items-start gap-2.5"
      >
        <ShieldCheck className="w-4 h-4 text-muted-text shrink-0 mt-0.5" />
        <p className="text-[11px] font-mono text-muted-text leading-relaxed">
          {CONTACT_CONSTANTS.careers.dataRetentionNote.split('See our Privacy Policy.')[0]}
          See our{' '}
          <Link href="/privacypolicy" className="text-ice-cyan underline hover:text-white transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
      </motion.div>
    </div>
  );
}
