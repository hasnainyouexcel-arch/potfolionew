import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function WhatsAppFloatingButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex items-center gap-3 pointer-events-auto"
    >
      {/* Tooltip on hover */}
      <div
        id="whatsapp-hover-tooltip"
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/95 text-white text-xs font-semibold shadow-xl border border-emerald-500/30 backdrop-blur-md transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Order Directly on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-action-btn"
        href={PERSONAL_INFO.mainOrderUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Order Directly on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-400/60 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-60 pointer-events-none" />

        {/* WhatsApp Icon */}
        <div className="relative flex items-center justify-center">
          <MessageSquare className="w-7 h-7 text-white fill-white/10" />
        </div>

        {/* Mobile notification dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-teal-300 border-2 border-slate-950" />
      </a>
    </div>
  );
}
