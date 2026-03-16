import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
      { name: "Recharts / Chart.js", level: 4 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "REST API Design", level: 5 },
      { name: "PostgreSQL", level: 5 },
      { name: "Prisma ORM", level: 5 },
      { name: "Redis", level: 4 },
    ],
  },
  {
    category: "AI & Integrations",
    skills: [
      { name: "OpenAI / Claude APIs", level: 5 },
      { name: "LangChain / RAG", level: 4 },
      { name: "Stripe", level: 5 },
      { name: "Salesforce API", level: 4 },
      { name: "Webhooks & Events", level: 5 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Vercel / AWS", level: 4 },
      { name: "Docker", level: 4 },
      { name: "Git & GitHub", level: 5 },
      { name: "CI/CD Pipelines", level: 4 },
      { name: "Monitoring & Logging", level: 4 },
    ],
  },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Redis",
  "Docker",
  "Vercel",
  "AWS",
  "Stripe",
  "OpenAI",
  "Claude AI",
];
