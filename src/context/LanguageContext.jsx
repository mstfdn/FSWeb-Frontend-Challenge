/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
 // useLocalStorage hook'unu içe aktar

// Language Context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Dil bilgisini yerel depolamada saklamak için useLocalStorage hook'unu kullan
  const [language, setLanguage] = useLocalStorage('language', 'tr'); 

  const toggleLanguage = () => setLanguage(language === 'tr' ? 'en' : 'tr');

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
