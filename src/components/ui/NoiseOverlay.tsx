import React from 'react';

/**
 * NoiseOverlay Component
 *
 * Adds subtle noise texture and scanline effects to the entire page.
 * These are shader-like visual effects for added depth.
 *
 * To adjust effects, edit /src/styles/bento.css:
 * - .noise-overlay: Adjust opacity (0.02-0.1) and mix-blend-mode
 * - .scanlines: Adjust opacity (0.1-0.8) and background-size
 */
const NoiseOverlay: React.FC = () => {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* CRT scanlines effect */}
      <div className="scanlines" aria-hidden="true" />
    </>
  );
};

export default NoiseOverlay;
