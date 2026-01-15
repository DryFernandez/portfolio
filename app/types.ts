export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level?: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  id: number;
  type: 'work' | 'education' | 'certification';
  title: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  url: string;
  stars?: number;
  language?: string;
}

export interface ContactInfo {
  email: string;
  whatsapp?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}
