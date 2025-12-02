'use client';

import ParticleCanvas from './ParticleCanvas';
import CustomCursor from './CustomCursor';
import Navigation from './Navigation';
import Hero from './Hero';
import ProjectCarousel from './ProjectCarousel';
import SkillsGrid from './SkillsGrid';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ClientOnly from './ClientOnly';
import useScrollPosition from '@/hooks/useScrollPosition';
import AboutSection from './AboutSection';

export default function AdvancedPortfolio() {
  const scrollY = useScrollPosition();

  return (
    <div className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
      {/* Client-only components */}
      <ClientOnly>
        <ParticleCanvas />
        <CustomCursor />
      </ClientOnly>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero scrollY={scrollY} />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectCarousel />

      {/* Skills Section */}
      <SkillsGrid />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
