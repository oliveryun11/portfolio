import fs from 'fs';
import path from 'path';
import { BlogPost, BlogFrontmatter } from '@/types/blog';
import { projects } from '@/lib/project';
import matter from 'gray-matter'; // We'll need to install this

export function getBlogPost(slug: string): BlogPost | null {
    try {
        const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        
        const frontmatter = data as BlogFrontmatter;
        
        return {
            slug,
            content,
            ...frontmatter
        };
    } catch {
        return null;
    }
}

export function getAllBlogPosts(): BlogPost[] {
    const blogDir = path.join(process.cwd(), 'src/content/blog');
    const files = fs.readdirSync(blogDir);
    
    const posts = files
        .filter(filename => filename.endsWith('.mdx'))
        .map(filename => {
            const slug = filename.replace('.mdx', '');
            const post = getBlogPost(slug);
            return post;
        })
        .filter((post): post is BlogPost => post !== null)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return posts;
}

export function getBlogPostWithProject(slug: string) {
    const post = getBlogPost(slug);
    if (!post) return null;

    const project = projects.find(p => p.id === post.projectId);
    if (!project) return null;

    return { post, project };
}

export function getProjectRelatedPosts(projectId: string): BlogPost[] {
    return getAllBlogPosts().filter(post => post.projectId === projectId);
}