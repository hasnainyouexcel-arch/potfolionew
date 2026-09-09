import { MouseEvent } from 'react';
import { ArrowUpRight, MessageSquare, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="relative bg-[#06080c] border-t border-white/[0.08] pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center font-extrabold text-white text-sm shadow-md shadow-emerald-500/20">
                S
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {PERSONAL_INFO.shortName}
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Creative digital experiences built with purpose. Handcrafted websites, conversion-centered UI/UX, and tailored frontend implementations.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs">
              <a
                href={PERSONAL_INFO.baseWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {PERSONAL_INFO.whatsappNumber}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>Email: {PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollTo(e, 'home')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollTo(e, 'about')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollTo(e, 'services')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => scrollTo(e, 'portfolio')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, 'contact')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Fast WhatsApp Launch */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Direct Inquiries
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Skip lengthy email chains. Connect with Syed directly on WhatsApp for an immediate consultation.
            </p>
            <a
              id="footer-start-project-cta"
              href={PERSONAL_INFO.mainOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-xs font-bold text-white shadow-lg shadow-emerald-600/25 transition-all duration-200"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Start a Project →</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Syed Muhammad Hasnain Raza Taqvi. All rights reserved.</p>
          <p className="text-[11px] font-mono">
            Designed for high performance, accessibility, and conversion.
          </p>
        </div>
      </div>
    </footer>
  );
}
