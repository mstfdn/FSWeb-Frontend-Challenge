import { useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("tr");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === "tr" ? "en" : "tr");

  return (
    <header
      className={`p-4 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <button onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <button onClick={toggleLanguage}>
            {language === "tr" ? "Switch to English" : "Türkçe'ye Geç"}
          </button>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="text-2xl font-bold">Mustafa'nın Portfolyosu</h1>
          <p>Yazılımcı | Frontend | React Uzmanı</p>
          <div className="flex space-x-2 mt-2">
            <a href="https://linkedin.com" target="_blank">
              <img src="linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com" target="_blank">
              <img src="github-icon.png" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-40 h-40 bg-red-500 shadow-lg">
          <img
            src="profile-picture.png"
            alt="Profil"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
