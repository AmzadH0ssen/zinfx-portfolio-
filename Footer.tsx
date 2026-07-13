/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useData } from './DataContext';
import { PortfolioItem } from '../types';
import LucideIcon from './LucideIcon';

export default function Portfolio() {
  const { portfolioItems, siteConfig, taxonomies } = useData();
  const { portfolioTitle } = siteConfig;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(portfolioItems);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    ...(taxonomies?.categories || [])
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory, portfolioItems]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      const nextIndex = (activeLightboxIndex + 1) % filteredItems.length;
      setActiveLightboxIndex(nextIndex);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      const prevIndex = (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
      setActiveLightboxIndex(prevIndex);
    }
  };

  // Listen to arrow keys for lightbox navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex !== null) {
        if (e.key === 'Escape') setActiveLightboxIndex(null);
        if (e.key === 'ArrowRight') {
          const nextIndex = (activeLightboxIndex + 1) % filteredItems.length;
          setActiveLightboxIndex(nextIndex);
        }
        if (e.key === 'ArrowLeft') {
          const prevIndex = (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
          setActiveLightboxIndex(prevIndex);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems]);

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section
      id="portfolio"
      className="py-24 bg-[#0F0F0F] relative overflow-hidden"
    >
      {/* Dynamic Grid Grid Background to contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#5DD62C] uppercase mb-3">
            {portfolioTitle.badgeText || "CREATIVE SHOWCASE"}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F8F8] tracking-tight mb-4 font-heading">
            {portfolioTitle.titleText || "Stunning Designs & Layouts"}
          </h2>
          <div className="w-16 h-1 bg-[#5DD62C] rounded mb-6" />
          <p className="text-zinc-400 text-base max-w-xl leading-relaxed font-sans">
            Explore a curation of high-impact YouTube thumbnails, custom posters, corporate brand identities, and social media banners.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'bg-[#5DD62C] text-[#0F0F0F] shadow-lg shadow-[#5DD62C]/20'
                    : 'bg-[#1A1A1A] text-zinc-400 hover:text-[#F8F8F8] border border-zinc-800/60 hover:border-zinc-700'
                }`}
                id={`filter-btn-${cat.id}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        {portfolioItems.length === 0 ? (
          <div className="text-center py-16 bg-zinc-950/30 border border-zinc-900/60 rounded-3xl p-8 max-w-lg mx-auto">
            <div className="w-16 h-16 bg-zinc-900/80 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-zinc-800">
              <LucideIcon name="Layers" size={32} className="text-zinc-500" />
            </div>
            <p className="text-zinc-300 font-semibold text-lg mb-2">No portfolio projects available yet.</p>
            <p className="text-zinc-500 text-sm">Check back later or upload new projects using the admin dashboard.</p>
          </div>
        ) : (
          <>
            <div
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8 w-full"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => {
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      key={item.id}
                      className="break-inside-avoid inline-block w-full mb-6 sm:mb-8 group relative cursor-pointer overflow-hidden rounded-2xl glass shadow-md hover:shadow-xl hover:shadow-[#5DD62C]/5 transition-all duration-300"
                      onClick={() => setActiveLightboxIndex(index)}
                      id={`portfolio-card-${item.id}`}
                    >
                      {/* Card Image Area */}
                      <div className="relative overflow-hidden w-full bg-zinc-950 flex items-center justify-center">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <span className="text-[10px] font-mono font-bold tracking-widest text-[#5DD62C] uppercase mb-1">
                            {(item.category || '').replace('_', ' ')}
                          </span>
                          <h3 className="text-lg font-bold text-[#F8F8F8] tracking-tight mb-2 font-heading">
                            {item.title}
                          </h3>
                          {item.tags && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {item.tags.map((tag, idx) => (
                                <span
                                  key={`${tag}-${idx}`}
                                  className="px-2 py-0.5 rounded-md bg-[#1A1A1A]/80 border border-zinc-800 text-[10px] text-zinc-300 font-mono"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Non-hover overlay elements */}
                        <div className="absolute bottom-4 right-4 glass p-2 rounded-xl group-hover:opacity-0 transition-opacity duration-300">
                          <LucideIcon name="ArrowUpRight" size={16} className="text-[#5DD62C]" />
                        </div>
                      </div>

                      {/* Card Text Footer (Always visible for excellent accessibility & high premium quality) */}
                      <div className="p-5 border-t border-zinc-800/20 bg-black/15 backdrop-blur-xs text-left">
                        <div className="flex justify-between items-start mb-2 gap-4">
                          <h4 className="font-bold text-[#F8F8F8] group-hover:text-[#5DD62C] transition-colors duration-200 line-clamp-1 font-heading">
                            {item.title}
                          </h4>
                          <span className="px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800/80 text-[10px] text-zinc-400 font-mono capitalize shrink-0">
                            {(item.category || '').replace('_', ' ')}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Empty state if items fit no criteria */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <LucideIcon name="Layers" size={48} className="text-zinc-600 mx-auto mb-4" />
                <p className="text-zinc-400 font-medium">No projects found in this category.</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md"
            onClick={() => setActiveLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-[#5DD62C] transition-colors duration-200 focus:outline-none z-50"
              id="close-lightbox"
            >
              <LucideIcon name="X" size={24} />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 p-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-[#5DD62C] transition-colors duration-200 focus:outline-none z-50"
              aria-label="Previous image"
              id="lightbox-prev"
            >
              <LucideIcon name="X" className="rotate-270 hidden" />
              <span className="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 p-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-[#5DD62C] transition-colors duration-200 focus:outline-none z-50"
              aria-label="Next image"
              id="lightbox-next"
            >
              <span className="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </button>

            {/* Lightbox Main Content Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-6xl w-full flex flex-col items-center glass rounded-2xl overflow-hidden shadow-2xl relative z-40 max-h-[92vh] border border-zinc-800/80"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Window */}
              <div className="flex-1 w-full flex items-center justify-center bg-black/40 overflow-hidden relative min-h-[300px] md:min-h-[480px]">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="max-w-full max-h-[68vh] object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Detail Bar */}
              <div className="p-6 md:p-8 bg-[#121212]/95 backdrop-blur-md w-full border-t border-zinc-850 flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-y-auto shrink-0 text-left">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-[#5DD62C]/10 border border-[#5DD62C]/25 text-xs text-[#5DD62C] font-mono capitalize">
                      {(activeItem.category || '').replace('_', ' ')}
                    </span>
                    {activeItem.client && (
                      <span className="text-xs text-zinc-400 font-mono">
                        Client: <strong className="text-zinc-200 font-sans">{activeItem.client}</strong>
                      </span>
                    )}
                    {activeItem.platform && (
                      <span className="text-xs text-zinc-400 font-mono">
                        Platform: <strong className="text-[#5DD62C] font-sans">{activeItem.platform}</strong>
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#F8F8F8] tracking-tight mb-2 font-heading">
                    {activeItem.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-sans leading-relaxed max-w-3xl">
                    {activeItem.description}
                  </p>
                  {activeItem.softwareUsed && activeItem.softwareUsed.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <span className="text-xs text-zinc-500 font-mono self-center mr-1">Software Used:</span>
                      {activeItem.softwareUsed.map((sw, idx) => (
                        <span
                          key={`${sw}-${idx}`}
                          className="px-2.5 py-0.5 rounded-lg bg-[#5DD62C]/10 border border-[#5DD62C]/20 text-[10px] text-[#5DD62C] font-mono font-semibold"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4 items-start md:items-center md:justify-end">
                  {activeItem.tags && (
                    <div className="flex flex-wrap gap-1.5 md:justify-end">
                      {activeItem.tags.map((tag, idx) => (
                        <span
                          key={`${tag}-${idx}`}
                          className="px-2.5 py-1 rounded-md bg-[#1A1A1A] border border-zinc-800 text-[11px] text-zinc-400 font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* View Full Resolution Action */}
                  <a
                    href={activeItem.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#5DD62C] hover:bg-[#5DD62C]/90 text-[#0F0F0F] text-xs font-bold transition-all flex items-center gap-2 hover:scale-[1.02]"
                    title="Open original uncropped image in new tab"
                  >
                    <LucideIcon name="ExternalLink" size={14} />
                    <span>View Full Res</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
