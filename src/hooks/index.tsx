import React, { useState, useContext, createContext, useCallback } from 'react';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProviderContext: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSavedLocal = localStorage.getItem('@my-theme-application');
    if (themeSavedLocal) {
      return JSON.parse(themeSavedLocal);
    } else {
      return dark;
    }
  });

  const toggleTheme = useCallback(() => {
    if (theme.title === 'dark') {
      console.log(theme.title);
      setTheme(light);
      localStorage.setItem('@my-theme-application', JSON.stringify(light));
    } else {
      console.log(theme.title);
      setTheme(dark);
      localStorage.setItem('@my-theme-application', JSON.stringify(dark));
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
export { useTheme, ThemeProviderContext };
