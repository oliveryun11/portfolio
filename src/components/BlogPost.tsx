import { BlogPost as BlogPostType } from '@/types/blog';
import { Project } from '@/types/project';
import Link from 'next/link';
import { RxDotFilled } from "react-icons/rx";

interface Props {
    post: BlogPostType;
    project: Project;
}

export default function BlogPost({ post, project }: Props) {
    return (
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
                </div>
            </header>
            
            <div className="prose prose-invert max-w-none space-y-4
                prose-pre:bg-[#1e1e1e] prose-pre:p-4 prose-pre:rounded-lg
                prose-code:text-sm prose-code:font-mono
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-6
                prose-p:text-foreground-secondary prose-p:my-0
                prose-ul:my-2 prose-ul:pl-4 prose-ul:text-foreground-secondary
                prose-li:my-0 prose-li:marker:text-foreground-secondary
                prose-a:text-foreground prose-a:no-underline prose-a:font-medium">
                {post.content}
            </div>
        </article>
    );
} 