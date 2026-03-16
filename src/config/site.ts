/**
 * Site-wide configuration — update these values with your real information.
 */
export const siteConfig = {
  name: "Alex Morgan",
  title: "Alex Morgan — Freelance Full-Stack Developer",
  description:
    "I build clean, scalable web applications, admin systems, dashboards, and AI-assisted tools for businesses that need reliable software done right.",
  url: "https://alexmorgan.dev",
  tagline: "Building software that works for your business.",
  email: "hello@alexmorgan.dev",
  location: "Remote — Worldwide",
  availability: "Available for new projects",

  // Social links
  socials: {
    github: "https://github.com/alexmorgan",
    linkedin: "https://linkedin.com/in/alexmorgan",
    twitter: "https://twitter.com/alexmorgan",
  },

  // Calendly / booking link (optional)
  bookingUrl: "https://calendly.com/alexmorgan",

  // SEO
  keywords: [
    "freelance developer",
    "full-stack developer",
    "web application development",
    "Next.js developer",
    "React developer",
    "admin dashboard",
    "API integration",
    "business software",
    "AI integration",
    "TypeScript developer",
  ],

  // Open Graph image (place in /public)
  ogImage: "/og-image.png",
} as const;
