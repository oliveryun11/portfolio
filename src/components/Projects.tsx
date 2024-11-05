import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Projects() {

    const allBlogPosts = projects
        .flatMap(project => project.blogPosts || [])
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="py-6 text-foreground" id="projects">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="grid gap-6">
                {allBlogPosts.map((post) => (
                    <article key={post.slug} className="border border-secondary rounded-lg p-6">
                        <Link href={`/blog/${post.slug}`}>
                            <h2 className="text-xl font-bold mb-2 hover:text-foreground/80">
                                {post.title}
                            </h2>
                        </Link>
                        <time className="text-sm text-foreground/60">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                        <p className="mt-2">{post.excerpt}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}