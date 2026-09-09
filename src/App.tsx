import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseMe from './components/WhyChooseMe';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import SkillsTechnologies from './components/SkillsTechnologies';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080a0f] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 relative overflow-x-hidden font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Layout */}
      <main id="main-content" tabIndex={-1} className="relative z-10 focus:outline-none">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Qualitative Stats / Trust Section */}
        <Stats />

        {/* 3. About Section */}
        <About />

        {/* 4. Services Section (8 Services with WhatsApp actions) */}
        <Services />

        {/* 5. Featured Portfolio (Selected Work with Filter & Modal) */}
        <Portfolio />

        {/* 6. Why Choose Me */}
        <WhyChooseMe />

        {/* 7. Structured Work Process Timeline */}
        <Process />

        {/* 8. What Clients Will Experience (Testimonial Standards) */}
        <Testimonials />

        {/* 9. Skills & Production Technologies */}
        <SkillsTechnologies />

        {/* 10. Frequently Asked Questions Accordion */}
        <FAQ />

        {/* 11. Conversion-Focused Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed WhatsApp Floating CTA Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
