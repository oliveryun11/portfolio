import { Project } from '@/data/projects';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-secondary rounded-lg p-6 space-y-4 bg-primary">
      <div className="flex justify-start gap-4">
        <h3 className="text-xl font-bold">{project.title}</h3>
      </div>
      <p>{project.description}</p>
    </div>
  );
} 