import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "enterprise-workflow-system",
    title: "Enterprise Workflow System",
    description:
      "Internal business workflow platform for managing operations, tasks, and team coordination across departments.",
    longDescription:
      "A full-stack internal platform built with Angular and ASP.NET Core to replace fragmented manual processes. Features include structured workflow management, department-level task tracking, role-based visibility, audit trails, and an admin panel for system configuration. Secured with JWT authentication and a layered RBAC system. Designed to be maintainable and extensible for evolving business needs.",
    tags: ["Angular", "ASP.NET Core", "C#", "SQL", "JWT", "RBAC", "Entity Framework"],
    category: "internal-tool",
    featured: true,
    results: [
      "Replaced fragmented manual coordination across departments",
      "Full audit trail and role-based access per user type",
      "Admin panel for workflow and user configuration",
    ],
  },
  {
    id: "admin-operations-system",
    title: "Admin & Operations Management System",
    description:
      "Admin interface for managing business operations — users, records, permissions, and operational data in one centralized platform.",
    longDescription:
      "Built a structured back-office management system using Angular Material and an ASP.NET Core API. Provides admin users with full control over business records: user management, role assignments, entity management with advanced filtering and pagination, data export, and activity logging. Designed for internal operations teams managing day-to-day business data.",
    tags: ["Angular", "Angular Material", "ASP.NET Core", "C#", "SQL", "REST API", "TypeScript"],
    category: "internal-tool",
    featured: true,
    results: [
      "Centralized management of users, roles, and business records",
      "Advanced filtering, sorting, and pagination on all data views",
      "Export and reporting features for operational data",
    ],
  },
  {
    id: "business-dashboard-platform",
    title: "Business Dashboard Platform",
    description:
      "Operational dashboards and reporting tools providing real-time visibility into business data and key performance indicators.",
    longDescription:
      "Developed a data dashboard platform connecting to a SQL backend via ASP.NET Core APIs. The interface provides role-based KPI views, filterable data grids, trend charts, and exportable reports. Each user role sees a tailored view of the data most relevant to their function — from high-level executive summaries to detailed operational records for back-office staff.",
    tags: ["Angular", "ASP.NET Core", "SQL", "REST API", "TypeScript", "Data Analysis"],
    category: "dashboard",
    featured: true,
    results: [
      "Role-tailored views for different organizational levels",
      "Exportable reports and KPI tracking",
      "Real-time data from SQL backend via REST API",
    ],
  },
  {
    id: "rbac-access-platform",
    title: "Role-Based Access Platform",
    description:
      "JWT-based authentication and authorization system with granular role and permission management for multi-user business applications.",
    longDescription:
      "Designed and implemented a reusable RBAC module using ASP.NET Core Identity, JWT tokens, and custom authorization middleware. Supports multiple roles, resource-level permissions, and an admin interface for managing users and their access rights. Built as a foundation layer applicable across internal business systems, ensuring secure and auditable access control.",
    tags: ["ASP.NET Core", "C#", "JWT", "RBAC", "Authorization", "Angular", "TypeScript"],
    category: "web-app",
    results: [
      "Granular permission control per resource and action",
      "Reusable auth module integrated across multiple systems",
      "Secure, auditable token-based session management",
    ],
  },
  {
    id: "automation-ai-business-tools",
    title: "Automation & AI Business Tools",
    description:
      "Automation workflows and AI-assisted tools for reducing manual work and supporting operational decision-making.",
    longDescription:
      "Worked on automation and AI integration projects: connecting REST APIs between business systems, building scheduled background jobs in ASP.NET Core, automating data processing pipelines, and integrating LLM-based assistants into business workflows. Focused on practical AI use — document summarization, structured data extraction, and AI agents that assist staff with routine operational tasks.",
    tags: ["ASP.NET Core", "C#", "REST APIs", "AI Agents", "Automation", "TypeScript", "SQL"],
    category: "ai",
    results: [
      "Automated recurring data processing workflows",
      "AI-assisted tools integrated into operational systems",
      "Reduced manual steps in key business processes",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
