import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-applications",
    icon: "Globe",
    title: "Web Applications",
    description:
      "Full-stack web applications built with modern frameworks. From concept to deployment — clean code, great UX, and scalable architecture.",
    highlights: [
      "Next.js & React front-ends",
      "REST & GraphQL APIs",
      "Authentication & user management",
      "Third-party integrations",
      "Performance optimization",
    ],
  },
  {
    id: "admin-dashboards",
    icon: "LayoutDashboard",
    title: "Admin Systems & Dashboards",
    description:
      "Custom back-office tools and data dashboards that give your team full visibility and control over your business operations.",
    highlights: [
      "Real-time data visualization",
      "Role-based access control",
      "CRUD interfaces & data tables",
      "Export & reporting features",
      "Multi-tenant architecture",
    ],
  },
  {
    id: "api-integrations",
    icon: "Plug",
    title: "API & System Integrations",
    description:
      "Connect your tools, platforms, and data sources so everything works together seamlessly — no more manual data transfer.",
    highlights: [
      "Payment gateways (Stripe, PayPal)",
      "CRM & ERP integrations",
      "Webhooks & event-driven pipelines",
      "Email & notification systems",
      "External data providers",
    ],
  },
  {
    id: "process-automation",
    icon: "Zap",
    title: "Process Automation",
    description:
      "Identify repetitive tasks and automate them. Save your team hours every week with reliable, well-tested automation workflows.",
    highlights: [
      "Document & report generation",
      "Scheduled jobs & cron tasks",
      "Data sync between systems",
      "Email & alert automation",
      "Workflow orchestration",
    ],
  },
  {
    id: "ai-solutions",
    icon: "Brain",
    title: "AI-Assisted Solutions",
    description:
      "Practical AI features that add real value — from intelligent data extraction to AI-powered content generation and smart search.",
    highlights: [
      "LLM integrations (OpenAI, Claude)",
      "RAG & document Q&A systems",
      "AI-powered data extraction",
      "Smart content generation",
      "Semantic search",
    ],
  },
  {
    id: "internal-tools",
    icon: "Wrench",
    title: "Internal Business Tools",
    description:
      "Custom software built specifically for your team's workflows — faster and better than trying to adapt off-the-shelf products.",
    highlights: [
      "Inventory & resource management",
      "Employee portals & intranet",
      "Project tracking systems",
      "Custom form builders",
      "Approval & review workflows",
    ],
  },
];
