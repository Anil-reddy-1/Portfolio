import React, { createContext, useState, ReactNode } from 'react';

type ThemeValue = "Bright" | "Dark";

type Theme = {
  theme: ThemeValue;
  setTheme: (theme: ThemeValue) => void;
}

export const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeValue>("Dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

