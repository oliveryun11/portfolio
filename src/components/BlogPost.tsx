import { BlogPost as BlogPostType } from '@/types/blog';
import { Project } from '@/types/project';

interface Props {
  post: BlogPostType;
  project: Project;
}

export default function BlogPost({ post }: Props) {
  return (
    <article className="py-6">
      <header className="space-y-4 mb-8">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <div className="flex gap-4 text-sm text-foreground/60">
          <time>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </header>

      <div
        className="
          space-y-4
          [&>p]:text-foreground-secondary
          [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-6
          [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-4
          [&>h4]:text-lg [&>h4]:font-bold [&>h4]:mb-3
          [&>ul]:my-2 [&>ul]:pl-4 [&>ul]:text-foreground-secondary
          [&>li]:my-0 [&>li]:marker:text-foreground-secondary
          [&>a]:text-foreground [&>a]:no-underline [&>a]:font-medium [&>a]:transition-colors [&>a]:duration-200 [&>a:hover]:text-foreground-secondary
          [&>pre]:bg-[#1e1e1e] [&>pre]:p-4 [&>pre]:rounded-lg
          [&>code]:text-sm [&>code]:font-mono
        "
      >
        {post.content}
      </div>
    </article>
  );
}
