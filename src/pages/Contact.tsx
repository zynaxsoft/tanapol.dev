import React from "react";
import TerminalBlock from "../components/terminal/TerminalBlock";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import BentoCard from "../components/ui/BentoCard";

const Contact: React.FC = () => {
  const contacts = [
    {
      name: "GitHub",
      value: "@zynaxsoft",
      link: "https://github.com/zynaxsoft",
      icon: Github,
      color: "text-mauve",
    },
    {
      name: "Twitter",
      value: "@tanapoldev",
      link: "https://twitter.com/tanapoldev",
      icon: Twitter,
      color: "text-blue-400",
    },
    {
      name: "LinkedIn",
      value: "tanapol-pr",
      link: "https://linkedin.com/in/tanapol-pr",
      icon: Linkedin,
      color: "text-blue-600",
    },
    {
      name: "Email",
      value: "contact@tanapol.dev",
      link: "mailto:contact@tanapol.dev",
      icon: Mail,
      color: "text-green-400",
    },
  ];

  return (
    <BentoCard>
      <TerminalBlock
        command="curl https://api.tanapol.dev/contact"
        isVisible={true}
      >
        <div className="grid gap-4 max-w-2xl mt-4">
          <div className="text-subtext mb-2">{"{"}</div>

          {contacts.map((c, i) => (
            <div key={c.name} className="flex items-center gap-3 pl-4 group">
              <span className="text-secondary">"{c.name.toLowerCase()}"</span>:
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-text hover:text-primary transition-colors p-1 rounded hover:bg-surface/50"
              >
                <c.icon size={16} className={c.color} />
                <span className="font-mono">"{c.value}"</span>
              </a>
              {i < contacts.length - 1 && (
                <span className="text-subtext">,</span>
              )}
            </div>
          ))}

          <div className="text-subtext">{"}"}</div>
        </div>
      </TerminalBlock>
    </BentoCard>
  );
};

export default Contact;
