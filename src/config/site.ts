/**
 * Site-wide configuration — Michael Lu personal portfolio.
 */
export const siteConfig = {
  name: "Michael Lu",
  title: "Michael Lu — Business Systems & Full-Stack Developer",
  description:
    "I build practical business software: internal systems, dashboards, admin panels, and automation tools that help organizations work better.",
  url: "https://lm-dev-portfolio.vercel.app",
  tagline: "Practical software that solves real business problems.",
  email: "",
  location: "Israel",
  availability: "Available for freelance projects and collaborations",

  // Social links
  socials: {
    github: "https://github.com/Michael13Lu",
    linkedin: "",
    twitter: "",
  },

  // Contact / booking link
  bookingUrl: "/contact",

  // SEO
  keywords: [
    "business software developer",
    "full-stack developer",
    "Angular developer",
    "ASP.NET Core developer",
    "admin panel development",
    "internal tools",
    "business dashboard",
    "REST API development",
    "role-based access control",
    "TypeScript developer",
    "Israel developer",
    "C# developer",
  ],

  // Open Graph image (place in /public)
  ogImage: "/og-image.png",
} as const;
