/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import WhyChooseMe from './components/WhyChooseMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { DataProvider } from './components/DataContext';

export default function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}

function AppContent() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isAdminView, setIsAdminView] = useState<boolean>(false);

  // Monitor path for rendering the Admin Dashboard or the main view
  useEffect(() => {
    const handlePathCheck = () => {
      setIsAdminView(window.location.pathname === '/admin');
    };
    handlePathCheck();

    window.addEventListener('popstate', handlePathCheck);
    return () => window.removeEventListener('popstate', handlePathCheck);
  }, []);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scroll slightly to account for the sticky navbar height
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Observe which section is active to highlight in nav
  useEffect(() => {
    if (isAdminView) return;

    const sections = ['home', 'about', 'portfolio', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Center-biased observation
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [isAdminView]);

  if (isAdminView) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F8F8F8] selection:bg-[#5DD62C] selection:text-[#0F0F0F] font-sans antialiased scroll-smooth overflow-x-hidden">
      {/* Floating Header */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Page Content */}
      <main className="relative">
        <Hero onNavigate={handleNavigate} />
        <About onNavigate={handleNavigate} />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
