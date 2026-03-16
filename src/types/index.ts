export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: ProjectCategory;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  results?: string[];
}

export type ProjectCategory =
  | "web-app"
  | "dashboard"
  | "api"
  | "automation"
  | "ai"
  | "internal-tool";

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1–5
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}
