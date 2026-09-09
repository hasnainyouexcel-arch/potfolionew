import { useState, FormEvent } from 'react';
import {
  MessageSquare,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
  Phone,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website Design & Development',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Website Design & Development',
    'UI/UX Design',
    'High-Converting Landing Page',
    'Business / Corporate Website',
    'E-Commerce Online Store',
    'Website Redesign',
    'Custom Digital Solution',
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name.trim()) {
      setErrorMessage('Please provide your name.');
      setStatus('error');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Please describe your project in at least 10 characters.');
      setStatus('error');
      return;
    }

    setErrorMessage('');
    setStatus('submitting');

    // Simulate reliable dispatch state & prepare WhatsApp fallback
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const getCustomWhatsAppLink = () => {
    const text = `Hello Syed Muhammad Hasnain Raza Taqvi, my name is ${encodeURIComponent(formData.name || 'Client')}. I'm inquiring about: ${encodeURIComponent(formData.projectType)}. Details: ${encodeURIComponent(formData.message || 'I would like to discuss a project.')} (Email: ${encodeURIComponent(formData.email || 'N/A')})`;
    return `https://wa.me/923157633693?text=${text}`;
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct WhatsApp & Info */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
              Direct Inquiries
            </div>

            <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Have a Project in Mind?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Let's turn your idea into a professional digital experience. Contact me directly on WhatsApp and let's discuss your project.
            </p>

            {/* Large WhatsApp CTA Button */}
            <a
              id="contact-large-whatsapp-cta"
              href={PERSONAL_INFO.mainOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base sm:text-lg shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-0.5 mb-8 group"
            >
              <MessageSquare className="w-6 h-6 text-white" />
              <span>💬 Order Directly on WhatsApp</span>
              <ExternalLink className="w-4 h-4 opacity-75 group-hover:opacity-100" />
            </a>

            {/* Direct Contact Details Cards */}
            <div className="w-full space-y-4">
              {/* WhatsApp Card */}
              <a
                id="contact-phone-card"
                href={PERSONAL_INFO.baseWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-panel glass-panel-hover border border-white/[0.08] flex items-center justify-between group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block mb-0.5">
                      WhatsApp Direct
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white font-mono group-hover:text-emerald-300 transition-colors">
                      {PERSONAL_INFO.whatsappNumber}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  Chat Now →
                </span>
              </a>

              {/* Email Card */}
              <a
                id="contact-email-card"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-5 rounded-2xl glass-panel glass-panel-hover border border-white/[0.08] flex items-center justify-between group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block mb-0.5">
                      Official Email
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white font-mono group-hover:text-teal-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-teal-400 flex items-center gap-1">
                  Send Mail →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-6 w-full">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.08]">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Send Project Inquiry
                </h3>
              </div>

              {status === 'success' ? (
                <div
                  id="contact-form-success-state"
                  className="p-6 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Inquiry Details Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project brief has been recorded. For the quickest same-day reply, you can send this directly via WhatsApp with one click:
                  </p>

                  <a
                    id="contact-success-whatsapp-send"
                    href={getCustomWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-bold shadow-lg shadow-emerald-600/30 hover:from-emerald-500 hover:to-teal-500 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Inquiry to WhatsApp Now</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Website Design & Development',
                        message: '',
                      });
                    }}
                    type="button"
                    className="text-xs text-slate-400 hover:text-white underline cursor-pointer pt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div
                      id="contact-form-error-alert"
                      className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-500/30 text-xs text-rose-300 flex items-center gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. John Doe or Brand Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    />
                  </div>

                  {/* Project Type Select */}
                  <div>
                    <label htmlFor="contact-project-type" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Type *
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-slate-900 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Summary / Vision *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Tell me about your business goals, preferred references, timeline, or scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-bold shadow-lg shadow-emerald-600/30 transition-all duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
