/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useData } from './DataContext';
import LucideIcon from './LucideIcon';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { socialLinks, siteConfig } = useData();
  const { logo } = siteConfig;
  const currentYear = new Date().getFullYear();

  const footerNav = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Portfolio', target: 'portfolio' },
    { name: 'Contact', target: 'contact' }
  ];

  return (
    <footer className="bg-[#0B0B0B] border-t border-zinc-900/80 py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-center pb-12 border-b border-zinc-900/60">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 group text-left focus:outline-none mb-4"
              id="footer-logo-btn"
            >
              <div className="w-9 h-9 rounded-xl glass flex items-center justify-center">
                <span className="text-lg font-extrabold text-[#5DD62C] tracking-tighter">
                  {logo.letter1 || "Z"}{logo.letter2 || ""}
                </span>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-[#F8F8F8] font-heading">
                  Zin<span className="text-[#5DD62C]">FX</span>
                </span>
              </div>
            </button>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed font-sans">
              Handcrafting high-clickrate thumbnails, cinematic poster manipulations, and stunning corporate branding designs. Creating visuals that scale your business.
            </p>
          </div>

          {/* Quick links map */}
          <div className="md:col-span-4 flex flex-col items-start md:items-center">
            <div className="text-left">
              <h4 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase mb-4 font-heading">
                NAVIGATION
              </h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {footerNav.map((item) => (
                  <button
                    key={item.target}
                    onClick={() => onNavigate(item.target)}
                    className="text-sm text-zinc-500 hover:text-[#5DD62C] text-left transition-colors duration-200"
                    id={`footer-nav-${item.target}`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Connected Social deck */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end">
            <div className="text-left md:text-right">
              <h4 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase mb-4 font-heading">
                GET CONNECTED
              </h4>
              <div className="flex flex-wrap md:justify-end gap-3">
                {socialLinks.slice(4).map((link) => {
                  const linkName = link?.name || 'social';
                  return (
                    <a
                      key={linkName}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-[#5DD62C] hover:border-[#5DD62C]/30 hover:scale-[1.05] transition-all duration-300"
                      aria-label={`Follow ZinFX on ${linkName}`}
                      id={`footer-social-${linkName.toLowerCase()}`}
                    >
                      <LucideIcon name={link.iconName} size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Legal credits and scroll top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-12">
          <p 
            className="text-xs text-zinc-600 font-mono cursor-pointer select-none hover:text-zinc-500 transition-colors"
            title="Double-click to open admin panel"
            onDoubleClick={() => {
              window.history.pushState({}, '', '/admin');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
          >
            © {currentYear} ZINFX. ALL RIGHTS RESERVED. DESIGNED & DEVELOPED WITH PASSION.
          </p>
          
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-xs font-mono text-zinc-600 hover:text-[#5DD62C] transition-colors duration-200"
            id="scroll-top-btn"
          >
            <span>BACK TO TOP</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-up"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}
