import { MouseEvent } from 'react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle, Code2, Layers, Laptop } from 'lucide-react';
import { PERSONAL_INFO, ASSETS } from '../data/portfolioData';

export default function Hero() {
  const scrollToPortfolio = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('portfolio');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-emerald-600/10 via-teal-500/10 to-indigo-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/5 blur-[90px] pointer-events-none rounded-full" />

      {/* Grid overlay texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status / Availability Badge */}
            <div
              id="hero-availability-badge"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-emerald-300 text-xs font-medium tracking-wide shadow-sm shadow-emerald-950 mb-6 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for New Projects</span>
              <span className="text-emerald-500/40">•</span>
              <span className="text-[11px] text-emerald-400/80 font-mono">2026 Season</span>
            </div>

            {/* Main Creator Name */}
            <h2
              id="hero-creator-name"
              className="text-sm sm:text-base font-semibold uppercase tracking-widest text-emerald-400 mb-2 font-mono flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{PERSONAL_INFO.name}</span>
            </h2>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.12] mb-6"
            >
              Creative Digital Solutions That Turn Ideas Into{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                Powerful Experiences
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              {PERSONAL_INFO.supportingText}
            </p>

            {/* Two Prominent CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                id="hero-primary-cta-whatsapp"
                href={PERSONAL_INFO.mainOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-xl shadow-emerald-600/25 hover:shadow-emerald-500/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                id="hero-secondary-cta-work"
                href="#portfolio"
                onClick={scrollToPortfolio}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/70 hover:border-slate-500 rounded-xl transition-all duration-200 backdrop-blur-md hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>
            </div>

            {/* Micro Trust Points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-white/[0.08] pt-6 w-full max-w-xl">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Direct WhatsApp Inquiries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Modern 2026 UI/UX Standards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Fast & Fully Responsive</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Studio Mockup */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Gradient Border Card */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/0 shadow-2xl shadow-black/80 backdrop-blur-xl">
                <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-white/10 group">
                  {/* Laptop / Studio Screen Top Bar */}
                  <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-0.5 rounded-md bg-slate-950/80 border border-white/5 text-[11px] font-mono text-slate-400">
                      <Laptop className="w-3 h-3 text-emerald-400" />
                      <span>taqvior.digital/portfolio</span>
                    </div>
                    <div className="w-6" />
                  </div>

                  {/* Main Visual Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                    <img
                      id="hero-main-visual-img"
                      src={ASSETS.heroVisual}
                      alt="Syed M Hasnain Raza Taqvior Creative Studio Interface Mockup"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Bottom Bar Info */}
                  <div className="p-4 bg-slate-900/75 backdrop-blur-md border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Full-Stack Digital Craft</p>
                        <p className="text-[11px] text-slate-400">React • TypeScript • Modern UI/UX</p>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/20">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Design Card 1 - Conversion Metric */}
              <div
                id="hero-floating-card-metric"
                className="absolute -top-5 -left-4 sm:-left-8 glass-panel rounded-xl p-3.5 shadow-xl border border-white/10 hidden sm:flex items-center gap-3 backdrop-blur-xl animate-bounce-gentle"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Design Standard</div>
                  <div className="text-xs font-bold text-white">Precision UI & Conversion</div>
                </div>
              </div>

              {/* Floating Design Card 2 - Clean Code */}
              <div
                id="hero-floating-card-code"
                className="absolute -bottom-6 -right-3 sm:-right-6 glass-panel rounded-xl p-3.5 shadow-2xl border border-white/10 flex items-center gap-3 backdrop-blur-xl"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Direct WhatsApp</div>
                  <div className="text-xs font-bold text-emerald-400 font-mono">+92 315 7633693</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
