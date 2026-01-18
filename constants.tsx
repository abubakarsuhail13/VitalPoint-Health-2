
import React from 'react';
import { Activity, ShieldCheck, Heart, UserPlus, Brain, Clock } from 'lucide-react';
import { Feature, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Wellness AI', href: '#ai' },
  { label: 'About Us', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
];

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Precision Care',
    description: 'Personalized health protocols tailored to your unique genetic and lifestyle data.',
    icon: 'Brain'
  },
  {
    id: 'f2',
    title: '24/7 Monitoring',
    description: 'Real-time vitals tracking with instant alerts for you and your care team.',
    icon: 'Activity'
  },
  {
    id: 'f3',
    title: 'Secure Records',
    description: 'Your medical history protected by military-grade encryption and privacy controls.',
    icon: 'ShieldCheck'
  },
  {
    id: 'f4',
    title: 'Global Network',
    description: 'Access to top-tier medical specialists across the globe at any time.',
    icon: 'UserPlus'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6 text-emerald-500" />,
  Activity: <Activity className="w-6 h-6 text-blue-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
  UserPlus: <UserPlus className="w-6 h-6 text-teal-500" />,
  Heart: <Heart className="w-6 h-6 text-rose-500" />,
  Clock: <Clock className="w-6 h-6 text-amber-500" />,
};
