/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { useData } from './DataContext';
import LucideIcon from './LucideIcon';

export default function Testimonials() {
  const { testimonials, siteConfig } = useData();
  const { testimonialsTitle } = siteConfig;

  return (
    <section
      id="testimonials"
      className="py-24 bg-[#141414] relative overflow-hidden border-t border-zinc-900/40"
    >
      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#5DD62C]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#5DD62C] uppercase mb-3">
            {testimonialsTitle.badgeText || "CLIENT SUCCESS STORIES"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F8F8] tracking-tight mb-4 font-heading">
            {testimonialsTitle.titleText || "Loved By Content Creators & Brands"}
          </h2>
          <div className="w-16 h-1 bg-[#5DD62C] rounded mb-6" />
          <p className="text-zinc-400 text-base max-w-xl leading-relaxed font-sans">
            Hear from leading YouTubers, Streamers, and Marketing Directors who trust ZinFX for their daily visual assets.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={test.id}
                className="relative glass p-8 sm:p-10 rounded-2xl shadow-lg flex flex-col justify-between"
                id={`testimonial-card-${test.id}`}
              >
                {/* Quote Icon Background */}
                <div className="absolute top-8 right-8 text-zinc-900/40 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="opacity-20 text-[#5DD62C]"
                  >
                    <path d="M11.19 10.43c.09-.19.14-.41.14-.64V4.5c0-.83-.67-1.5-1.5-1.5H4.33c-.83 0-1.5.67-1.5 1.5v5.5c0 .83.67 1.5 1.5 1.5h4.34c-.16 2.12-1.4 3.75-3.32 4.43-.59.21-.99.78-.99 1.41 0 .93.84 1.64 1.74 1.43 3.19-.77 5.4-3.56 5.59-7.84zM21.19 10.43c.09-.19.14-.41.14-.64V4.5c0-.83-.67-1.5-1.5-1.5h-5.5c-.83 0-1.5.67-1.5 1.5v5.5c0 .83.67 1.5 1.5 1.5h4.34c-.16 2.12-1.4 3.75-3.32 4.43-.59.21-.99.78-.99 1.41 0 .93.84 1.64 1.74 1.43 3.19-.77 5.4-3.56 5.59-7.84z" />
                  </svg>
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6 text-[#5DD62C]">
                    {[...Array(test.rating)].map((_, i) => (
                      <LucideIcon key={i} name="Star" size={16} className="fill-[#5DD62C] text-[#5DD62C]" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic mb-8 font-sans">
                    "{test.feedback}"
                  </p>
                </div>

                {/* Profile Card */}
                <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/30">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#5DD62C]/20 bg-zinc-800 flex-shrink-0">
                    <img
                      src={test.avatarUrl}
                      alt={test.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F8F8F8] tracking-tight font-heading">
                      {test.name}
                    </h4>
                    <p className="text-xs text-zinc-500 font-sans mt-0.5">
                      {test.role} <span className="text-[#5DD62C] font-semibold">{test.company ? `at ${test.company}` : ''}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
