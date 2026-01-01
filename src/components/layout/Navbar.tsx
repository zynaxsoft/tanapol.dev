import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette, Terminal, Mail, FileText } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { clsx } from 'clsx';

const Navbar: React.FC = () => {
  const { theme, cycleFlavor } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: '~/home', icon: Terminal },
    { path: '/contact', label: '~/contact', icon: Mail },
    { path: '/cv', label: '~/cv', icon: FileText },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b-2 border-surface bg-bg/90 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 font-bold text-xl tracking-tighter text-primary">
            <span className="text-secondary">&gt;</span> tanapol.dev
            <span className="animate-blink">_</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={clsx(
                      'group flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                      isActive 
                        ? 'bg-surface text-primary shadow-[0_0_10px_rgba(var(--color-green),0.3)]' 
                        : 'text-subtext hover:text-text hover:bg-surface/50'
                    )}
                  >
                    <Icon size={16} className="mr-2 group-hover:scale-110 transition-transform" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            
            {/* Flavor Cycle */}
            <button
              onClick={cycleFlavor}
              className="p-2 rounded-lg bg-surface hover:bg-overlay text-secondary transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              title={`Current Theme: ${theme}`}
            >
              <Palette size={20} />
              <span className="text-xs uppercase font-bold hidden sm:inline-block">
                {theme}
              </span>
            </button>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
