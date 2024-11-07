export interface BlogFrontmatter {
    title: string;
    date: string;
    excerpt: string;
    projectId: string;
}

export interface BlogPost extends BlogFrontmatter {
    slug: string;
    content: string;
}