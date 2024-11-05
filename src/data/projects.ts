export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    demoLink?: string;
    blogPosts?: {
        title: string;
        date: string;
        slug: string;
        excerpt: string;
    }[];
}

export const projects: Project[] = [
    {
        title: "Portfolio Website",
        description: "My personal portfolio built with Next.js and TailwindCSS",
        technologies: ["Next.js", "TypeScript", "TailwindCSS"],
        githubLink: "https://github.com/yourusername/portfolio",
        blogPosts: [
            {
                title: "Building My Portfolio",
                date: "2024-03-15",
                slug: "building-portfolio",
                excerpt: "A detailed look at how I built my portfolio website using Next.js, TypeScript, and TailwindCSS, including the challenges faced and solutions implemented."
            }
        ]
    },
    // Add more projects here
]; 