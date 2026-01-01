import React from 'react';
import { clsx } from 'clsx';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * BentoCard Component
 *
 * Generic glassmorphism card with backdrop blur, transparency, and hover effects.
 * Used throughout the page for content sections.
 *
 * Props:
 * - children: Content to display inside the card
 * - className: Additional Tailwind classes to apply
 * - hover: Enable/disable hover effects (default: true)
 */
const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className,
  hover = true,
}) => {
  return (
    <div
      className={clsx(
        'glass-card',
        'my-6',
        !hover && 'hover:transform-none hover:border-opacity-20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default BentoCard;
