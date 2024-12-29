import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import profilePic from "../assets/profile.jpg";
import linkedinLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.png";
import Switch from '@mui/material/Switch';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const handleSwitchChange = () => {
    toggleDarkMode(); // Dark Mode / Light Mode değişimi
  };

  return (
    <div
      className={`h-auto flex justify-center items-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <header className="w-full p-4">
        {/* Dark Mode ve Dil Değiştirme Butonları */}
        <div className="flex justify-end items-center mb-4">
          <div className="flex items-center space-x-4">
            {/* Dark Mode Switch */}
            <div className="flex items-center space-x-2">
              <Switch
                checked={darkMode}
                onChange={handleSwitchChange}
                color="default"
                inputProps={{ 'aria-label': 'Dark Mode Switch' }}
              />
              <span>
                {darkMode
                  ? language === "tr"
                    ? "Karanlık Mod"
                    : "Dark Mode"
                  : language === "tr"
                  ? "Aydınlık Mod"
                  : "Light Mode"}
              </span>
            </div>

            {/* Dil Değiştirme Butonu */}
            <button
              onClick={toggleLanguage}
              className="text-lg"
            >
              {language === "tr" ? "Switch to English" : "Türkçeye Geç"}
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          {/* Sol Kısım: Yazılar */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-xl font-bold">
              {language === "tr" ? "Merhaba! 👋" : "Hi! 👋"}
            </h1>
            <p className="text-lg">
              {language === "tr" ? "Yazılımcı | Frontend | React Uzmanı" : "Developer | Frontend | React Specialist"}
            </p>
            <p className="text-lg">
              {language === "tr" ? "Ben Mustafa. Full-stack geliştiriciyim. Sağlam ve ölçeklenebilir frontend ürünler geliştirebilirim. Hadi Tanışalım!" : "I'm Mustafa. I'm a full-stack developer. I can craft solid and scalable frontend products. Let's meet!"}
            </p>
          </div>

          {/* Ortada: Profil Fotoğrafı */}
          <div className="w-32 h-32 bg-red-500 shadow-lg rounded-full overflow-hidden">
            <img
              src={profilePic}
              alt={language === "tr" ? "Profil Fotoğrafı" : "Profile Picture"}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Sosyal Medya İkonları */}
        <div className="flex justify-center items-center space-x-6 mt-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              className="w-10 h-10"
            />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img
              src={githubLogo}
              alt="GitHub"
              className="w-10 h-10"
            />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
