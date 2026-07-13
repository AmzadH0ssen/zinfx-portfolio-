/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';
import { useData } from './DataContext';

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const { siteConfig } = useData();
  const { about } = siteConfig;

  const specialties = about.specialties || [
    'YouTube Thumbnail Design',
    'Social Media Design',
    'Poster Design',
    'Banner Design',
    'Photoshop',
    'Canva',
  ];

  const portraitUrl = about.portraitUrl && about.portraitUrl !== "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
    ? about.portraitUrl
    : "https://res.cloudinary.com/iq8lrhir/image/upload/v1783874533/amjad.jpg_tfcxyz.jpg";

  return (
    <section
      id="about"
      className="py-24 bg-[#141414] relative overflow-hidden border-t border-zinc-900/40"
    >
      {/* Accent Blob */}
      <div className="absolute top-1/2 right-0 w-[250px] h-[250px] bg-[#5DD62C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image with overlays */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-[933/768]" style={{ aspectRatio: '933 / 768' }}>
              {/* Green frame backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#5DD62C] to-[#337418] rounded-3xl opacity-30 blur-sm" />
              
              {/* Designer Portrait / Workspace Image */}
              <div className="absolute inset-0 bg-[#1A1A1A]/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-1.5">
                <img
                  src={portraitUrl}
                  alt="Amjad Hossain - ZinFX Creative Studio founder"
                  className="w-full h-full object-contain object-center rounded-2xl transition-all duration-300"
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Specialty badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5DD62C]/10 flex items-center justify-center text-[#5DD62C]">
                  <LucideIcon name="Award" size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-mono block leading-none">
                    {about.craftQualityLabel || "CRAFT QUALITY"}
                  </span>
                  <span className="text-sm font-bold text-[#F8F8F8]">
                    {about.craftQualityValue || "Pixel Perfect"}
                  </span>
                </div>
              </motion.div>

              {/* Experience stamp */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute -top-6 -left-6 bg-[#5DD62C] p-4 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center text-[#0F0F0F] font-sans"
              >
                <span className="text-2xl font-extrabold leading-none">
                  {about.experienceValue || "1.5"}
                </span>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider mt-0.5">
                  {about.experienceLabel || "Years Experience"}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Narrative content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#5DD62C] uppercase mb-3">
              {about.titleLine2 || "Professional Graphic Designer & Thumbnail Artist"}
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F8F8F8] tracking-tight mb-2 font-heading">
              {about.titleLine1 || "Amjad Hossain"}
            </h2>
            <span className="text-zinc-500 font-mono text-sm uppercase tracking-wider mb-6">
              Founder of ZinFX Creative Studio
            </span>
            
            <p className="text-zinc-400 text-base leading-relaxed mb-6 font-sans">
              {about.paragraph1 || "Hi, I'm Amjad Hossain, the founder of ZinFX Creative Studio. I specialize in YouTube thumbnails, social media graphics, posters, banners, and creative visual designs. I have 1.5 years of professional experience creating high-quality designs that help creators and brands stand out."}
            </p>
            {about.paragraph2 && (
              <p className="text-zinc-400 text-base leading-relaxed mb-8 font-sans">
                {about.paragraph2}
              </p>
            )}

            <h3 className="text-sm font-mono font-bold tracking-wider text-zinc-300 uppercase mb-4 font-heading">
              SPECIALTIES & EXPERTISE
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {specialties.map((specialty, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#5DD62C]/10 flex items-center justify-center text-[#5DD62C] flex-shrink-0">
                    <LucideIcon name="Check" size={12} />
                  </div>
                  <span className="text-sm text-zinc-300 font-medium font-sans">
                    {specialty}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-xl bg-[#5DD62C] hover:bg-[#5DD62C]/90 text-[#0F0F0F] font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#5DD62C]/10 flex items-center gap-2"
                id="about-hire-me-btn"
              >
                <span>Contact Me</span>
                <LucideIcon name="ArrowRight" size={16} />
              </button>
              
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-[#1A1A1A] text-[#F8F8F8] border border-zinc-800 hover:border-zinc-700 font-bold text-sm transition-all duration-300"
                id="about-view-work-btn"
              >
                View Portfolio
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
