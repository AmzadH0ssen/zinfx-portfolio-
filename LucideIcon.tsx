/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, Service, WhyChooseMeItem, Testimonial, SocialLink } from './types';

export const portfolioItems: PortfolioItem[] = [];

export const services: Service[] = [
  {
    id: 'srv-1',
    title: 'Thumbnail Design',
    description: 'High CTR, custom-styled YouTube thumbnails optimized for visual storytelling. Designed to dramatically boost impressions and CTR.',
    iconName: 'Youtube'
  },
  {
    id: 'srv-2',
    title: 'Social Media Design',
    description: 'Stunning Instagram posts, Facebook ads, and Twitter flyers tailored to hook viewers immediately and elevate your personal brand.',
    iconName: 'Instagram'
  },
  {
    id: 'srv-3',
    title: 'Banner Design',
    description: 'Polished Twitch headers, YouTube covers, and Twitter banners styled to tie together your online presence with professional consistency.',
    iconName: 'Image'
  },
  {
    id: 'srv-4',
    title: 'Poster Design',
    description: 'Cinematic, promotional, or fine-art posters blending expert compositing, photoreal photo-manipulation, and high-impact layouts.',
    iconName: 'Layers'
  },
  {
    id: 'srv-5',
    title: 'Branding & Identity',
    description: 'Bespoke corporate logos, esports brand marks, custom color guidelines, and cohesive typographic assets for your agency or startup.',
    iconName: 'Award'
  },
  {
    id: 'srv-6',
    title: 'Photo Editing & Manipulation',
    description: 'High-end photo compositing, deep skin retouching, perspective matching, custom lighting overlays, and fantasy photo-manipulations.',
    iconName: 'Sparkles'
  }
];

export const whyChooseMe: WhyChooseMeItem[] = [
  {
    id: 'wcm-1',
    title: 'High Quality',
    description: 'Pixel-perfect outputs up to 4K resolution, keeping text crisp, color balance realistic, and assets pristine.',
    iconName: 'CheckCircle'
  },
  {
    id: 'wcm-2',
    title: 'Fast Delivery',
    description: 'Highly streamlined workflows ensure your thumbnails, banners, or posts are delivered in as little as 24-48 hours.',
    iconName: 'Zap'
  },
  {
    id: 'wcm-3',
    title: 'Creative Design',
    description: 'Every graphic is handcrafted from scratch, skipping generic presets to give your brand a completely distinct visual footprint.',
    iconName: 'Palette'
  },
  {
    id: 'wcm-4',
    title: 'Unlimited Creativity',
    description: 'From sci-fi and fantasy photo-manipulations to minimalist corporate structures, no design theme is beyond reach.',
    iconName: 'Infinity'
  },
  {
    id: 'wcm-5',
    title: 'Client Satisfaction',
    description: 'Collaborative revision cycles and active messaging support to make sure the final graphics exceed your expectations.',
    iconName: 'Smile'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alex Rivera',
    role: 'Tech Creator & YouTuber',
    company: 'RiveraTech (1.2M Subs)',
    feedback: 'ZinFX revolutionized our click-through rate. Before working with them, our CTR hovered around 4.8%. Within two weeks of their custom gaming/tech thumbnails, we surged to a stable 9.4%! They are an absolute genius with visual hierarchy and lighting.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Marketing Lead',
    company: 'Aether Clothing',
    feedback: 'We commissioned ZinFX for our seasonal product posters and social graphics. Their photo-manipulation skills are top-tier. They blended raw photography with cyberpunk-inspired futuristic components perfectly. Delivery was swift, and communication was superb.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'NeoCafe Global',
    feedback: 'The rebranding package ZinFX designed for our coffee chain completely captured our modern organic vibe. They gave us an exquisite minimalist brand mark and social media kits that receive constant praise from our customers. Highly recommended!',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 'test-4',
    name: 'David K.',
    role: 'Professional Streamer',
    company: 'DKGamer_Live',
    feedback: 'Amazing twitch overlays, panels, and custom banners. ZinFX completely cleaned up my stream presentation. The custom graphics have a high-end cinematic feel that sets my channel far apart from competitors.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:amzadhossen044@gmail.com',
    iconName: 'Mail',
    colorClass: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/40',
    badgeText: 'Response in < 12h'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/8801619142076',
    iconName: 'MessageSquare',
    colorClass: 'bg-green-600 hover:bg-green-500 text-white shadow-green-950/40',
    badgeText: 'Instant Chat'
  },
  {
    name: 'Fiverr',
    url: 'https://www.fiverr.com/ah_amzad',
    iconName: 'ExternalLink',
    colorClass: 'bg-zinc-800 hover:bg-zinc-700 text-[#1dbf73] border border-zinc-700',
    badgeText: 'Hire Me Directly'
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/amzadhossen7',
    iconName: 'Globe',
    colorClass: 'bg-zinc-800 hover:bg-zinc-700 text-[#0057ff] border border-zinc-700',
    badgeText: 'High-Res Designs'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/zinfx',
    iconName: 'Instagram',
    colorClass: 'bg-zinc-800 hover:bg-zinc-700 text-[#e1306c] border border-zinc-700'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/zinfx',
    iconName: 'Facebook',
    colorClass: 'bg-zinc-800 hover:bg-zinc-700 text-[#1877f2] border border-zinc-700'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ah-amzad01113',
    iconName: 'Linkedin',
    colorClass: 'bg-zinc-800 hover:bg-zinc-700 text-[#0a66c2] border border-zinc-700'
  }
];
