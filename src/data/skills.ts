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
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "ASP.NET Core", level: 5 },
      { name: "C#", level: 5 },
      { name: "REST API Design", level: 5 },
      { name: "JWT Authentication", level: 5 },
      { name: "Entity Framework", level: 4 },
    ],
  },
  {
    category: "Data & Logic",
    skills: [
      { name: "SQL", level: 5 },
      { name: "RBAC & Permissions", level: 5 },
      { name: "Business Rules", level: 4 },
      { name: "Reporting Logic", level: 4 },
      { name: "Authorization", level: 5 },
    ],
  },
  {
    category: "Tools & Infrastructure",
    skills: [
      { name: "Git & GitHub", level: 5 },
      { name: "Postman", level: 5 },
      { name: "Vercel", level: 4 },
      { name: "System Integration", level: 4 },
      { name: "Debugging", level: 5 },
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
  "Git",
  "Vercel",
];
