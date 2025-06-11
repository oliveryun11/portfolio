import { getBlogPostWithProject } from '@/lib/blog';
import { notFound } from 'next/navigation';
import BlogNav from '@/components/BlogNav';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

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

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const blogData = getBlogPostWithProject(slug);
    
    if (!blogData) {
        notFound();
    }
    
    const { post, project } = blogData;

    return (
        <div className="min-h-screen flex justify-center text-foreground">
            <div className="flex flex-col justify-start w-full max-w-[600px] px-6 md:px-0">
                <BlogNav />
                <BlogPost post={post} project={project} />
                <Footer />
            </div>
        </div>
    );
}