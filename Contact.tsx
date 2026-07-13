/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Youtube,
  Instagram,
  Image,
  Layers,
  Award,
  Sparkles,
  CheckCircle,
  Zap,
  Palette,
  Smile,
  Mail,
  MessageSquare,
  ExternalLink,
  Globe,
  Facebook,
  Linkedin,
  Menu,
  X,
  ChevronRight,
  Star,
  ArrowUpRight,
  Download,
  Send,
  Check,
  Infinity,
  ArrowRight,
  ShieldAlert,
  Flame,
  LayoutDashboard,
  User,
  Share2,
  LogOut,
  Eye,
  Lock,
  Upload,
  Search,
  Edit,
  Trash2,
  Plus
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Youtube,
  Instagram,
  Image,
  Layers,
  Award,
  Sparkles,
  CheckCircle,
  Zap,
  Palette,
  Smile,
  Mail,
  MessageSquare,
  ExternalLink,
  Globe,
  Facebook,
  Linkedin,
  Menu,
  X,
  ChevronRight,
  Star,
  ArrowUpRight,
  Download,
  Send,
  Check,
  Infinity,
  ArrowRight,
  ShieldAlert,
  Flame,
  LayoutDashboard,
  User,
  Share2,
  LogOut,
  Eye,
  Lock,
  Upload,
  Search,
  Edit,
  Trash2,
  Plus
};

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
  key?: React.Key;
}

export default function LucideIcon({ name, className = '', size = 24 }: LucideIconProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    // Fallback to Sparkles if not found
    return <Sparkles className={className} size={size} />;
  }
  
  return <IconComponent className={className} size={size} />;
}
