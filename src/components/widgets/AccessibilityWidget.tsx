'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Settings, ZoomIn, ZoomOut, Contrast, Underline, Highlighter, Pause, RotateCcw, X } from 'lucide-react';

type AccessibilitySettings = {
  textSize: 'normal' | 'lg' | 'xl';
  highContrast: boolean;
  underlineLinks: boolean;
  highlightHeadings: boolean;
  pauseAnimations: boolean;
};

const defaultSettings: AccessibilitySettings = {
  textSize: 'normal',
  highContrast: false,
  underlineLinks: false,
  highlightHeadings: false,
  pauseAnimations: false,
};

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('accessibility_settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('accessibility_settings', JSON.stringify(settings));
    const html = document.documentElement;
    
    // Text Size
    html.classList.remove('text-size-lg', 'text-size-xl');
    if (settings.textSize !== 'normal') {
      html.classList.add(`text-size-${settings.textSize}`);
    }

    // High Contrast
    if (settings.highContrast) html.classList.add('high-contrast');
    else html.classList.remove('high-contrast');

    // Underline
    if (settings.underlineLinks) html.classList.add('a11y-underline-links');
    else html.classList.remove('a11y-underline-links');

    // Highlight
    if (settings.highlightHeadings) html.classList.add('a11y-highlight-headings');
    else html.classList.remove('a11y-highlight-headings');

    // Pause Animations
    if (settings.pauseAnimations) html.classList.add('pause-animations');
    else html.classList.remove('pause-animations');
  }, [settings]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    if (typeof settings[key] === 'boolean') {
      setSettings(s => ({ ...s, [key]: !s[key] }));
    }
  };

  const changeTextSize = (dir: 1 | -1) => {
    const sizes = ['normal', 'lg', 'xl'] as const;
    const currentIndex = sizes.indexOf(settings.textSize);
    let newIndex = currentIndex + dir;
    if (newIndex < 0) newIndex = 0;
    if (newIndex > 2) newIndex = 2;
    setSettings(s => ({ ...s, textSize: sizes[newIndex] }));
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start" ref={panelRef}>
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-soft border border-gray-200 p-4 w-72 max-h-[80vh] overflow-y-auto transform origin-bottom-left transition-all">
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
            <h3 className="font-bold text-[var(--text)] text-lg">Accessibility</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close panel" className="text-gray-500 hover:text-[var(--primary)]">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
              <span className="text-sm font-semibold text-[var(--text)]">Text Size</span>
              <div className="flex gap-2">
                <button onClick={() => changeTextSize(-1)} aria-label="Decrease text size" className="p-1.5 bg-white rounded shadow-sm border border-gray-200 hover:border-[var(--primary)] text-[var(--text)]">
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button onClick={() => changeTextSize(1)} aria-label="Increase text size" className="p-1.5 bg-white rounded shadow-sm border border-gray-200 hover:border-[var(--primary)] text-[var(--text)]">
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button 
              onClick={() => toggleSetting('highContrast')}
              className={`w-full flex items-center gap-3 p-3 rounded text-left transition-colors text-[var(--text)] ${settings.highContrast ? 'bg-[var(--primary)] text-white' : 'bg-gray-50 hover:bg-gray-100'}`}
            >
              <Contrast className="w-5 h-5" />
              <span className="text-sm font-semibold">High Contrast</span>
            </button>

            <button 
              onClick={() => toggleSetting('underlineLinks')}
              className={`w-full flex items-center gap-3 p-3 rounded text-left transition-colors text-[var(--text)] ${settings.underlineLinks ? 'bg-[var(--primary)] text-white' : 'bg-gray-50 hover:bg-gray-100'}`}
            >
              <Underline className="w-5 h-5" />
              <span className="text-sm font-semibold">Underline Links</span>
            </button>

            <button 
              onClick={() => toggleSetting('highlightHeadings')}
              className={`w-full flex items-center gap-3 p-3 rounded text-left transition-colors text-[var(--text)] ${settings.highlightHeadings ? 'bg-[var(--primary)] text-white' : 'bg-gray-50 hover:bg-gray-100'}`}
            >
              <Highlighter className="w-5 h-5" />
              <span className="text-sm font-semibold">Highlight Headings</span>
            </button>

            <button 
              onClick={() => toggleSetting('pauseAnimations')}
              className={`w-full flex items-center gap-3 p-3 rounded text-left transition-colors text-[var(--text)] ${settings.pauseAnimations ? 'bg-[var(--primary)] text-white' : 'bg-gray-50 hover:bg-gray-100'}`}
            >
              <Pause className="w-5 h-5" />
              <span className="text-sm font-semibold">Pause Animations</span>
            </button>

            <button 
              onClick={() => setSettings(defaultSettings)}
              className="w-full flex justify-center items-center gap-2 p-3 rounded border border-gray-200 hover:bg-gray-50 text-[var(--text)] transition-colors mt-4"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="text-sm font-semibold">Reset All</span>
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-[var(--widget-blue)] text-white shadow-soft flex items-center justify-center hover:bg-[var(--primary-dark)] transition-transform hover:scale-105"
        aria-label="Open accessibility options"
        aria-expanded={isOpen}
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3"/>
            <path d="M15 10c0-1.66-1.34-3-3-3s-3 1.34-3 3c0 1.3 2.12 4.14 2.65 4.86.18.24.47.38.77.38h0c.3 0 .58-.14.77-.38C12.88 14.14 15 11.3 15 10zm-3 1.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      </button>
    </div>
  );
}
