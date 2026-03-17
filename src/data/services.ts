import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "internal-systems",
    icon: "LayoutDashboard",
    title: "Internal Business Systems & Admin Panels",
    description:
      "Custom back-office platforms that give your team full control over business data, users, and operations — built to your exact process, not a generic template.",
    highlights: [
      "Multi-role admin panels with tailored views per user type",
      "Entity management with filtering, pagination, and bulk actions",
      "User management, role assignments, and activity logging",
      "Configurable workflows for business-specific processes",
      "Designed for daily use by operations teams, not just IT",
    ],
  },
  {
    id: "access-control",
    icon: "ShieldCheck",
    title: "Role & Permission-Based Access Control",
    description:
      "Granular access control systems that enforce who can see, edit, or act on every resource in your platform — auditable, configurable, and built into the architecture from day one.",
    highlights: [
      "JWT authentication with refresh token management",
      "Role hierarchy and resource-level permission enforcement",
      "Unit-based or department-scoped access logic",
      "Admin interface for managing users and their permissions",
      "Audit trails and access logging for compliance",
    ],
  },
  {
    id: "dashboards",
    icon: "BarChart3",
    title: "Dashboards & Business Reporting",
    description:
      "Operational dashboards and reporting tools that surface the data your teams actually need — filtered by role, exportable, and connected directly to your live business data.",
    highlights: [
      "KPI dashboards tailored per organizational role",
      "Filterable, sortable data grids with export to CSV/Excel",
      "Trend charts, summaries, and drill-down views",
      "Real-time or scheduled data refresh via REST API",
      "Role-based data visibility — each user sees their slice",
    ],
  },
  {
    id: "api-backend",
    icon: "Plug",
    title: "Secure API & Backend Development",
    description:
      "Structured, well-documented APIs and backend services built with ASP.NET Core — designed for reliability, clear separation of concerns, and safe integration with any frontend or external system.",
    highlights: [
      "RESTful API design with DTOs and layered architecture",
      "Third-party system integrations and data sync",
      "Background jobs, scheduled tasks, and event handling",
      "Input validation, error handling, and secure endpoints",
      "Entity Framework with SQL Server — maintainable data layer",
    ],
  },
  {
    id: "automation",
    icon: "Zap",
    title: "Business Process Automation",
    description:
      "Automation of repetitive, manual business processes — so your team spends time on decisions, not data entry. Approval flows, registration pipelines, assignment logic, and more.",
    highlights: [
      "Automated approval and escalation workflows",
      "Data processing pipelines between internal and external systems",
      "Scheduled reporting and notification jobs",
      "Assignment logic and routing rules based on business criteria",
      "Reduction of manual steps in recurring operational tasks",
    ],
  },
  {
    id: "ai-tools",
    icon: "Brain",
    title: "AI-Assisted Internal Tools",
    description:
      "Practical AI integration inside your existing business systems — focused on reducing manual knowledge work, not technology demonstrations. Internal assistants, document processing, and workflow support.",
    highlights: [
      "LLM integration for document summarization and extraction",
      "AI-assisted triage and routing in operational workflows",
      "Internal assistants that work within your access control model",
      "Structured data extraction from unstructured inputs",
      "AI features built into existing platforms, not standalone toys",
    ],
  },
];
