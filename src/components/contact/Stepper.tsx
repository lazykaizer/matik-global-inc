'use client';

import React from 'react';
import { Check } from 'lucide-react';

export type CareerStep = 1 | 2 | 3 | 4; // 4 is Review

interface StepperProps {
  currentStep: CareerStep;
  onStepClick?: (step: CareerStep) => void;
  completedSteps: number[];
}

const STEPS = [
  { step: 1, title: 'About you', label: 'Step 1' },
  { step: 2, title: 'Experience', label: 'Step 2' },
  { step: 3, title: 'Resume & terms', label: 'Step 3' },
  { step: 4, title: 'Review & submit', label: 'Review' },
];

export function Stepper({ currentStep, onStepClick, completedSteps }: StepperProps) {
  return (
    <div className="w-full mb-8">
      {/* Mobile Stepper View (Simplified) */}
      <div className="flex sm:hidden items-center justify-between p-3 rounded-xl frosted-glass border border-blue-500/25 mb-4">
        <div className="flex flex-col">
          <span className="text-[11px] font-mono text-ice-cyan uppercase font-bold tracking-wider">
            {currentStep === 4 ? 'FINAL VERIFICATION' : `STEP ${currentStep} OF 3`}
          </span>
          <span className="font-display text-sm font-bold text-surface-text">
            {STEPS[currentStep - 1]?.title}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all duration-300 ${
                s === currentStep
                  ? 'w-6 bg-ice-cyan'
                  : completedSteps.includes(s)
                  ? 'w-2 bg-emerald-400'
                  : 'w-2 bg-blue-900/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Stepper View (Full Track) */}
      <div className="hidden sm:grid grid-cols-4 gap-3 relative">
        {STEPS.map((s) => {
          const isCurrent = currentStep === s.step;
          const isDone = completedSteps.includes(s.step);
          const isClickable = isDone && onStepClick;

          return (
            <button
              key={s.step}
              type="button"
              disabled={!isClickable && !isCurrent}
              onClick={() => isClickable && onStepClick(s.step as CareerStep)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col gap-1 relative ${
                isCurrent
                  ? 'bg-gradient-to-r from-[#162A58] to-[#101E40] border-ice-cyan/60 shadow-[0_0_16px_rgba(122,209,250,0.2)]'
                  : isDone
                  ? 'frosted-glass border-blue-500/30 hover:border-ice-cyan/40 cursor-pointer'
                  : 'bg-blue-950/20 border-blue-500/10 opacity-60 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono uppercase tracking-wider font-bold ${
                  isCurrent ? 'text-ice-cyan' : isDone ? 'text-emerald-400' : 'text-muted-text'
                }`}>
                  {s.label}
                </span>
                {isDone && (
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </div>
              <span className={`font-display text-xs sm:text-sm font-semibold truncate ${
                isCurrent ? 'text-surface-text' : 'text-muted-text'
              }`}>
                {s.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
