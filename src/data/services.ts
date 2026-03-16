import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-applications",
    icon: "Globe",
    title: "Web Applications",
    description:
      "Custom business web applications built with structured architecture — Angular on the frontend, ASP.NET Core on the backend.",
    highlights: [
      "Angular single-page applications",
      "ASP.NET Core Web API backend",
      "TypeScript throughout the stack",
      "JWT authentication & session management",
      "Deployment on cloud infrastructure",
    ],
  },
  {
    id: "admin-systems",
    icon: "LayoutDashboard",
    title: "Admin Systems & Internal Tools",
    description:
      "Admin panels, internal business tools and operational platforms built for the teams that run your organization.",
    highlights: [
      "Role-based access control (RBAC)",
      "CRUD interfaces & data management",
      "User and permission management",
      "Angular Material UI components",
      "Multi-user back-office systems",
    ],
  },
  {
    id: "dashboards",
    icon: "Zap",
    title: "Dashboards & Data Interfaces",
    description:
      "Operational dashboards and reporting interfaces that give your team visibility into the data that matters.",
    highlights: [
      "Data tables with filtering & sorting",
      "Report generation & export",
      "Real-time data views",
      "Role-based data visibility",
      "Business KPI screens",
    ],
  },
  {
    id: "api-integrations",
    icon: "Plug",
    title: "API Integrations & Automation",
    description:
      "Integration of external services into your systems and automation of repetitive business processes.",
    highlights: [
      "REST API development & integration",
      "Third-party service connections",
      "Background jobs & scheduled tasks",
      "Data sync between systems",
      "Process automation workflows",
    ],
  },
];
