import { Project } from '@/types/project';

export const projects: Project[] = [
    {
        id: 'portfolio',
        title: "Portfolio Website",
        description: "My personal portfolio built with Next.js and TailwindCSS",
        technologies: ["Next.js", "TypeScript", "TailwindCSS"],
        githubLink: "https://github.com/oliveryun11/portfolio",
    }
];

export function getProject(id: string): Project | null {
    return projects.find(project => project.id === id) || null;
}

export function getAllProjects(): Project[] {
    return projects;
}