import { LucideIcon } from 'lucide-react';

export interface NavMenuLink {
  name: string;
  path: string;
  sublinks?: NavMenuLink[];
  target?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FooterSection {
  title: string;
  links?: { name: string; url: string }[];
  content?: string[];
}

export interface MemberProfile {
  name: string;
  role: string;
  degree: string;
  email?: string;
  image?: string;
}

export interface LabDetail {
  name: string;
  equipment: string[];
  description: string;
  image: string;
}

export interface PageContent {
  title: string;
  subtitle: string;
  image: string;
  intro: string;
  paragraphs: string[];
  features?: {
    title: string;
    items: string[];
  }[];
  documents?: {
    title: string;
    size: string;
    date: string;
  }[];
  members?: MemberProfile[];
  labs?: LabDetail[];
  author?: string;
}