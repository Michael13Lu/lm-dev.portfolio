/**
 * Site-wide configuration — Michael Lu personal portfolio.
 */
export const siteConfig = {
  name: "Michael Lu",
  title: "Michael Lu — Business Systems & Full-Stack Developer",
  description:
    "I build practical business software: internal systems, dashboards, admin platforms, automation tools, and AI-assisted solutions that help organizations work better.",
  url: "https://lm-dev-portfolio.vercel.app",
  tagline: "Internal systems, dashboards, and automation tools that help businesses run better.",
  email: "",
  location: "Remote — Worldwide",
  availability: "Open to remote projects worldwide",

  // Social links
  socials: {
    github: "https://github.com/Michael13Lu",
    linkedin: "",
    twitter: "",
  },

  // Contact link
  bookingUrl: "/contact",

  // SEO
  keywords: [
    "business systems developer",
    "full-stack developer",
    "Angular developer",
    "ASP.NET Core developer",
    "admin systems",
    "internal tools",
    "dashboards",
    "data analysis",
    "API integrations",
    "process automation",
    "CRM systems",
    "AI-assisted tools",
    "AI agents",
    "cloud deployment",
    "CI/CD",
    "TypeScript developer",
    "C# developer",
    "remote developer",
    "freelance full-stack developer",
  ],

  // Open Graph image (place in /public)
  ogImage: "/og-image.png",
} as const;
