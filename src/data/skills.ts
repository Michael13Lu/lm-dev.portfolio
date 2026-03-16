import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Angular", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "JavaScript", level: 4 },
      { name: "Angular Material", level: 4 },
      { name: "HTML / CSS", level: 4 },
      { name: "Responsive UI", level: 4 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "ASP.NET Core", level: 5 },
      { name: "C#", level: 5 },
      { name: "REST API Design", level: 5 },
      { name: "JWT Authentication", level: 5 },
      { name: "Authorization", level: 5 },
      { name: "Entity Framework", level: 4 },
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      { name: "SQL", level: 5 },
      { name: "Data Analysis", level: 4 },
      { name: "Data Processing", level: 4 },
      { name: "Reporting Logic", level: 4 },
      { name: "Business Analytics", level: 4 },
    ],
  },
  {
    category: "Business Systems",
    skills: [
      { name: "RBAC & Permissions", level: 5 },
      { name: "Workflow Systems", level: 4 },
      { name: "CRM-style Platforms", level: 4 },
      { name: "Admin Systems", level: 5 },
      { name: "Process Automation", level: 4 },
    ],
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "AI-assisted Tools", level: 3 },
      { name: "AI Agents for Business", level: 3 },
      { name: "Workflow Automation", level: 4 },
      { name: "LLM Integrations", level: 3 },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 3 },
      { name: "Cloud Infrastructure", level: 3 },
      { name: "CI/CD Pipelines", level: 3 },
      { name: "Docker", level: 3 },
      { name: "Linux Servers", level: 3 },
      { name: "Production Deployments", level: 4 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", level: 5 },
      { name: "Postman", level: 5 },
      { name: "Vercel", level: 4 },
      { name: "Debugging", level: 5 },
      { name: "System Integration", level: 4 },
    ],
  },
];

export const techStack = [
  "Angular",
  "TypeScript",
  "ASP.NET Core",
  "C#",
  "SQL",
  "REST APIs",
  "JWT",
  "RBAC",
  "Entity Framework",
  "Angular Material",
  "AWS",
  "Docker",
  "CI/CD",
  "Git",
  "Vercel",
];
