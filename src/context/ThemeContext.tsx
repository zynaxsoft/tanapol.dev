import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'latte' | 'frappe' | 'macchiato' | 'mocha';

interface ThemeContextType {
  theme: Theme;
  toggleMode: () => void;
  cycleFlavor: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('macchiato');

  useEffect(() => {
    // Remove all theme classes
    document.body.classList.remove('theme-latte', 'theme-frappe', 'theme-macchiato', 'theme-mocha');
    // Add current theme class
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const toggleMode = () => {
    // If it's latte (light), switch to macchiato (default dark)
    // If it's any dark, switch to latte
    if (theme === 'latte') {
      setTheme('macchiato');
    } else {
      setTheme('latte');
    }
  };

  const cycleFlavor = () => {
    const order: Theme[] = ['latte', 'frappe', 'macchiato', 'mocha'];
    const currentIndex = order.indexOf(theme);
    const nextIndex = (currentIndex + 1) % order.length;
    setTheme(order[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleMode, cycleFlavor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
