import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

import LanguageSwitcher from './components/LanguageSwitcher';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function App() {
  const { theme, toggleTheme } = useTheme(); // Tema durumu ve toggle fonksiyonu

  return (
    <div className={`font-sans ${theme === 'dark' ? 'dark' : ''}`}>
      <LanguageSwitcher />
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      
      {/* Tema değiştirme butonu */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-md"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  );
}
