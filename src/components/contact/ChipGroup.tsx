'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface ChipGroupProps {
  label?: string;
  options: readonly string[] | string[];
  selected: string | string[];
  onChange: (value: any) => void;
  multiple?: boolean;
  required?: boolean;
  error?: string;
}

export function ChipGroup({
  label,
  options,
  selected,
  onChange,
  multiple = false,
  required = false,
  error,
}: ChipGroupProps) {
  const isSelected = (opt: string) => {
    if (multiple) {
      return Array.isArray(selected) && selected.includes(opt);
    }
    return selected === opt;
  };

  const handleToggle = (opt: string) => {
    if (multiple) {
      const arr = Array.isArray(selected) ? [...selected] : [];
      if (arr.includes(opt)) {
        onChange(arr.filter((item) => item !== opt));
      } else {
        onChange([...arr, opt]);
      }
    } else {
      onChange(opt);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-xs font-mono uppercase tracking-wider text-muted-text font-semibold flex items-center gap-1 select-none">
          <span>{label}</span>
          {required && <span className="text-ice-cyan text-sm">*</span>}
        </label>
      )}

      <div 
        role={multiple ? 'group' : 'radiogroup'} 
        aria-label={label || 'Selection options'}
        className="flex flex-wrap gap-2.5"
      >
        {options.map((opt) => {
          const active = isSelected(opt);
          return (
            <button
              key={opt}
              type="button"
              role={multiple ? 'checkbox' : 'radio'}
              aria-checked={active}
              onClick={() => handleToggle(opt)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  handleToggle(opt);
                }
              }}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 select-none outline-none focus-visible:ring-2 focus-visible:ring-ice-cyan ${
                active
                  ? 'bg-gradient-to-r from-diamond-blue/30 to-ice-cyan/20 border-2 border-ice-cyan text-surface-text shadow-[0_0_16px_rgba(122,209,250,0.3)]'
                  : 'frosted-glass border border-blue-500/25 text-muted-text hover:text-surface-text hover:border-ice-cyan/40 hover:bg-[#101E40]/60'
              }`}
            >
              <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-colors ${
                active ? 'bg-ice-cyan text-[#050B1A]' : 'border border-blue-500/40'
              }`}>
                {active && <Check className="w-2.5 h-2.5 stroke-[3]" />}
              </span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>

      {error && (
        <p className="text-xs text-rose-400 font-mono mt-0.5">{error}</p>
      )}
    </div>
  );
}
