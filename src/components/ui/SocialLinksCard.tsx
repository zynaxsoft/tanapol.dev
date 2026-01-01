import React from "react";
import { Github, Linkedin, Mail, Code } from "lucide-react";

/**
 * SocialLinksCard Component
 *
 * Displays social media and contact links in a grid layout.
 * Each link has an icon and label with hover effects.
 */
const SocialLinksCard: React.FC = () => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/zynaxsoft",
      icon: Github,
      label: "@zynaxsoft",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tanapol-prucksakorn",
      icon: Linkedin,
      label: "Tanapol Prucksakorn",
    },
    {
      name: "Email",
      url: "/contact",
      icon: Mail,
      label: "Get in touch",
    },
    {
      name: "Source Code",
      url: "https://github.com/zynaxsoft/tanapol.dev",
      icon: Code,
      label: "View source",
    },
  ];

  return (
    <div className="space-y-3">
      {links.map((link) => {
        const Icon = link.icon;
        const isExternal = link.url.startsWith("http");

        return (
          <a
            key={link.name}
            href={link.url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="social-link-item flex items-center gap-4 p-3 rounded-lg border border-overlay/20 bg-surface/50 hover:bg-surface/60 hover:border-primary/50 group"
          >
            {/* Icon */}
            <div className="shrink-0 w-10 h-10 rounded-full bg-overlay/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Icon
                size={20}
                className="text-subtext group-hover:text-primary transition-colors"
              />
            </div>

            {/* Name and label */}
            <div className="flex-1 min-w-0">
              <div className="font-mono text-sm text-text group-hover:text-primary transition-colors">
                {link.name}
              </div>
              <div className="text-xs text-subtext truncate">{link.label}</div>
            </div>

            {/* Arrow indicator */}
            <div className="text-subtext group-hover:text-primary transition-colors">
              ↗
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinksCard;
