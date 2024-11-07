export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    demoLink?: string;
}

export const projects: Project[] = [
    {
        title: "Portfolio Website",
        description: "A detailed look at how I built my portfolio website using Next.js, TypeScript, and TailwindCSS, including the challenges faced and solutions implemented.",
        technologies: ["Next.js", "TypeScript", "TailwindCSS"],
        githubLink: "https://github.com/oliveryun11/portfolio",
    },
]; 