import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "enterprise-workflow-system",
    title: "Enterprise Workflow & Operations Platform",
    description:
      "A full internal platform replacing fragmented coordination across departments — structured workflows, task ownership, and audit trails in one system.",
    longDescription:
      "The client was managing operations across several departments using a combination of spreadsheets, email chains, and disconnected tools. Tasks were falling through the cracks, there was no clear ownership, and management had no visibility into what was happening. I built a full-stack internal platform with Angular and ASP.NET Core that centralised all of this: structured workflow management, department-level task tracking, role-based visibility per team, and a full audit trail on every action. Admins can configure workflows and user permissions without touching code. JWT authentication and a layered RBAC system ensure each user sees only what they should.",
    tags: ["Angular", "ASP.NET Core", "C#", "SQL Server", "JWT", "RBAC", "Entity Framework"],
    category: "internal-tool",
    featured: true,
    results: [
      "Replaced manual cross-department coordination with a structured, auditable system",
      "Role-based visibility reduced data exposure and improved team focus",
      "Admin panel allows non-technical staff to configure workflows independently",
    ],
  },
  {
    id: "admin-operations-system",
    title: "Back-Office Management System",
    description:
      "A centralised admin interface for managing users, records, roles, and operational data — built for an internal operations team handling high daily volume.",
    longDescription:
      "The operations team was relying on direct database access and manual exports to manage business records. This created errors, access risks, and slow turnaround. I built a structured back-office system using Angular Material and an ASP.NET Core API, giving the team a proper interface: full user management with role assignments, entity-level CRUD with advanced filtering and pagination, bulk operations, data export, and activity logging. Every action is logged and attributable to a specific user. The system is designed around the team's actual daily workflow — not a generic admin panel.",
    tags: ["Angular", "Angular Material", "ASP.NET Core", "C#", "SQL Server", "REST API", "TypeScript"],
    category: "internal-tool",
    featured: true,
    results: [
      "Eliminated direct database access — all operations go through a controlled interface",
      "Advanced filtering and pagination reduced lookup time for high-volume record management",
      "Export and reporting features replaced manual data extraction processes",
    ],
  },
  {
    id: "business-dashboard-platform",
    title: "Multi-Role Business Dashboard",
    description:
      "An operational data platform providing each user role with a tailored view of the KPIs and records relevant to their function — from executive summaries to detailed operational data.",
    longDescription:
      "The business had data in SQL but no way to surface it in a usable form. Different teams needed different views: executives needed high-level KPI summaries, ops staff needed filterable record grids, and managers needed trend data with export capability. I built a dashboard platform connecting Angular to an ASP.NET Core API layer backed by SQL Server. Each user role gets a tailored view based on their permissions. The platform includes filterable data grids, trend charts, exportable reports in CSV format, and real-time data refresh. Roles and data visibility are controlled through the same RBAC system used across the platform.",
    tags: ["Angular", "ASP.NET Core", "SQL Server", "REST API", "TypeScript", "Reporting"],
    category: "dashboard",
    featured: true,
    results: [
      "Each organizational role now has a purpose-built data view — no more generic reports",
      "Exportable reports replaced manual data extraction requests to the dev team",
      "Real-time KPI visibility gave management immediate operational awareness",
    ],
  },
  {
    id: "rbac-access-platform",
    title: "Granular Access Control System",
    description:
      "A reusable role and permission management module built as a foundation layer for multi-user internal platforms — granular, auditable, and configurable without code changes.",
    longDescription:
      "Many internal systems share the same access control problem: who can see, edit, or act on which resources? I designed and implemented a reusable RBAC module using ASP.NET Core Identity, JWT tokens, and custom authorization middleware. It supports multiple roles, resource-level permission assignments, and department or unit-scoped access rules. An admin interface lets authorised staff manage users and their access rights directly — no developer involvement required for routine permission changes. The module is built to be integrated across multiple systems and has been reused as a foundation in several subsequent projects.",
    tags: ["ASP.NET Core", "C#", "JWT", "RBAC", "Authorization Middleware", "Angular", "TypeScript"],
    category: "web-app",
    results: [
      "Granular permission control per resource type and action — read, write, approve, export",
      "Admin-managed permissions removed the developer bottleneck from routine access changes",
      "Reusable module integrated as a foundation layer across multiple internal systems",
    ],
  },
  {
    id: "automation-ai-business-tools",
    title: "Workflow Automation & AI Integration",
    description:
      "Automation of recurring manual processes and AI-assisted tools integrated into operational workflows — reducing repetitive work and supporting faster decision-making.",
    longDescription:
      "Several business processes were consuming disproportionate staff time: manual data entry between systems, repetitive document review, and recurring report generation. I built automation workflows using ASP.NET Core background jobs and scheduled tasks to handle recurring data processing, and integrated REST APIs to sync data between internal and external systems automatically. On the AI side, I integrated LLM-based assistants for document summarization and structured data extraction from unstructured inputs — embedded directly inside the existing internal platform, with full access control applied. The focus throughout was on measurable reduction of manual steps, not AI for its own sake.",
    tags: ["ASP.NET Core", "C#", "REST APIs", "LLM Integration", "Background Jobs", "TypeScript", "SQL Server"],
    category: "ai",
    results: [
      "Automated recurring data sync eliminated daily manual transfer between systems",
      "AI-assisted document processing reduced review time on high-volume intake workflows",
      "Scheduled reporting replaced manual exports — delivered automatically to stakeholders",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
