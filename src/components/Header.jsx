import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import profilePic from "../assets/profile.jpg";
import linkedinLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.png";
import CustomSwitch from './CustomSwitch';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isChecked, setIsChecked] = useState(darkMode);

  const handleSwitchChange = () => {
    toggleDarkMode();
    setIsChecked(!isChecked);
  };

  return (
    <div className={`h-auto flex justify-center items-center ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}>
      <header className="w-full p-4 md:p-10">
        
        {/* Dark Mode ve Dil Değiştirme Metni */}
        <div className="flex justify-end items-center mb-4 space-x-4 mr-20">
          {/* Dark Mode Switch Sağda */}
          <div className="flex items-center space-x-2">
            <CustomSwitch
              isChecked={isChecked}
              handleSwitchChange={handleSwitchChange}
            />
            <span>
              {darkMode
                ? language === "tr"
                  ? "Aydınlık Mod"
                  : "Light Mode"
                : language === "tr"
                ? "Karanlık Mod"
                : "Dark Mode"}
            </span>
          </div>

          {/* Dil Değiştirme Metni */}
          <span
            onClick={toggleLanguage}
            className={`text-lg cursor-pointer ${darkMode ? "text-white" : "text-black"} md:text-base`}
          >
            {language === "en" ? (
              <>
                <span className="text-pink-500">Türkçe</span>
                <span>'ye Geç</span>
              </>
            ) : (
              <>
                <span>Switch to </span>
                <span className="text-pink-500">English</span>
              </>
            )}
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Sol Kısım: Yazılar */}
          <div className="flex flex-col space-y-4 md:w-1/2">
            <h1 className="text-4xl font-normal ml-10 m-4 ">
              {language === "tr" ? "Merhaba! 👋" : "Hi! 👋"}
            </h1>
            <p className="text-4xl ml-10 font-semibold m-10">
              {language === "tr" ? "Ben Mustafa. Full-stack geliştiriciyim. Sağlam ve ölçeklenebilir frontend ürünler geliştirebilirim. Hadi tanışalım!" : "I'm Mustafa. I'm a full-stack developer. I can craft solid and scalable frontend products. Let's meet!"}
            </p>
          </div>

          {/* Ortada: Profil Fotoğrafı */}
          <div className="responsive-profile-pic bg-pink-500 shadow-lg rounded-xl overflow-hidden md:w-80 md:h-80 mr-16 mt-16">
            <div className="responsive-profile-pic bg-pink-500 shadow-lg rounded-xl overflow-hidden md:w-80 md:h-80 mr-16 mt-16 translate-x-[-1.5rem] translate-y-[-4.8rem] absolute">
            <img
              src={profilePic}
              alt={language === "tr" ? "Profil Fotoğrafı" : "Profile Picture"}
              className="object-cover w-full h-full"
            />
            </div>
          </div>
        </div>
        


        {/* Sosyal Medya İkonları */}
        <div className="flex justify-start space-x-6 mt-8 p-4 md:p-10 ml-2">
          <a
            href="https://www.linkedin.com/in/mustafa-fidan-b65b12339/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              className={`w-10 h-10 rounded-lg ${darkMode ? "filter brightness-0 invert" : ""}`}
            />
          </a>
          <a href="https://github.com/mstfdn" target="_blank" rel="noopener noreferrer">
            <img
              src={githubLogo}
              alt="GitHub"
              className={`w-10 h-10 rounded-lg ${darkMode ? "filter brightness-0 invert" : ""}`}
            />
          </a>
        </div>

        {/* Freelancing Bilgisi */}
        <div className="mt-8 text-start p-4 md:p-10 text-lg">
          <p>
            {language === "tr" 
              ? (
                <>
                  Şu anda{" "}
                  <span className="text-pink-500 ">Freelancing</span>{" "}
                  için <span className="text-pink-500">UX</span>, <span className="text-pink-500">UI</span>, <span className="text-pink-500">Web Tasarım</span> Projesi için çalışıyorum.
                </>
              )
              : (
                <>
                  Currently{" "}
                  <span className="text-pink-500 ">Freelancing</span>{" "}
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
        <div
  className={`w-[10rem] h-[3rem] ${darkMode ? "bg-pink-500" : "bg-pink-600"} rounded-l-3xl mx-auto`}
  style={{
    position: "relative", // Sabit konumda tutmak için fixed
    top: "10%", // Sayfanın üst kısmına göre mesafe
    left: "50%", // Sayfanın tam ortasında
    transform: "translateX(-25%) translateY(-500%)", // Tam ortada olması için
    marginTop: "-1%",
    zIndex: 10, // Diğer öğelerin üstünde görünmesini sağlamak için
  }}
/>
      </header>
    </div>
  );
};

export default Header;
