import { projects } from "@/lib/project";
import { HiArrowUpRight } from "react-icons/hi2";
export default function Projects() {

    return (
        <div className="py-6 text-foreground" id="projects">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="grid gap-6">
                {projects.map((project) => (
                        <article 
                            className="border border-secondary rounded-lg p-6 transition-all duration-200 
                                       hover:bg-secondary/20 hover:border-primary space-y-4"
                            key={project.title}
                        >
                            <div>
                                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                                <p className="text-foreground-secondary">{project.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 -ml-1">
                            {project.technologies.map((tech) => (
                                <span 
                                    key={tech}
                                    className="text-sm px-3 py-1 rounded-full bg-secondary/30 
                                             text-foreground-secondary border border-secondary/50"
                                >
                                    {tech}
                                </span>
                                ))}
                            </div>

                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-sm hover:text-foreground text-foreground-secondary"
                                >
                                    <HiArrowUpRight className="w-4 h-4"/>
                                    <span className="ml-1">View on GitHub</span>
                                </a>
                            )}
                        </article>
                ))}
            </div>
        </div>
    );
}
