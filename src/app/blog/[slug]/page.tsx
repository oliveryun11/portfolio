import { getBlogPost } from '@/lib/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }: { params: { slug: string } }) {
    const blogData = getBlogPost(params.slug);
    
    if (!blogData) {
        notFound();
    }
    
    const { post, project } = blogData;

    return (
        <article className="space-y-8">
            <header className="space-y-4">
                <Link href="/blog" className="text-sm hover:underline">
                    ← Back to home
                </Link>
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <div className="flex gap-4 text-sm text-foreground/60">
                    <time>
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                    <span>Related to: {project.title}</span>
                </div>
            </header>
            
            <div className="prose prose-invert max-w-none">
                {/* This is where your blog content will go */}
                <p>{post.excerpt}</p>
                
                {/* You can add the full content here */}
            </div>
            
            <footer className="pt-8 border-t border-secondary">
                <h2 className="text-xl font-bold mb-4">Related Project</h2>
                <div className="border border-secondary rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                    {project.githubLink && (
                        <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            View on GitHub
                        </a>
                    )}
                </div>
            </footer>
        </article>
    );
} 