import { createContext, ReactNode, useState, useEffect } from 'react';

type ThemeValue = "Bright" | "Dark";

type Theme = {
  theme: ThemeValue;
  setTheme: (theme: ThemeValue) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeValue>(() => {
    // Check localStorage or default to system preference
    const stored = localStorage.getItem('theme');
    if (stored === 'Bright' || stored === 'Dark') return stored;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "Dark";
    }
    return "Bright"; // Light mode fallback
  });

  const setTheme = (newTheme: ThemeValue) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === "Dark" ? "Bright" : "Dark");
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "Dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
