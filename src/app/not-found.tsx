import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center bg-gray-50 py-24 px-4 min-h-[60vh]">
      <div className="text-center max-w-lg">
        <h1 className="text-[120px] font-bold text-[var(--primary)] leading-none mb-4 font-heading">404</h1>
        <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--text)] mb-6 font-heading">Page Not Found</h2>
        <p className="text-[18px] text-[var(--text-muted)] mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-[var(--primary-dark)] transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
