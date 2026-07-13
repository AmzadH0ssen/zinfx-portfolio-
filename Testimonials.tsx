/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { whyChooseMe } from '../data';
import LucideIcon from './LucideIcon';

export default function WhyChooseMe() {
  return (
    <section
      id="why-choose-me"
      className="py-24 bg-[#0F0F0F] relative overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] bg-[#5DD62C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#5DD62C] uppercase mb-3">
            MY PROMISE TO YOU
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F8F8] tracking-tight mb-4 font-heading">
            Why Choose ZinFX?
          </h2>
          <div className="w-16 h-1 bg-[#5DD62C] rounded mb-6" />
          <p className="text-zinc-400 text-base max-w-xl leading-relaxed font-sans">
            I combine technical design expertise with strict professional workflows to offer an unrivaled freelance experience.
          </p>
        </div>

        {/* Why Choose Me Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {whyChooseMe.map((item, idx) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={item.id}
                className="group relative glass p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between text-left"
                id={`why-card-${item.id}`}
              >
                {/* Visual Line Accent */}
                <div className="absolute left-6 top-0 w-8 h-[2px] bg-zinc-800 group-hover:bg-[#5DD62C] transition-colors duration-300" />

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-[#5DD62C] mb-5 group-hover:bg-[#5DD62C]/10 transition-all duration-300">
                    <LucideIcon name={item.iconName} size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#F8F8F8] mb-2 group-hover:text-[#5DD62C] transition-colors duration-200 font-heading">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Quality Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-mono text-zinc-500 max-w-lg mx-auto">
            "Design is not just what it looks like and feels like. Design is how it works and converts." 
            <span className="block text-[#5DD62C] mt-2 font-bold">— ZinFX Studio</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
