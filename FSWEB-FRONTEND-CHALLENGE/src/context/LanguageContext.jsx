import { LANGUAGES } from '../locale/lang'; // Burada kullanıyoruz
import { createContext, useState, useContext } from 'react';


const LanguageContext = createContext();

// Provider bileşeni
// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr'); // Varsayılan dil Türkçe

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'tr' ? 'en' : 'tr'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Context'e erişim sağlamak için bir hook
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Bu fonksiyon, dil içeriğini almak için kullanılacak
// eslint-disable-next-line react-refresh/only-export-components
export const getLanguageContent = (key) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { language } = useLanguage(); // Burada hook kullanmak doğru değil
  return LANGUAGES[language][key]; // Dil metnini buradan alıyoruz
};
