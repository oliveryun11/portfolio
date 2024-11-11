import { getAllBlogPosts } from '@/lib/blog';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return (
        <div className="min-h-screen flex justify-center text-foreground">
            <div className="flex flex-col justify-start w-[600px]">
                <Nav />
                
                <div className="py-6">
                    <h2 className="text-2xl font-bold mb-6">Blog</h2>
                    <div className="grid gap-6">
                        {posts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug}>
                                <article 
                                    className="border border-secondary rounded-lg p-6 transition-all duration-200 
                                         hover:bg-secondary/20 hover:border-primary space-y-4"
                            >
                                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                                    <time className="text-foreground-secondary text-sm block mb-2">
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                    <p className="text-foreground-secondary">{post.excerpt}</p>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}