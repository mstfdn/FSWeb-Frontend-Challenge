/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
