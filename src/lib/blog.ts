import { BlogPost } from '@/types/blog';
import { projects } from '@/lib/project';

import featViz from '@/content/blog/feat-viz';
import kbQa from '@/content/blog/kb-qa';

const blogPosts: BlogPost[] = [featViz, kbQa];

export function getBlogPost(slug: string): BlogPost | null {
  return blogPosts.find(post => post.slug === slug) || null;
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
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
