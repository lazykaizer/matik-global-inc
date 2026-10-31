'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/button';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import {
  CodeIcon,
  Brain,
  LayersIcon,
  Shield,
  FileText,
  Users,
  Handshake,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

type LinkItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
  badge?: string;
};

const serviceLinks: LinkItem[] = [
  {
    title: 'AI & Machine Learning',
    href: '/aiml',
    description: 'Production AI, LLMs & validated models',
    icon: Brain,
    badge: 'Popular',
  },
  {
    title: 'Application Development',
    href: '/applications',
    description: 'Scalable cloud, web & mobile engineering',
    icon: CodeIcon,
  },
  {
    title: 'Enterprise ERP',
    href: '/erp',
    description: 'SAP, Oracle, NetSuite & cloud ERP workflows',
    icon: LayersIcon,
  },
  {
    title: 'Regulatory Compliances',
    href: '/compliances',
    description: 'SOC 2, HIPAA, GDPR, ISO 27001 & GxP validation',
    icon: Shield,
  },
  {
    title: 'Accounting & Taxation',
    href: '/accountingtax',
    description: 'Corporate audit, tax compliance & bookkeeping',
    icon: FileText,
  },
];

const companyLinks: LinkItem[] = [
  {
    title: 'Our Company',
    href: '/ourcompany',
    description: 'Our mission, leadership & global presence',
    icon: Users,
  },
  {
    title: 'Contact Us',
    href: '/contactus',
    description: 'Book a consultation or talk with our team',
    icon: Handshake,
  },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const scrolled = useScroll(15);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#050B1A]/95 supports-[backdrop-filter]:bg-[#050B1A]/85 border-b border-blue-500/25 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
          : 'bg-[#050B1A]/85 border-b border-blue-500/15 backdrop-blur-md'
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo (Left) */}
        <Link href="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
          <Logo inverted={true} />
        </Link>

        {/* Desktop Nav on the Right (Services, Our Company, Contact Us) */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1 lg:gap-2">
              {/* 1. Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 data-[state=open]:bg-white/10 text-slate-200 hover:text-cyan-300 data-[state=open]:text-cyan-300 font-semibold text-[15px] font-space tracking-wide h-10 px-3.5 rounded-lg transition-colors cursor-pointer">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2">
                  <div className="w-[340px] sm:w-[420px] p-1.5">
                    <div className="grid grid-cols-1 gap-1">
                      {serviceLinks.map((item) => (
                        <ListItem
                          key={item.title}
                          {...item}
                          active={pathname === item.href}
                        />
                      ))}
                    </div>
                    <div className="mt-2.5 pt-2.5 border-t border-blue-500/15 px-2 flex items-center justify-between text-xs">
                      <span className="text-muted-text font-light">Custom enterprise requirements?</span>
                      <Link
                        href="/contactus"
                        className="text-cyan-300 hover:text-cyan-200 font-medium inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Talk to an Architect</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 2. Our Company Link */}
              <NavigationMenuItem>
                <Link
                  href="/ourcompany"
                  className={cn(
                    'inline-flex h-10 items-center justify-center rounded-lg px-3.5 py-2 text-[15px] font-semibold font-space tracking-wide transition-colors hover:text-cyan-300 hover:bg-white/5',
                    pathname === '/ourcompany' ? 'text-cyan-400 font-bold bg-white/5' : 'text-slate-200'
                  )}
                >
                  Our Company
                </Link>
              </NavigationMenuItem>

              {/* 3. Contact Us Link */}
              <NavigationMenuItem>
                <Link
                  href="/contactus"
                  className={cn(
                    'inline-flex h-10 items-center justify-center rounded-lg px-3.5 py-2 text-[15px] font-semibold font-space tracking-wide transition-colors hover:text-cyan-300 hover:bg-white/5',
                    pathname === '/contactus' ? 'text-cyan-400 font-bold bg-white/5' : 'text-slate-200'
                  )}
                >
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden border-blue-500/30 text-slate-200 hover:text-cyan-300 hover:bg-blue-500/10"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5 text-slate-200" duration={300} />
        </Button>
      </nav>

      {/* Mobile Menu Portal */}
      <MobileMenu open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-6">
          {/* Services Group */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-ice-cyan uppercase tracking-widest font-semibold px-2">
              Services
            </span>
            <div className="flex flex-col gap-1">
              {serviceLinks.map((link) => (
                <ListItem
                  key={link.title}
                  {...link}
                  active={pathname === link.href}
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>
          </div>

          {/* Company & Contact Group */}
          <div className="flex flex-col gap-2 border-t border-blue-500/15 pt-4">
            <span className="font-mono text-xs text-ice-cyan uppercase tracking-widest font-semibold px-2">
              Company
            </span>
            <div className="flex flex-col gap-1">
              {companyLinks.map((link) => (
                <ListItem
                  key={link.title}
                  {...link}
                  active={pathname === link.href}
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>
          </div>
        </div>
      </MobileMenu>
    </header>
  );
}

function MobileMenu({
  open,
  children,
  onClose,
}: {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) {
  if (!open || typeof window === 'undefined') return null;

  return createPortal(
    <div
      id="mobile-menu"
      className="fixed inset-x-0 top-20 bottom-0 z-50 flex flex-col overflow-hidden bg-[#050B1A]/98 backdrop-blur-2xl border-t border-blue-500/20 md:hidden animate-in fade-in slide-in-from-top-4 duration-200"
    >
      <div className="h-full overflow-y-auto p-5 flex flex-col justify-start gap-6">
        {children}
      </div>
    </div>,
    document.body
  );
}

function ListItem({
  title,
  description,
  icon: Icon,
  className,
  href,
  badge,
  active,
  onClick,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> &
  LinkItem & { active?: boolean; onClick?: () => void }) {
  return (
    <NavigationMenuLink
      className={cn(
        'w-full flex flex-row items-center gap-x-3 rounded-xl p-2.5 transition-all duration-200 group/item cursor-pointer text-left',
        active
          ? 'bg-blue-500/15 text-cyan-300 border border-blue-500/30'
          : 'hover:bg-[#101E40]/80 hover:text-cyan-300',
        className
      )}
      onClick={onClick}
      asChild
      {...props}
    >
      <Link href={href} className="flex items-center gap-3 w-full">
        <div className="flex aspect-square size-10 shrink-0 items-center justify-center rounded-lg bg-blue-950/70 border border-blue-500/25 text-cyan-400 group-hover/item:border-cyan-400/50 group-hover/item:scale-105 transition-all shadow-[0_0_12px_rgba(61,139,255,0.15)]">
          <Icon className="size-5 text-cyan-400" />
        </div>
        <div className="flex flex-col items-start justify-center min-w-0 flex-1">
          <div className="flex items-center gap-2 w-full">
            <span className="font-medium text-sm text-surface-text group-hover/item:text-cyan-300 transition-colors truncate font-space">
              {title}
            </span>
            {badge && (
              <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                {badge}
              </span>
            )}
          </div>
          {description && (
            <span className="text-muted-text text-xs line-clamp-1 font-light group-hover/item:text-slate-300 transition-colors">
              {description}
            </span>
          )}
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  React.useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
