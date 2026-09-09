import { useEffect } from 'react';
import { X, ExternalLink, Check, Layers, Code, MessageCircle } from 'lucide-react';
import { Project } from '../types';
import { getWhatsAppProjectUrl, PERSONAL_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const whatsappOrderUrl = getWhatsAppProjectUrl(project.title);

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl text-slate-200 p-0 sm:p-1 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          type="button"
          aria-label="Close project details"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Preview */}
        <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-slate-950">
          <img
            src={project.image}
            alt={`${project.title} - ${project.label}`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

          {/* Badges on preview */}
          <div className="absolute bottom-4 left-4 sm:left-6 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium">
              ● {project.label}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-white/15 text-slate-300 text-xs font-medium">
              {project.category}
            </span>
          </div>
        </div>

        {/* Modal Content Details */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h3
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3"
            >
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Design Concept */}
          <div className="p-5 rounded-xl bg-slate-950/60 border border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Design & UX Concept</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.designConcept}
            </p>
          </div>

          {/* Key Features & Tech */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Key Features & Structure</span>
              </h4>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Code className="w-4 h-4 text-teal-400" />
                <span>Technologies & Tools</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-slate-200 bg-white/[0.05] border border-white/10 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300">
                <p className="font-semibold mb-1">Customizable Implementation</p>
                <p className="text-slate-400 text-[11px]">
                  This concept can be fully tailored to match your brand palette, typography, catalog, and conversion goals.
                </p>
              </div>
            </div>
          </div>

          {/* High-Conversion WhatsApp CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white">Want Something Like This?</p>
              <p className="text-xs text-slate-400">Discuss this exact layout or customized specs directly with Syed.</p>
            </div>

            <a
              id="modal-order-whatsapp-btn"
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order Now on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
