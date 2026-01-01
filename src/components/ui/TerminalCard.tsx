import React, { useState } from 'react';
import Typewriter from '../terminal/Typewriter';

interface TerminalCardProps {
  skills: string[];
}

/**
 * TerminalCard Component
 *
 * Displays skills/capabilities in a terminal-style window with typewriter animation.
 * Reuses the existing Typewriter component for text animation.
 *
 * Props:
 * - skills: Array of capability strings to display
 */
const TerminalCard: React.FC<TerminalCardProps> = ({ skills }) => {
  const [isTyping, setIsTyping] = useState(true);

  // Format skills as JSON-like structure for terminal display
  const terminalContent = `{
  "capabilities": [
${skills.map((skill, i) => `    "${skill}"${i < skills.length - 1 ? ',' : ''}`).join('\n')}
  ]
}`;

  return (
    <div className="terminal-card bg-bg/80 rounded-lg border border-overlay/20 overflow-hidden">
      {/* Terminal header with colored dots */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface/50 border-b border-overlay/20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red"></div>
          <div className="w-3 h-3 rounded-full bg-accent"></div>
          <div className="w-3 h-3 rounded-full bg-primary"></div>
        </div>
        <span className="text-xs font-mono text-subtext ml-2">capabilities.json</span>
      </div>

      {/* Terminal content with prompt */}
      <div className="p-4 font-mono text-sm">
        <div className="flex gap-2 mb-2">
          <span className="text-secondary">➜</span>
          <span className="text-primary">~</span>
          <span className="text-text">cat capabilities.json</span>
        </div>

        {/* Typewriter effect for skills */}
        <div className="text-subtext whitespace-pre-wrap">
          <Typewriter
            text={terminalContent}
            speed={15}
            onComplete={() => setIsTyping(false)}
            cursor={isTyping}
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalCard;
