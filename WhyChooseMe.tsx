/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  aspectRatio: '16:9' | '4:3' | '1:1' | '3:4';
  client?: string;
  tags?: string[];
  platform?: string;
  softwareUsed?: string[];
  isFeatured?: boolean;
  displayOrder?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
}

export interface WhyChooseMeItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  feedback: string;
  avatarUrl: string;
  rating: number;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  colorClass: string;
  badgeText?: string;
}

export interface TaxonomyConfig {
  categories: { id: string; label: string }[];
  platforms: string[];
  software: string[];
}
