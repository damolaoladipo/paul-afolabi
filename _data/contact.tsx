// contact-data.ts

import { Globe, Twitter, Linkedin, Mail, Phone, Instagram, Youtube, BookOpen, LucideIcon, XIcon } from "lucide-react";

// --- Types ---

/**
 * Defines the structure for a single card in the UI.
 */
export interface ConnectionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  href: string;
  id: string;
}

/**
 * Defines the structure for direct contact information.
 */
export interface DirectContact {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
}


// --- Data ---

// 1. Direct Contact Information (Email and Phone)
export const DIRECT_CONTACT_INFO: DirectContact[] = [
  {
    icon: Mail,
    title: "Email Address",
    value: "paulafolabi745@gmail.com",
    href: "mailto:paulafolabi745@gmail.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Follow @afo_labipaul",
    href: "https://www.linkedin.com/in/paul-afolabi-1a2238169/",
  },
   {
    icon: XIcon,
    title: "Follow on X (Twitter)",
    value: "Follow @afo_labipaul",
    href: "https://www.linkedin.com/in/paul-afolabi-1a2238169/",
  },
   {
    icon: Instagram,
    title: "Youtube",
    value: "Follow afolabi_paul_",
    href: "https://instagram.com/afolabi_paul_",
  },
  
  
];


// 2. Social and Platform Links (for the cards)
export const CONNECTION_CARDS: ConnectionCardProps[] = [
  {
    id: "linkedin",
    icon: Linkedin,
    title: "Connect on LinkedIn",
    description: "View my professional history and connect with me for opportunities.",
    linkText: "View Profile",
    href: "https://www.linkedin.com/in/paul-afolabi-1a2238169/",
  },
  {
    id: "x",
    icon: Twitter,
    title: "Follow on X (Twitter)",
    description: "Get the latest thoughts on tech, design, and industry news.",
    linkText: "Follow @afo_labipaul",
    href: "https://x.com/afo_labipaul",
  },
  {
    id: "medium",
    icon: BookOpen,
    title: "Read my Articles",
    description: "Explore my long-form writings on various design and development topics.",
    linkText: "Read on Medium",
    href: "https://medium.com/@paulafolabi745",
  },
  {
    id: "youtube",
    icon: Youtube,
    title: "Watch my Videos",
    description: "Check out tutorials, discussions, and creative content on YouTube.",
    linkText: "Subscribe",
    href: "https://www.youtube.com/@paulthinky",
  },
  {
    id: "instagram",
    icon: Instagram,
    title: "View on Instagram",
    description: "A look at personal projects and visual inspirations.",
    linkText: "View Profile",
    href: "https://instagram.com/afolabi_paul_",
  },
  // If you still wanted a general community link, you could add it here
  // {
  //   id: "discord",
  //   icon: Globe,
  //   title: "Join Our Community",
  //   description: "Connect with others on my dedicated community server.",
  //   linkText: "Join Discord",
  //   href: "#",
  // },
];

// 3. Header Text
export const CONTACT_HEADER = {
  title: "Let's Connect & Collaborate",
  subtitle: "Whether you have a project idea, a question, or just want to network, here are all the ways to reach out.",
};