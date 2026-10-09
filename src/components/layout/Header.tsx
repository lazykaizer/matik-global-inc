'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { Logo } from '@/components/ui/Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Engagement Models', 
      type: 'dropdown',
      items: siteConfig.services
    },
    { 
      name: 'Our Company', 
      type: 'dropdown',
      items: [
        { name: 'Our company', path: '/ourcompany' }
      ]
    },
    { name: 'Contact Us', path: '/contactus' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-[var(--surface)] transition-shadow duration-300 ${isScrolled ? 'shadow-soft border-b border-gray-100' : 'border-b border-gray-100'}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0" onClick={closeMobileMenu}>
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 h-full items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                {link.type === 'dropdown' ? (
                  <>
                    <button 
                      className={`flex items-center gap-1 font-semibold text-[15px] transition-colors focus:outline-none a11y-focus px-2 py-2 ${(link.items?.some(i => i.path === pathname)) ? 'text-[var(--primary)]' : 'text-[var(--text)] hover:text-[var(--primary)]'}`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-[80px] left-0 w-64 bg-white shadow-soft rounded-b-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 py-2">
                      {link.items?.map(sub => (
                        <Link 
                          key={sub.name} 
                          href={sub.path}
                          className={`block px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-[var(--primary)] ${pathname === sub.path ? 'text-[var(--primary)] font-bold' : 'text-[var(--text-muted)]'}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    href={link.path || '#'}
                    className={`font-semibold text-[15px] transition-colors relative group-hover:text-[var(--primary)] a11y-focus px-2 py-2 ${pathname === link.path ? 'text-[var(--primary)]' : 'text-[var(--text)]'}`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--primary)] transition-transform origin-left ${pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="text-[var(--text)] hover:text-[var(--primary)] p-2 focus:outline-none"
              aria-label="Open main menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div className={`fixed inset-0 z-[60] bg-white transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-20 px-4 flex items-center justify-between border-b border-gray-100">
          <Logo />
          <button 
            onClick={closeMobileMenu}
            className="p-2 text-[var(--text)] hover:text-[var(--primary)]"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-80px)] px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-gray-100 pb-4">
              {link.type === 'dropdown' ? (
                <div>
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    className="flex items-center justify-between w-full text-lg font-bold text-[var(--text)] py-2"
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`flex flex-col pl-4 gap-3 mt-2 overflow-hidden transition-all ${activeDropdown === link.name ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    {link.items?.map(sub => (
                      <Link 
                        key={sub.name} 
                        href={sub.path}
                        onClick={closeMobileMenu}
                        className={`block text-base ${pathname === sub.path ? 'text-[var(--primary)] font-bold' : 'text-[var(--text-muted)]'}`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  href={link.path || '#'}
                  onClick={closeMobileMenu}
                  className={`block text-lg font-bold py-2 ${pathname === link.path ? 'text-[var(--primary)]' : 'text-[var(--text)]'}`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
