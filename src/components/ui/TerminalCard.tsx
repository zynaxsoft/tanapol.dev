import React, { useState } from 'react';
import Typewriter from '../terminal/Typewriter';

interface TerminalCardProps {
  command: string;
  content: string;
  filename?: string;
}

/**
 * TerminalCard Component
 *
 * Displays content in a terminal-style window with typewriter animation.
 * Reuses the existing Typewriter component for text animation.
 *
 * Props:
 * - command: The command to display (e.g., "cat capabilities.json")
 * - content: The content to display (e.g., JSON string)
 * - filename: Optional filename for the terminal header (defaults to extracting from command)
 */
const TerminalCard: React.FC<TerminalCardProps> = ({ command, content, filename }) => {
  const [isTyping, setIsTyping] = useState(true);

  // Extract filename from command if not provided
  const displayFilename = filename || command.split(' ').pop() || 'terminal';

  return (
    <div className="terminal-card bg-bg/80 rounded-lg border border-overlay/20 overflow-hidden">
      {/* Terminal header with colored dots */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface/50 border-b border-overlay/20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red"></div>
          <div className="w-3 h-3 rounded-full bg-accent"></div>
          <div className="w-3 h-3 rounded-full bg-primary"></div>
        </div>
        <span className="text-xs font-mono text-subtext ml-2">{displayFilename}</span>
      </div>

      {/* Terminal content with prompt */}
      <div className="p-4 font-mono text-sm">
        <div className="flex gap-2 mb-2">
          <span className="text-secondary">➜</span>
          <span className="text-primary">~</span>
          <span className="text-text">{command}</span>
        </div>

        {/* Typewriter effect for content */}
        <div className="text-subtext whitespace-pre-wrap">
          <Typewriter
            text={content}
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
