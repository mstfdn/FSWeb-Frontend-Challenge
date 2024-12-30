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
      <header className="w-full p-10">
        {/* Dark Mode ve Dil Değiştirme Metni */}
        <div className="p-10 flex justify-end items-center mb-4 flex-wrap">
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

            {/* Dil Değiştirme Metni */}
            <span
              onClick={toggleLanguage}
              className={`text-lg cursor-pointer ${darkMode ? "text-white" : "text-black"}`}
            >
              {language === "en" ? (
                <>
                  <span className="text-pink-500">TÜRKÇE</span>
                  <span>'YE GEÇ</span>
                </>
              ) : (
                <>
                  <span>SWITCH TO </span>
                  <span className="text-pink-500">ENGLISH</span>
                </>
              )}
            </span>
          </div>
        </div>

        <div className="p-10 flex flex-col md:flex-row justify-between items-center">
          {/* Sol Kısım: Yazılar */}
          <div className="flex flex-col space-y-4 md:w-1/2">
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
          <div className="w-64 h-64 bg-red-500 shadow-lg rounded-full overflow-hidden md:w-80 md:h-80">
            <img
              src={profilePic}
              alt={language === "tr" ? "Profil Fotoğrafı" : "Profile Picture"}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Sosyal Medya İkonları */}
        <div className="p-10 flex justify-start space-x-6 mt-8 flex-wrap">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              className={`w-10 h-10 rounded-lg ${darkMode ? "filter brightness-0 invert" : ""}`}
            />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img
              src={githubLogo}
              alt="GitHub"
              className={`w-10 h-10 rounded-lg ${darkMode ? "filter brightness-0 invert" : ""}`}
            />
          </a>
        </div>

        {/* Freelancing Bilgisi */}
        <div className="mt-8 text-start p-10 text-lg">
          <p>
            {language === "tr" 
              ? (
                <>
                  Şu anda{" "}
                  <span className="text-pink-500">Freelancing</span>{" "}
                  UX, UI, Web Tasarım Projesi için çalışıyorum.
                </>
              )
              : (
                <>
                  Currently{" "}
                  <span className="text-pink-500">Freelancing</span>{" "}
                  for <span className="text-pink-500">UX</span>, <span className="text-pink-500">UI</span>, <span className="text-pink-500">Web Design</span> Project.
                </>
              )}
          </p>
          <p>
            {language === "tr"
              ? (
                <>
                  Beni ekibinize davet edin →{" "}
                  <a href="mailto:mstf.fdn@outlook.com" className="text-pink-500">
                    mstf.fdn@outlook.com
                  </a>
                </>
              )
              : (
                <>
                  Invite me to join your team →{" "}
                  <a href="mailto:mstf.fdn@outlook.com" className="text-pink-500">
                    mstf.fdn@outlook.com
                  </a>
                </>
              )}
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
