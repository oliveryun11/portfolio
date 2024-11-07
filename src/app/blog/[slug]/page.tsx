import { getBlogPostWithProject } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blogData = getBlogPostWithProject(params.slug);
    if (!blogData) {
        return {
            title: 'Post Not Found'
        };
    }
    return {
        title: `${blogData.post.title} | Oliver Yun`,
        description: blogData.post.excerpt
    };
}

export default function BlogPost({ params }: Props) {
    const blogData = getBlogPostWithProject(params.slug);
    
    if (!blogData) {
        notFound();
    }
    
    const { post, project } = blogData;

    return (
        <div className="min-h-screen flex justify-center text-foreground">
            <div className="flex flex-col justify-start w-[600px]">
                <Nav />
                
                <article className="py-6">
                    <header className="space-y-4 mb-8">
                        <h1 className="text-2xl font-bold">{post.title}</h1>
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
                        {/* We'll need to handle MDX content rendering here */}
                        <p>{post.content}</p>
                    </div>
                </article>

                <Footer />
            </div>
        </div>
    );
}