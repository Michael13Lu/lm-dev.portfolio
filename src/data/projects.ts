import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "employee-management-system",
    title: "Employee Management System",
    description:
      "Internal HR platform for managing employees, departments, roles and work records — built with Angular and ASP.NET Core.",
    longDescription:
      "A full-stack internal platform that replaced manual HR spreadsheets. Features include employee records management, department hierarchy, role assignments, work schedule tracking and a dedicated admin panel for HR staff. Backend built with ASP.NET Core Web API and Entity Framework, secured with JWT authentication and role-based access control.",
    tags: ["Angular", "ASP.NET Core", "C#", "SQL", "JWT", "Entity Framework"],
    category: "internal-tool",
    featured: true,
    results: [
      "Centralized employee data across departments",
      "Role-based access for HR, managers and staff",
      "Replaced manual spreadsheet workflows",
    ],
  },
  {
    id: "rbac-auth-system",
    title: "Role-Based Access Control System",
    description:
      "JWT-secured authentication and authorization architecture with granular role and permission management for multi-user business applications.",
    longDescription:
      "Designed and implemented a reusable RBAC module using ASP.NET Core Identity, JWT tokens and custom permission middleware. Supports multiple roles, resource-level permissions, and an admin interface for managing users and their access rights. Integrated as a foundation layer into multiple internal projects.",
    tags: ["ASP.NET Core", "C#", "JWT", "RBAC", "TypeScript", "Angular"],
    category: "web-app",
    featured: true,
    results: [
      "Granular permission control per resource and action",
      "Reusable auth module across multiple projects",
      "Secure token-based session management",
    ],
  },
  {
    id: "business-operations-dashboard",
    title: "Business Operations Dashboard",
    description:
      "Admin dashboard for managing operational data — orders, users, reports and system activity — with data tables, filters and export functionality.",
    longDescription:
      "Built a data-heavy admin interface using Angular and Angular Material connected to an ASP.NET Core backend. The dashboard provides a central view of business operations: user management, record browsing with advanced filtering and pagination, report generation, and role-based visibility of data. Designed for internal back-office teams.",
    tags: ["Angular", "Angular Material", "ASP.NET Core", "SQL", "REST API", "TypeScript"],
    category: "dashboard",
    featured: true,
    results: [
      "Unified view of all operational data",
      "Advanced filtering, sorting and pagination",
      "Role-based data visibility per user type",
    ],
  },
  {
    id: "api-integration-automation",
    title: "API Integrations & Process Automation",
    description:
      "Integration of external services and automation of business workflows — reducing manual steps and keeping systems in sync.",
    longDescription:
      "Worked on multiple integration and automation tasks: connecting third-party REST APIs to internal systems, building scheduled background jobs in ASP.NET Core, automating data synchronization between services, and exploring AI-assisted tools for document processing and workflow support. Focus on reliability, error handling and maintainability.",
    tags: ["ASP.NET Core", "C#", "REST APIs", "TypeScript", "SQL", "Automation"],
    category: "automation",
    results: [
      "Automated recurring manual data workflows",
      "Reliable error handling and retry logic",
      "Reduced manual intervention in key processes",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
