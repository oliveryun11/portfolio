import { projects } from '@/lib/project';
import { HiArrowUpRight } from 'react-icons/hi2';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';

export default function Projects() {
  return (
    <div className="py-6 text-foreground" id="projects">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6">
        {projects.map(project => (
          <article
            className="border border-secondary rounded-lg p-6 space-y-4"
            key={project.title}
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-foreground-secondary">{project.description}</p>
            </div>

            {project.blogPosts && project.blogPosts.length > 0 && (
              <div className="space-y-2">
                <h2 className="text-lg text-foreground font-bold">
                  Related Posts
                </h2>
                <ul className="space-y-2">
                  {project.blogPosts.map(blogPost => {
                    const post = getAllBlogPosts().find(
                      post => post.slug === blogPost
                    );
                    return (
                      post && (
                        <li key={blogPost}>
                          <Link
                            href={`/blog/${blogPost}`}
                            className="text-foreground-secondary hover:text-foreground flex items-center transition-colors duration-200 hover:bg-secondary/10 rounded px-2 py-1 -mx-2 group font-medium"
                          >
                            <span>{post.title}</span>
                            <HiArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </Link>
                        </li>
                      )
                    );
                  })}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2 -ml-1">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1 rounded-full bg-secondary/30 
                                                 text-foreground-secondary border border-secondary/50"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm hover:text-foreground text-foreground-secondary font-medium transition-colors duration-200"
                >
                  <HiArrowUpRight className="w-4 h-4" />
                  <span className="ml-1">View on GitHub</span>
                </a>
              )}
              {project.paperLink && (
                <a
                  href={project.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm hover:text-foreground text-foreground-secondary font-medium transition-colors duration-200"
                >
                  <HiArrowUpRight className="w-4 h-4" />
                  <span className="ml-1">View Paper</span>
                </a>
              )}
              {project.websiteLink && (
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm hover:text-foreground text-foreground-secondary font-medium transition-colors duration-200"
                >
                  <HiArrowUpRight className="w-4 h-4" />
                  <span className="ml-1">View Website</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
