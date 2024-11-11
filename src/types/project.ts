export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    websiteLink?: string;
    paperLink?: string;
    blogPost?: string;
}