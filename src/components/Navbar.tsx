import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (onNavigate) {
      onNavigate(targetId);
    }
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090b10]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          id="nav-logo-link"
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg py-1"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-extrabold text-white text-sm shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              {PERSONAL_INFO.shortName}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium -mt-0.5">
              Digital Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          id="nav-desktop-menu"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel border border-white/[0.06] shadow-sm"
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              id={`nav-link-${item.label.toLowerCase()}`}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            id="nav-cta-whatsapp-btn"
            href={PERSONAL_INFO.mainOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-full shadow-md shadow-emerald-600/20 hover:shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            id="nav-mobile-quick-whatsapp"
            href={PERSONAL_INFO.baseWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-full"
            aria-label="Direct WhatsApp message"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            id="nav-mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-300 hover:text-white bg-slate-800/60 border border-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-drawer"
          className="md:hidden px-4 pt-3 pb-6 bg-[#090b10]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-2 pt-2 pb-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                id={`nav-mobile-link-${item.label.toLowerCase()}`}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-emerald-400 hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-2.5">
            <a
              id="nav-mobile-cta-btn"
              href={PERSONAL_INFO.mainOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg shadow-emerald-600/30"
            >
              <span>Let's Work Together →</span>
            </a>
            <div className="text-center text-[11px] text-slate-400">
              WhatsApp: <span className="text-slate-200 font-mono">{PERSONAL_INFO.whatsappNumber}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
