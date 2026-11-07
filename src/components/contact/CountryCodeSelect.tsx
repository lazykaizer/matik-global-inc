'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, Search, Check, Globe } from 'lucide-react';
import { WORLD_COUNTRIES, CountryCodeItem } from '@/lib/countriesData';

interface CountryCodeSelectProps {
  id?: string;
  value: string;
  onChange: (code: string) => void;
  className?: string;
}

function CountryFlag({
  iso,
  flag,
  country,
  size = 'md',
}: {
  iso: string;
  flag: string;
  country: string;
  size?: 'sm' | 'md';
}) {
  const width = size === 'sm' ? 18 : 22;
  const height = size === 'sm' ? 13 : 16;
  const [hasError, setHasError] = useState(false);

  if (hasError || !iso) {
    return <span className={size === 'sm' ? 'text-sm leading-none shrink-0' : 'text-base leading-none shrink-0'}>{flag}</span>;
  }

  return (
    <span className="inline-flex items-center justify-center shrink-0 overflow-hidden rounded-[3px] border border-white/15 shadow-[0_1px_3px_rgba(0,0,0,0.4)] bg-[#050B1A]">
      <img
        src={`https://flagcdn.com/w40/${iso.toLowerCase()}.png`}
        alt={`${country} flag`}
        width={width}
        height={height}
        className="object-cover"
        style={{ width: `${width}px`, height: `${height}px` }}
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </span>
  );
}

