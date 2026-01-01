/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // We'll handle this manually via classes
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Victor Mono"', 'monospace'],
        // Fallback or specific sci-fi font if needed
      },
      colors: {
        // Semantic colors mapping to CSS variables
        bg: 'rgb(var(--color-base) / <alpha-value>)',
        surface: 'rgb(var(--color-surface0) / <alpha-value>)',
        overlay: 'rgb(var(--color-overlay0) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        subtext: 'rgb(var(--color-subtext0) / <alpha-value>)',
        primary: 'rgb(var(--color-green) / <alpha-value>)', // Terminal green default
        secondary: 'rgb(var(--color-mauve) / <alpha-value>)',
        accent: 'rgb(var(--color-peach) / <alpha-value>)',
        red: 'rgb(var(--color-red) / <alpha-value>)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'typewriter': 'typing 3.5s steps(40, end)',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%': { opacity: '0.97' },
          '5%': { opacity: '0.9' },
          '10%': { opacity: '0.97' },
          '15%': { opacity: '1' },
          '20%': { opacity: '0.95' },
          '25%': { opacity: '0.9' },
          '30%': { opacity: '1' },
          '35%': { opacity: '0.98' },
          '40%': { opacity: '1' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
