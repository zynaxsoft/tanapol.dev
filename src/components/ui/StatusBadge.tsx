import React from 'react';

/**
 * StatusBadge Component
 *
 * Displays an "ONLINE" status indicator with a pulsing green dot.
 * Uses existing Tailwind pulse animation.
 */
const StatusBadge: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/30 border border-overlay/20 backdrop-blur-sm">
      {/* Pulsing green dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>

      {/* Status text */}
      <span className="text-xs font-mono uppercase tracking-wider text-subtext">
        Online
      </span>
    </div>
  );
};

export default StatusBadge;
