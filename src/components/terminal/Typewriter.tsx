import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
  cursor?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 30, 
  onComplete, 
  className,
  cursor = true 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed); // Fixed speed for now, can add jitter

      return () => clearTimeout(timeout);
    } else {
      if (onComplete) onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <span className={clsx('font-mono', className)}>
      {displayedText}
      {cursor && (
        <span className="animate-blink bg-text text-bg ml-1 inline-block w-[0.5em] h-[1.3em] align-text-bottom"></span>
      )}
    </span>
  );
};

export default Typewriter;
