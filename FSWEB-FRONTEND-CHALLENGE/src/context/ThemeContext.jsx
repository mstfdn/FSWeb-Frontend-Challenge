import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types"; // PropTypes'ı import et

// Tema bağlamını oluşturuyoruz
const ThemeContext = createContext();

// Tema sağlayıcı bileşeni (Provider)
export const ThemeProvider = ({ children }) => {
  // Tema durumu (varsayılan olarak 'light' modu)
  const [theme, setTheme] = useState("light");

  // Temayı değiştiren fonksiyon
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Tema değiştiğinde HTML öğesinin sınıfını güncelle
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // Karanlık mod için 'dark' sınıfını ekle
    } else {
      document.documentElement.classList.remove("dark"); // Işık modunda 'dark' sınıfını çıkar
    }
  }, [theme]); // theme değiştiğinde tetiklenir

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 'children' prop'unu doğrulamak için PropTypes ekliyoruz
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // 'children' zorunlu ve bir React node olmalı
};

// ThemeContext'e erişim sağlayan hook
export const useTheme = () => useContext(ThemeContext);
