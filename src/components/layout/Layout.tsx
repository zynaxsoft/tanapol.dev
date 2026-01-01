import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { AnimatePresence, motion } from 'framer-motion';

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col crt transition-colors duration-500 overflow-hidden">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Optional Status Bar / Footer */}
      <footer className="border-t-2 border-surface py-4 text-center text-sm text-subtext z-10 bg-bg/90 backdrop-blur-sm">
        <p>
          <span className="text-primary">root@tanapol.dev</span>:
          <span className="text-secondary">~</span>$ echo "Built with React & Catppuccin"
        </p>
      </footer>
    </div>
  );
};

export default Layout;
