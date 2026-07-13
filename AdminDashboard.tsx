/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useData } from './DataContext';
import LucideIcon from './LucideIcon';

export default function Contact() {
  const { socialLinks, siteConfig } = useData();
  const { contactInfo } = siteConfig;

  // Filter precisely the requested 5 contact platforms
  const allowedNames = ['email', 'gmail', 'whatsapp', 'behance', 'fiverr', 'linkedin'];
  const filteredSocials = socialLinks.filter(link => 
    link && link.name && allowedNames.includes(link.name.toLowerCase())
  );

  return (
    <section
      id="contact"
      className="py-24 bg-[#0F0F0F] relative overflow-hidden border-t border-zinc-900/40"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#5DD62C]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#5DD62C] uppercase mb-3">
            {contactInfo.badgeText || "GET IN TOUCH"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F8F8] tracking-tight mb-4 font-heading">
            {contactInfo.titleText || "Let's Make Something Epic"}
          </h2>
          <div className="w-16 h-1 bg-[#5DD62C] rounded mb-6" />
          <p className="text-zinc-400 text-base max-w-xl leading-relaxed font-sans">
            Ready to scale your CTR and brand authority? Click any channel below to discuss pricing, custom graphic packages, or start your project instantly.
          </p>
        </div>

        {/* Contact Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mt-12">
          {filteredSocials.map((link) => {
            const linkName = link.name || '';
            const lowerName = linkName.toLowerCase();
            const isEmail = lowerName === 'email' || lowerName === 'gmail';
            
            let displayName = linkName;
            let subtitle = '';
            let buttonText = '';

            if (isEmail) {
              displayName = 'Email';
              subtitle = contactInfo.emailAddress || 'amzadhossen044@gmail.com';
              buttonText = 'Email Me';
            } else if (lowerName === 'whatsapp') {
              displayName = 'WhatsApp';
              subtitle = contactInfo.whatsappNumber ? `+${contactInfo.whatsappNumber}` : '+8801619142076';
              buttonText = 'Chat on WhatsApp';
            } else if (lowerName === 'fiverr') {
              displayName = 'Fiverr';
              subtitle = 'ah_amzad';
              buttonText = 'Hire Me on Fiverr';
            } else if (lowerName === 'behance') {
              displayName = 'Behance';
              subtitle = 'amzadhossen7';
              buttonText = 'View Behance Portfolio';
            } else if (lowerName === 'linkedin') {
              displayName = 'LinkedIn';
              subtitle = 'ah-amzad01113';
              buttonText = 'Connect on LinkedIn';
            } else {
              displayName = linkName;
              subtitle = link.url;
              buttonText = `Visit ${linkName}`;
            }

            return (
              <motion.a
                key={linkName}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-between text-center p-6 rounded-2xl glass border border-zinc-850 shadow-xl hover:border-[#5DD62C]/30 transition-all duration-300 hover:scale-[1.03] group min-h-[220px]`}
                whileHover={{ y: -4 }}
                id={`contact-link-${linkName.toLowerCase()}`}
              >
                <div className="flex flex-col items-center w-full">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-zinc-800 flex items-center justify-center text-[#5DD62C] group-hover:bg-[#5DD62C] group-hover:text-[#0F0F0F] transition-all duration-300 mb-4">
                    <LucideIcon name={link.iconName} size={24} />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-[#F8F8F8] mb-1 font-heading group-hover:text-[#5DD62C] transition-colors duration-200">
                    {displayName}
                  </h3>

                  {/* Subtitle / Display Label */}
                  <p className="text-xs text-zinc-500 font-sans break-all line-clamp-1 w-full">
                    {subtitle}
                  </p>
                </div>

                {/* Styled Button Label */}
                <div className="w-full mt-5">
                  <div className="w-full py-2 px-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-[#5DD62C] group-hover:bg-[#5DD62C] group-hover:text-[#0F0F0F] group-hover:border-[#5DD62C] transition-all duration-300">
                    {buttonText}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
