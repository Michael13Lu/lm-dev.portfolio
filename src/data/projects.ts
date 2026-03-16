import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ops-dashboard",
    title: "Operations Command Center",
    description:
      "A real-time operations dashboard for a logistics company — tracking fleet, orders, and performance KPIs across 12 regions.",
    longDescription:
      "Built a full-stack dashboard that replaced 4 separate spreadsheet workflows. Features real-time updates via WebSockets, role-based access for managers and drivers, PDF report generation, and a mobile-responsive design for field staff.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets", "Recharts"],
    category: "dashboard",
    featured: true,
    results: [
      "Replaced 4 manual spreadsheet workflows",
      "Reduced reporting time by 70%",
      "Used daily by 80+ team members",
    ],
  },
  {
    id: "ai-document-processor",
    title: "AI Document Intelligence Platform",
    description:
      "An AI-powered platform that extracts, classifies, and structures data from uploaded documents — invoices, contracts, forms.",
    longDescription:
      "Built an end-to-end document processing pipeline using Claude AI for extraction, a custom review UI for corrections, and automatic export to the client's ERP system via API.",
    tags: ["Next.js", "Claude AI", "Node.js", "PostgreSQL", "AWS S3"],
    category: "ai",
    featured: true,
    results: [
      "Processes 500+ documents per day",
      "95% extraction accuracy",
      "Saved 40 hours/week of manual data entry",
    ],
  },
  {
    id: "b2b-saas-portal",
    title: "B2B Client Portal",
    description:
      "A multi-tenant SaaS portal where enterprise clients manage their accounts, view invoices, submit support tickets, and track project status.",
    longDescription:
      "Built from scratch with multi-tenancy, Stripe billing integration, custom onboarding flows, and a white-label option. Deployed on Vercel with edge functions for fast global performance.",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    category: "web-app",
    featured: true,
    results: [
      "Onboarded 30+ enterprise clients",
      "Reduced support load by 35%",
      "White-label ready",
    ],
  },
  {
    id: "erp-integration",
    title: "ERP & CRM Sync Engine",
    description:
      "A custom middleware service that keeps data in sync across Salesforce, SAP, and a proprietary inventory system in real time.",
    longDescription:
      "Designed an event-driven sync engine with conflict resolution, retry logic, and a monitoring dashboard. Processes thousands of events per day with zero data loss.",
    tags: ["Node.js", "TypeScript", "Salesforce API", "SAP", "Redis", "Docker"],
    category: "api",
    results: [
      "10,000+ events processed daily",
      "Zero data loss in 8 months",
      "Eliminated manual cross-system updates",
    ],
  },
  {
    id: "inventory-management",
    title: "Warehouse Inventory System",
    description:
      "A custom inventory management application for a manufacturing company with barcode scanning, stock alerts, and supplier tracking.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "React Query"],
    category: "internal-tool",
    results: [
      "Real-time stock visibility",
      "Reduced stockouts by 60%",
      "Integrated with existing POS system",
    ],
  },
  {
    id: "automation-pipeline",
    title: "HR Onboarding Automation",
    description:
      "Automated the full new-hire onboarding process — document collection, account provisioning, notifications, and compliance tracking.",
    tags: ["Node.js", "TypeScript", "Zapier API", "SendGrid", "PostgreSQL"],
    category: "automation",
    results: [
      "Reduced onboarding time from 3 days to 4 hours",
      "100% compliance tracking",
      "Integrated with HR, IT, and Finance systems",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