export function CountryCodeSelect({
  id = 'phoneCountryCode',
  value,
  onChange,
  className = '',
}: CountryCodeSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Find the selected country object (or fallback to US +1)
  const selectedCountry = useMemo(() => {
    return (
      WORLD_COUNTRIES.find((c) => c.code === value) ||
      WORLD_COUNTRIES[0] || {
        iso: 'US',
        country: 'United States',
        code: '+1',
        flag: '🇺🇸',
      }
    );
  }, [value]);

  // Filter countries based on search term (name, code, or iso)
  const filteredCountries = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return WORLD_COUNTRIES;

    // Remove leading '+' for code searching
    const codeQuery = q.startsWith('+') ? q.slice(1) : q;

    return WORLD_COUNTRIES.filter((c) => {
      const matchName = c.country.toLowerCase().includes(q);
      const matchIso = c.iso.toLowerCase().includes(q);
      const matchCode = c.code.toLowerCase().includes(q) || c.code.replace('+', '').includes(codeQuery);
      return matchName || matchIso || matchCode;
    });
  }, [search]);

  // Split popular/all when not searching
  const { popularList, remainingList } = useMemo(() => {
    if (search.trim()) {
      return { popularList: [], remainingList: filteredCountries };
    }
    const popular = WORLD_COUNTRIES.filter((c) => c.priority);
    const rest = WORLD_COUNTRIES.filter((c) => !c.priority);
    return { popularList: popular, remainingList: rest };
  }, [filteredCountries, search]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus search input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearch('');
    }
  }, [isOpen]);

  // Handle keyboard escape
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSelect = (code: string) => {
    onChange(code);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative shrink-0 ${className}`} onKeyDown={handleKeyDown}>
      {/* Trigger Button - Auto width with minimum bound so 3-digit codes (+974, +971) never truncate */}
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Country dial code: ${selectedCountry.country} (${selectedCountry.code})`}
        className="min-w-[100px] sm:min-w-[108px] min-h-[44px] px-2.5 sm:px-3 py-2.5 rounded-xl bg-[#050B1A]/80 border border-blue-500/30 text-surface-text text-xs sm:text-sm font-mono flex items-center justify-between gap-1.5 outline-none hover:border-blue-500/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition-all cursor-pointer select-none shrink-0"
      >
        <span className="flex items-center gap-1.5 sm:gap-2">
          <CountryFlag
            iso={selectedCountry.iso}
            flag={selectedCountry.flag}
            country={selectedCountry.country}
            size="sm"
          />
          <span className="font-semibold text-cyan-200 text-xs sm:text-sm whitespace-nowrap">
            {selectedCountry.code}
          </span>
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-muted-text shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-cyan-300' : ''
          }`}
        />
      </button>

      {/* Dropdown Popup */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Select Country Dial Code"
          className="absolute top-full left-0 mt-1.5 w-72 sm:w-80 max-h-80 rounded-2xl bg-[#0B1630] border border-cyan-400/30 shadow-[0_20px_50px_rgba(5,11,26,0.95),0_0_24px_rgba(61,139,255,0.2)] backdrop-blur-2xl z-50 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Search Header */}
          <div className="p-2.5 border-b border-blue-500/20 bg-[#050B1A]/90 sticky top-0 z-10 flex items-center gap-2">
            <Search className="w-4 h-4 text-cyan-400 shrink-0 ml-1" />
            <input
              ref={searchInputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country or code (+91, UK)..."
              className="w-full bg-transparent text-xs sm:text-sm text-surface-text placeholder:text-muted-text/60 outline-none font-mono"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="text-xs text-muted-text hover:text-white px-1.5 py-0.5 rounded cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Countries List */}
          <div className="overflow-y-auto max-h-64 divide-y divide-blue-500/10 no-scrollbar">
            {filteredCountries.length === 0 ? (
              <div className="p-6 text-center text-xs text-muted-text flex flex-col items-center gap-2">
                <Globe className="w-5 h-5 text-muted-text/50" />
                <span>No country found for &quot;{search}&quot;</span>
              </div>
            ) : search.trim() ? (
              // Search Results Flat List
              filteredCountries.map((item) => {
                const isSelected = item.code === value;
                return (
                  <button
                    key={`${item.iso}-${item.code}`}
                    type="button"
                    onClick={() => handleSelect(item.code)}
                    className={`w-full px-3.5 py-2.5 flex items-center justify-between text-left transition-colors cursor-pointer group ${
                      isSelected
                        ? 'bg-blue-600/25 text-cyan-200'
                        : 'hover:bg-blue-500/15 text-surface-text'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <CountryFlag
                        iso={item.iso}
                        flag={item.flag}
                        country={item.country}
                        size="md"
                      />
                      <span className="text-xs sm:text-sm font-medium truncate group-hover:text-cyan-300">
                        {item.country}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span className="text-xs font-mono font-semibold text-cyan-300/90 px-1.5 py-0.5 rounded bg-blue-950/60 border border-blue-500/20">
                        {item.code}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                    </div>
                  </button>
                );
              })
            ) : (
              // Structured: Popular first, then All
              <>
                {/* Popular Group */}
                <div className="px-3 py-1.5 bg-[#071126] text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold sticky top-0 z-[5]">
                  Frequently Selected
                </div>
                {popularList.map((item) => {
                  const isSelected = item.code === value;
                  return (
                    <button
                      key={`pop-${item.iso}-${item.code}`}
                      type="button"
                      onClick={() => handleSelect(item.code)}
                      className={`w-full px-3.5 py-2.5 flex items-center justify-between text-left transition-colors cursor-pointer group ${
                        isSelected
                          ? 'bg-blue-600/25 text-cyan-200'
                          : 'hover:bg-blue-500/15 text-surface-text'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <CountryFlag
                          iso={item.iso}
                          flag={item.flag}
                          country={item.country}
                          size="md"
                        />
                        <span className="text-xs sm:text-sm font-medium truncate group-hover:text-cyan-300">
                          {item.country}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <span className="text-xs font-mono font-semibold text-cyan-300/90 px-1.5 py-0.5 rounded bg-blue-950/60 border border-blue-500/20">
                          {item.code}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                      </div>
                    </button>
                  );
                })}

                {/* All Countries Group */}
                <div className="px-3 py-1.5 bg-[#071126] text-[10px] font-mono uppercase tracking-wider text-muted-text font-bold sticky top-0 z-[5]">
                  All Countries (A–Z)
                </div>
                {remainingList.map((item) => {
                  const isSelected = item.code === value;
                  return (
                    <button
                      key={`all-${item.iso}-${item.code}`}
                      type="button"
                      onClick={() => handleSelect(item.code)}
                      className={`w-full px-3.5 py-2.5 flex items-center justify-between text-left transition-colors cursor-pointer group ${
                        isSelected
                          ? 'bg-blue-600/25 text-cyan-200'
                          : 'hover:bg-blue-500/15 text-surface-text'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <CountryFlag
                          iso={item.iso}
                          flag={item.flag}
                          country={item.country}
                          size="md"
                        />
                        <span className="text-xs sm:text-sm font-medium truncate group-hover:text-cyan-300">
                          {item.country}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <span className="text-xs font-mono font-semibold text-cyan-300/90 px-1.5 py-0.5 rounded bg-blue-950/60 border border-blue-500/20">
                          {item.code}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                      </div>
                    </button>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

