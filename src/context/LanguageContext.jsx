import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "tr" ? "en" : "tr"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 'useLanguage' custom hook'u ekliyoruz
const useLanguage = () => useContext(LanguageContext);

export { LanguageContext, LanguageProvider, useLanguage };
