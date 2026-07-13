/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';
import { useData } from './DataContext';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { siteConfig } = useData();
  const { hero } = siteConfig;

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center bg-[#0F0F0F] pt-32 pb-20 overflow-hidden"
    >
      {/* Background Decorative Gradients & Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#5DD62C]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#337418]/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Clean Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full relative z-10 text-center flex flex-col items-center justify-center">
        {/* Brand Name / Logo Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5DD62C]/20 to-[#337418]/10 border border-[#5DD62C]/30 flex items-center justify-center text-xl font-black text-[#5DD62C] mb-8 font-mono shadow-lg shadow-[#5DD62C]/5"
        >
          Z
        </motion.div>

        {/* Main Title / Brand name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl sm:text-7xl md:text-8xl font-black text-[#F8F8F8] leading-tight tracking-tight mb-6 font-heading"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5DD62C] via-[#9FF075] to-[#5DD62C]">
            ZinFX
          </span>
        </motion.h1>

        {/* Short Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-sans"
        >
          {hero.subtitle || "Handcrafting conversion-focused YouTube thumbnails, premium social media layouts, and high-energy custom graphics that command absolute attention."}
        </motion.p>

        {/* View Portfolio Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={() => onNavigate('portfolio')}
            className="px-8 py-4 rounded-xl bg-[#5DD62C] hover:bg-[#5DD62C]/90 text-[#0F0F0F] font-bold text-base transition-all duration-300 shadow-lg shadow-[#5DD62C]/10 hover:shadow-[#5DD62C]/25 hover:scale-[1.02] flex items-center gap-2 group"
            id="hero-view-portfolio-btn"
          >
            <span>View Portfolio</span>
            <LucideIcon name="ChevronRight" size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
