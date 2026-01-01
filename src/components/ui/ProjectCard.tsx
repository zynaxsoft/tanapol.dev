import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  desc: string;
  link: string;
  tech: string[];
}

/**
 * ProjectCard Component
 *
 * Displays a single project with title, description, tech stack, and link.
 * Features hover effects and external link icon.
 *
 * Props:
 * - title: Project name
 * - desc: Short project description
 * - link: URL to the project
 * - tech: Array of technologies used (e.g., ["Rust", "WASM"])
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc, link, tech }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card block group p-4 border border-overlay/20 rounded-lg bg-surface/20 hover:border-primary/50"
    >
      {/* Title and external link icon */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-primary group-hover:text-primary/80 transition-colors">
          {title}
        </h3>
        <ExternalLink
          size={16}
          className="text-subtext group-hover:text-primary transition-colors shrink-0 ml-2"
        />
      </div>

      {/* Description */}
      <p className="text-sm text-subtext mb-3">{desc}</p>

      {/* Tech stack badges */}
      <div className="flex gap-2 flex-wrap">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-overlay/20 text-secondary font-mono border border-overlay/30"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
