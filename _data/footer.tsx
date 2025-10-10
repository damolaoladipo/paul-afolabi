import { InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from "@/components/shared/social-icons";

export const footerData = {
  brand: {
    name: "Paul Afolabi",
    bio: "Paul Afolabi is a software engineer who has scaled digital banking at two of Africa’s top banks across 10+ countries, serving 100 million customers and an annual revenue of over $500K.",
    address: "",
    telephone: "Mail me: hello@paulafolabi.com",
    email: "paulafolabi745@gmail.com",
    buitBy: "Made with ❤️ by Damola",
    copyright: ". All rights reserved.",
    ownedBy: "Paul Afolabi",
  },
  socialLinks: [
    {
      href: "https://instagram.com/afolabi_paul_",
      label: "Instagram",
      icon: InstagramIcon,
    },
    {
      href: "https://www.youtube.com/@paulthinky",
      label: "YouTube",
      icon: YouTubeIcon,
    },
    {
      href: "https://www.linkedin.com/in/paul-afolabi-1a2238169/",
      label: "LinkedIn",
      icon: LinkedInIcon,
    },
    {
      href: "https://x.com/afo_labipaul",
      label: "X",
      icon: XIcon,
    },
  ],
    programs: {
    group: "Links",
    items: [
      { href: "#projects", label: "Projects" },
      { href: "/resume", label: "Resume" },
      { href: "https://medium.com/@paulafolabi745", label: "Articles" },
      
    ],
  },
  about: {
    group: "About",
    items: [
      
      { href: "/about", label: "About me" },
      { href: "/contact", label: "Contact" },
    ],
  }
    
};