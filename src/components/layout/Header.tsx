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

  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDesktopDropdown(null);
    closeMobileMenu();
    if (typeof document !== 'undefined') {
      (document.activeElement as HTMLElement)?.blur();
    }
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.header-dropdown-container')) {
        setDesktopDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDesktopDropdown(null);
        closeMobileMenu();
      }
    };
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navLinks = [
    { 
      name: 'Services', 
      type: 'dropdown',
      items: siteConfig.services
    },
    { name: 'Our Company', path: '/ourcompany' },
    { name: 'Contact Us', path: '/contactus' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#050B1A]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.7)] border-b border-blue-500/25' 
        : 'bg-[#050B1A] border-b border-blue-500/20'
    }`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0" onClick={closeMobileMenu}>
            <Logo inverted={true} />
          </Link>

          {/* Desktop Nav on the Right + Mobile Menu Trigger */}
          <div className="flex items-center h-full">
            <nav className="hidden md:flex space-x-7 lg:space-x-9 h-full items-center">
              {navLinks.map((link) => {
                const isDropdownOpen = desktopDropdown === link.name;
                return (
                  <div 
                    key={link.name} 
                    className="relative group h-full flex items-center header-dropdown-container"
                    onMouseEnter={() => {
                      if (link.type === 'dropdown') setDesktopDropdown(link.name);
                    }}
                    onMouseLeave={() => {
                      if (link.type === 'dropdown') setDesktopDropdown(null);
                    }}
                  >
                    {link.type === 'dropdown' ? (
                      <>
                        <button 
                          type="button"
                          onClick={() => setDesktopDropdown(isDropdownOpen ? null : link.name)}
                          aria-expanded={isDropdownOpen}
                          className={`flex items-center gap-1 font-semibold text-[15px] transition-colors focus:outline-none a11y-focus px-2 py-2 cursor-pointer font-space ${
                            link.items?.some(i => i.path === pathname) 
                              ? 'text-cyan-400' 
                              : 'text-slate-200 hover:text-cyan-300'
                          }`}
                        >
                          {link.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                        </button>
                        <div 
                          className={`absolute top-[80px] left-0 w-64 rounded-b-xl border border-blue-500/25 bg-[#0B1630] shadow-2xl transition-all duration-200 py-2 ${
                            isDropdownOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
                          }`}
                        >
                          {link.items?.map(sub => (
                            <Link 
                              key={sub.name} 
                              href={sub.path}
                              onClick={() => {
                                setDesktopDropdown(null);
                                if (typeof document !== 'undefined') {
                                  (document.activeElement as HTMLElement)?.blur();
                                }
                              }}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                pathname === sub.path 
                                  ? 'text-cyan-400 font-bold bg-blue-950/40' 
                                  : 'text-slate-300 hover:bg-[#101E40] hover:text-white'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link 
                        href={link.path || '#'}
                        className={`font-semibold text-[15px] transition-colors relative a11y-focus px-2 py-2 font-space ${
                          pathname === link.path ? 'text-cyan-400' : 'text-slate-200 hover:text-cyan-300'
                        }`}
                      >
                        {link.name}
                        <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 transition-transform origin-left ${
                          pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}></span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center ml-4">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-slate-200 hover:text-cyan-300 focus:outline-none"
                aria-label="Open main menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu (Midnight Diamond dark theme) */}
      <div className={`fixed inset-0 z-[60] bg-[#050B1A] text-slate-100 transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-20 px-4 flex items-center justify-between border-b border-blue-500/20 bg-[#050B1A]">
          <Logo inverted={true} />
          <button 
            onClick={closeMobileMenu}
            className="p-2 text-slate-300 hover:text-cyan-300 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-80px)] px-4 py-6 flex flex-col gap-4 bg-[#050B1A]">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-blue-500/15 pb-4">
              {link.type === 'dropdown' ? (
                <div>
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    className="flex items-center justify-between w-full text-lg font-bold text-slate-200 py-2 font-space"
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? 'rotate-180 text-cyan-400' : 'text-slate-400'}`} />
                  </button>
                  <div className={`flex flex-col pl-4 gap-2 mt-2 overflow-hidden transition-all duration-200 ${
                    activeDropdown === link.name ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {link.items?.map(sub => (
                      <Link 
                        key={sub.name} 
                        href={sub.path}
                        onClick={closeMobileMenu}
                        className={`block text-base py-1.5 transition-colors ${
                          pathname === sub.path 
                            ? 'text-cyan-400 font-bold' 
                            : 'text-slate-300 hover:text-cyan-300'
                        }`}
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
                  className={`block text-lg font-bold py-2 font-space transition-colors ${
                    pathname === link.path ? 'text-cyan-400' : 'text-slate-200 hover:text-cyan-300'
                  }`}
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
