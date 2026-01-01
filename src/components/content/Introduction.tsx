import React, { useState } from 'react';
import Typewriter from '../terminal/Typewriter';

interface IntroductionProps {
  onComplete?: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const bioText = "Hi! I am Tanapol Prucksakorn, a full-stack engineer, a Ph.D., and an enthusiastic software developer that loves and enjoys building software with new technologies.";

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start">
      {/* Profile Image - Glitch effect on hover */}
      <div className="relative group shrink-0">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt rounded-lg"></div>
        <img 
          src="/me.png" 
          alt="Tanapol Prucksakorn" 
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover filter grayscale hover:grayscale-0 transition-all duration-500 border-2 border-surface"
        />
      </div>

      <div className="flex-1 space-y-4">
        <div className="text-lg text-text">
          <Typewriter 
            text={bioText} 
            speed={20} 
            onComplete={() => setStep(1)} 
            cursor={step === 0}
          />
        </div>

        {step >= 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-4">
            <p className="text-subtext">
              After I received my <span className="text-primary">Ph.D. in Robotics</span> from JAIST, 
              I joined <span className="text-secondary">QBIT Robotics</span> to develop and design the Omotenashi System. 
              Currently, I am creating new things at <span className="text-accent">Dynamic Map Platform</span>.
            </p>

            <div className="border-l-2 border-surface pl-4 mt-4">
              <h3 className="text-mauve font-bold mb-2">Capabilities:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-subtext marker:text-primary">
                <li>Software development in <span className="text-text">Python, Rust, TypeScript</span></li>
                <li>AWS services, Terraform, Docker, NGINX</li>
                <li>Machine Learning: Deep learning, Reinforcement learning</li>
                <li>Robotics & Neuroscience</li>
              </ul>
            </div>
            
            {/* Call onComplete after a delay or immediately */}
            <WaitFor onComplete={onComplete} delay={1000} />
          </div>
        )}
      </div>
    </div>
  );
};

// Helper to fire completion after delay
const WaitFor = ({ delay, onComplete }: { delay: number, onComplete?: () => void }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, onComplete]);
  return null;
};

export default Introduction;
