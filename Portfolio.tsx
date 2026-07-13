/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useData } from './DataContext';
import LucideIcon from './LucideIcon';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const { siteConfig } = useData();
  const { logo } = siteConfig;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Portfolio', target: 'portfolio' },
    { name: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-[#0F0F0F]/80 backdrop-blur-xl border-b border-zinc-900/60 shadow-lg shadow-[#0F0F0F]/40'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 group text-left focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:border-[#5DD62C]/50 transition-colors duration-300 shrink-0">
              <span className="text-xl font-extrabold text-[#5DD62C] tracking-tighter">
                {logo.letter1 || "Z"}{logo.letter2 || ""}
              </span>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#F8F8F8] group-hover:text-[#5DD62C] transition-colors duration-300">
                Zin<span className="text-[#5DD62C]">FX</span>
              </span>
              <p className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase leading-none mt-0.5">
                {logo.text || "CREATIVE STUDIO"}
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <button
                  key={link.target}
                  onClick={() => handleLinkClick(link.target)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none ${
                    isActive ? 'text-[#0F0F0F]' : 'text-zinc-400 hover:text-[#F8F8F8]'
                  }`}
                  id={`nav-link-${link.target}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#5DD62C] rounded-full z-[-1]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleLinkClick('contact')}
              className="relative overflow-hidden group px-6 py-2.5 rounded-xl bg-[#5DD62C] text-[#0F0F0F] font-semibold text-sm hover:shadow-[0_0_20px_rgba(93,214,44,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
              id="desktop-cta-btn"
            >
              <span>Let's Design</span>
              <LucideIcon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#1A1A1A] border border-zinc-800 text-zinc-300 hover:text-[#5DD62C] transition-colors focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <LucideIcon name={isMobileMenuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
            />

            {/* Menu container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#121212] border-l border-zinc-900 z-50 p-6 flex flex-col justify-between lg:hidden shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#1A1A1A] flex items-center justify-center border border-zinc-800">
                      <span className="text-base font-extrabold text-[#5DD62C]">Z</span>
                    </div>
                    <span className="text-lg font-bold text-[#F8F8F8]">
                      Zin<span className="text-[#5DD62C]">FX</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-[#1A1A1A] border border-zinc-800 text-zinc-400 hover:text-[#5DD62C] transition-colors focus:outline-none"
                    id="close-mobile-menu"
                  >
                    <LucideIcon name="X" size={18} />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.target;
                    return (
                      <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={link.target}
                        onClick={() => handleLinkClick(link.target)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-[#5DD62C]/10 text-[#5DD62C] border-l-4 border-[#5DD62C]'
                            : 'text-zinc-400 hover:bg-zinc-900 hover:text-[#F8F8F8]'
                        }`}
                        id={`mobile-nav-link-${link.target}`}
                      >
                        {link.name}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full py-3.5 rounded-xl bg-[#5DD62C] text-[#0F0F0F] font-bold text-center text-sm shadow-lg shadow-[#5DD62C]/10 flex items-center justify-center gap-2"
                  id="mobile-cta-btn"
                >
                  <span>Contact Me</span>
                  <LucideIcon name="Mail" size={16} />
                </button>
                <p className="text-[10px] text-zinc-500 text-center font-mono uppercase tracking-widest">
                  © 2026 ZinFX Graphic Design
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
