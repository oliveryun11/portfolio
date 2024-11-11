import { getBlogPostWithProject } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { marked } from 'marked';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await Promise.resolve(params);
    const blogData = getBlogPostWithProject(slug);
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

export default async function BlogPost({ params }: Props) {
    const { slug } = await Promise.resolve(params);
    const blogData = getBlogPostWithProject(slug);
    
    if (!blogData) {
        notFound();
    }
    
    const { post, project } = blogData;
    const htmlContent = marked(post.content);

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
                    
                    <div 
                        className="prose prose-invert max-w-none space-y-4
                            prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-6
                            prose-p:text-foreground-secondary prose-p:my-0
                            prose-ul:my-2 prose-ul:pl-4 prose-ul:text-foreground-secondary
                            prose-li:my-0 prose-li:marker:text-foreground-secondary
                            prose-a:text-foreground-secondary prose-a:hover:text-foreground"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                </article>

                <Footer />
            </div>
        </div>
    );
}