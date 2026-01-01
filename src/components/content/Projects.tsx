import React, { useState } from 'react';
import Typewriter from '../terminal/Typewriter';
import { ExternalLink } from 'lucide-react';

interface ProjectsProps {
  onComplete?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onComplete }) => {
  const [showList, setShowList] = useState(false);

  const projects = [
    {
      title: "Game of Life (WASM)",
      desc: "Conway's Game of Life implemented in Rust & WebAssembly.",
      link: "https://static.tanapol.dev/game-of-life",
      tech: ["Rust", "WASM", "JS"]
    },
    {
      title: "Snake Game (WASM)",
      desc: "Classic Snake game running in the browser via WASM.",
      link: "https://static.tanapol.dev/snake",
      tech: ["Rust", "WASM"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-text">
        <Typewriter 
          text="Here are some small Rust projects that might interest you:" 
          speed={30} 
          onComplete={() => {
            setShowList(true);
            if(onComplete) setTimeout(onComplete, 500);
          }}
          cursor={!showList}
        />
      </div>

      {showList && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {projects.map((p, i) => (
            <a 
              key={i} 
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group p-4 border border-surface rounded-lg bg-bg hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(var(--color-green),0.2)]"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-primary group-hover:text-glow">{p.title}</h3>
                <ExternalLink size={16} className="text-subtext group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-subtext mb-3">{p.desc}</p>
              <div className="flex gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-surface text-secondary font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
