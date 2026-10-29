'use client';

import React, { useState } from 'react';
import { X, Plus, Sparkles } from 'lucide-react';

interface TagInputProps {
  label: string;
  tags: string[];
  onChange: (tags: string[]) => void;
  suggestions?: string[];
  minTags?: number;
  maxTags?: number;
  required?: boolean;
  error?: string;
  placeholder?: string;
}

export function TagInput({
  label,
  tags,
  onChange,
  suggestions = [],
  minTags = 1,
  maxTags = 15,
  required = false,
  error,
  placeholder = 'Type a skill and press Enter...',
}: TagInputProps) {
  const [inputValue, setInputValue] = useState('');

  const addTag = (tagToAdd: string) => {
    const trimmed = tagToAdd.trim();
    if (!trimmed) return;
    if (tags.length >= maxTags) return;
    if (tags.some((t) => t.toLowerCase() === trimmed.toLowerCase())) return;

    onChange([...tags, trimmed]);
    setInputValue('');
  };

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter((t) => t !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  const availableSuggestions = suggestions.filter(
    (s) => !tags.some((t) => t.toLowerCase() === s.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between">
        <label className="text-xs font-mono uppercase tracking-wider text-muted-text font-semibold flex items-center gap-1 select-none">
          <span>{label}</span>
          {required && <span className="text-ice-cyan text-sm">*</span>}
        </label>
        <span className="text-[11px] font-mono text-muted-text">
          {tags.length} / {maxTags} (min {minTags})
        </span>
      </div>

      {/* Main Tag Container Box */}
      <div className={`min-h-[50px] p-2.5 rounded-xl bg-[#050B1A]/80 border transition-all duration-200 flex flex-wrap items-center gap-2 focus-within:ring-2 focus-within:ring-ice-cyan focus-within:border-ice-cyan ${
        error ? 'border-rose-500/80' : 'border-blue-500/30 hover:border-blue-500/50'
      }`}>
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/20 border border-ice-cyan/40 text-ice-cyan text-xs sm:text-sm font-medium animate-in fade-in"
          >
            <span>{tag}</span>
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="hover:bg-ice-cyan/20 p-0.5 rounded-full text-ice-cyan hover:text-white transition-colors"
              aria-label={`Remove ${tag}`}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </span>
        ))}

        {tags.length < maxTags && (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={tags.length === 0 ? placeholder : 'Add more...'}
            className="flex-1 min-w-[140px] bg-transparent text-sm text-surface-text placeholder:text-muted-text/50 outline-none px-1 py-1"
          />
        )}
      </div>

      {/* Suggestions if any */}
      {availableSuggestions.length > 0 && tags.length < maxTags && (
        <div className="flex flex-col gap-1.5 pt-1">
          <span className="text-[11px] font-mono text-muted-text/80 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-ice-cyan" /> Suggested for your selected areas:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {availableSuggestions.slice(0, 8).map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => addTag(suggestion)}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-950/40 hover:bg-blue-900/50 border border-blue-500/25 text-muted-text hover:text-ice-cyan transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3 h-3" />
                <span>{suggestion}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {error && (
        <p className="text-xs text-rose-400 font-mono mt-0.5">{error}</p>
      )}
    </div>
  );
}
