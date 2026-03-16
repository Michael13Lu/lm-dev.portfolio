import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-applications",
    icon: "Globe",
    title: "Web Applications",
    description:
      "Custom web platforms designed for real business workflows — structured, maintainable, and built to operate in production.",
    highlights: [
      "Angular single-page applications",
      "ASP.NET Core Web API backend",
      "TypeScript throughout the stack",
      "JWT authentication & user management",
      "Scalable, production-ready architecture",
    ],
  },
  {
    id: "admin-systems",
    icon: "LayoutDashboard",
    title: "Admin Systems & Internal Platforms",
    description:
      "Internal management systems and operational tools that give teams full control over their business data and workflows.",
    highlights: [
      "Role-based access control (RBAC)",
      "User and permission management",
      "CRUD interfaces & data management",
      "Multi-role back-office systems",
      "CRM-style operational platforms",
    ],
  },
  {
    id: "dashboards",
    icon: "Zap",
    title: "Dashboards & Data Analysis",
    description:
      "Data dashboards and reporting interfaces that surface the operational information organizations need to make decisions.",
    highlights: [
      "Operational KPI dashboards",
      "Data tables with filtering & sorting",
      "Report generation & export",
      "Role-based data visibility",
      "Business analytics interfaces",
    ],
  },
  {
    id: "api-integrations",
    icon: "Plug",
    title: "API Integrations & Business Automation",
    description:
      "Integration of external services into your systems and automation of repetitive business workflows.",
    highlights: [
      "REST API development & integration",
      "Third-party service connections",
      "Background jobs & scheduled tasks",
      "Data sync between systems",
      "Process automation workflows",
    ],
  },
  {
    id: "ai-tools",
    icon: "Brain",
    title: "AI-Assisted Tools & Business Agents",
    description:
      "AI-powered assistants and workflow tools that help businesses automate knowledge work and operational decisions.",
    highlights: [
      "AI agents for business workflows",
      "LLM integrations for business tasks",
      "AI-assisted data processing",
      "Workflow automation with AI",
      "Practical AI inside business systems",
    ],
  },
  {
    id: "cloud-devops",
    icon: "Wrench",
    title: "Deployment & Cloud Infrastructure",
    description:
      "Deploying and operating applications using cloud environments, CI/CD pipelines, and production infrastructure.",
    highlights: [
      "Cloud deployment (AWS, Vercel)",
      "CI/CD pipeline setup",
      "Docker-based environments",
      "Linux server management",
      "Production build & release automation",
    ],
  },
];
