import { projects } from '@/data/projects';

export function getBlogPost(slug: string) {
    for (const project of projects) {
        const post = project.blogPosts?.find(post => post.slug === slug);
        if (post) {
            return {
                post,
                project
            };
        }
    }
    return null;
} 