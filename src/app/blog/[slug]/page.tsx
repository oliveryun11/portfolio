import { getBlogPostWithProject, getProjectRelatedPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';
import Link from 'next/link';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
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

const RelatedPosts = ({ currentSlug, projectId }: { currentSlug: string, projectId: string }) => {
    const relatedPosts = getProjectRelatedPosts(projectId)
        .filter(post => post.slug !== currentSlug);

    if (relatedPosts.length === 0) return null;

    return (
        <div className="mt-12 border-t border-secondary pt-8">
            <h2 className="text-xl font-bold mb-4">Related Posts</h2>
            <div className="space-y-4">
                {relatedPosts.map(post => (
                    <Link 
                        key={post.slug} 
                        href={`/blog/${post.slug}`}
                        className="block hover:text-foreground text-foreground-secondary"
                    >
                        {post.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const blogData = getBlogPostWithProject(slug);
    
    if (!blogData) {
        notFound();
    }
    
    const { post, project } = blogData;

    // Process the markdown content
    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrism)
        .use(rehypeStringify)
        .process(post.content);

    const htmlContent = processedContent.toString();

    return (
        <div className="min-h-screen flex justify-center text-foreground">
            <div className="flex flex-col justify-start w-full max-w-[600px] px-6 md:px-0">
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
                            prose-pre:bg-[#1e1e1e] prose-pre:p-4 prose-pre:rounded-lg
                            prose-code:text-sm prose-code:font-mono
                            prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-6
                            prose-p:text-foreground-secondary prose-p:my-0
                            prose-ul:my-2 prose-ul:pl-4 prose-ul:text-foreground-secondary
                            prose-li:my-0 prose-li:marker:text-foreground-secondary
                            prose-a:text-foreground prose-a:no-underline prose-a:font-medium"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                </article>

                {post.projectId && (
                    <RelatedPosts currentSlug={post.slug} projectId={post.projectId} />
                )}

                <Footer />
            </div>
        </div>
    );
}