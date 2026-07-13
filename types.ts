/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { useData } from './DataContext';
import LucideIcon from './LucideIcon';

export default function Services() {
  const { services, siteConfig } = useData();
  const { servicesTitle } = siteConfig;

  return (
    <section
      id="services"
      className="py-24 bg-[#141414] relative overflow-hidden border-t border-zinc-900/40"
    >
      {/* Decorative Blob */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#337418]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#5DD62C] uppercase mb-3">
            {servicesTitle.badgeText || "WHAT I DO BEST"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F8F8] tracking-tight mb-4 font-heading">
            {servicesTitle.titleText || "Professional Design Services"}
          </h2>
          <div className="w-16 h-1 bg-[#5DD62C] rounded mb-6" />
          <p className="text-zinc-400 text-base max-w-xl leading-relaxed font-sans">
            Tailored visual services crafted to boost your engagement, define your aesthetics, and convert viewers into fans or clients.
          </p>
        </div>

        {/* Services Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={service.id}
                className="group relative glass p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#5DD62C]/5 transition-all duration-300 flex flex-col justify-between"
                id={`service-card-${service.id}`}
              >
                {/* Glow Backdrop */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#5DD62C]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl" />

                <div>
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-zinc-400 group-hover:text-[#5DD62C] group-hover:border-[#5DD62C]/30 transition-colors duration-300 mb-6">
                    <LucideIcon name={service.iconName} size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#F8F8F8] mb-3 group-hover:text-[#5DD62C] transition-colors duration-200 font-heading">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Service Quality Note / CTA Indicator */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 group-hover:text-[#5DD62C] transition-colors duration-300 pt-4 border-t border-zinc-800/30">
                  <span>Custom Handcrafted Delivery</span>
                  <LucideIcon name="ChevronRight" size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic CTA box at bottom of services */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass p-8 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F8F8F8] mb-2 font-heading">
              Need a completely custom graphic asset?
            </h3>
            <p className="text-sm text-zinc-400 max-w-xl font-sans">
              I can handle composite posters, brand mascot guidelines, Twitch merchandise illustrations, and specialized photo edits. Let's build something unique.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#5DD62C] hover:bg-[#5DD62C]/90 text-[#0F0F0F] font-bold text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 flex-shrink-0"
            id="services-cta-btn"
          >
            <span>Let's Discuss Pricing</span>
            <LucideIcon name="MessageSquare" size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
