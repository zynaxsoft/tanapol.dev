import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';
import { clsx } from 'clsx';

interface TerminalBlockProps {
  command: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
  isVisible?: boolean; // Control if this block should start
  onCommandTyped?: () => void; // Trigger when command finishes
}

const TerminalBlock: React.FC<TerminalBlockProps> = ({ 
  command, 
  children, 
  delay = 0, 
  className,
  isVisible = true,
  onCommandTyped
}) => {
  const [showOutput, setShowOutput] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  const handleCommandComplete = () => {
    setShowOutput(true);
    if (onCommandTyped) onCommandTyped();
  };

  if (!isVisible && !startTyping) return null;

  return (
    <div className={clsx("mb-8", className)}>
      <div className="flex items-center text-lg mb-2 text-primary font-bold">
        <span className="mr-2 text-secondary">➜</span>
        <span className="mr-2 text-primary">~</span>
        <span className="mr-2 text-subtext">$</span>
        {startTyping ? (
          <Typewriter 
            text={command} 
            speed={50} 
            onComplete={handleCommandComplete} 
            cursor={!showOutput}
          />
        ) : (
          <span className="opacity-0">{command}</span>
        )}
      </div>
      
      {showOutput && (
        <div className="pl-4 md:pl-8 animate-in fade-in duration-500">
           {children}
        </div>
      )}
    </div>
  );
};

export default TerminalBlock;
