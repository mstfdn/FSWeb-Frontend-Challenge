import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <footer
      className={`p-4 text-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <p className="mb-4">
        {language === "tr"
          ? "Gelin, bir sonraki projeniz üzerinde birlikte çalışalım."
          : "Let’s work together on your next project."}
      </p>
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-6 mt-4 space-y-2 md:space-y-0">
        <a
          href="https://github.com/mstfdn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          GitHub
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          {language === "tr" ? "Kişisel Blog" : "Personal Blog"}
        </a>
        <a
          href="https://www.linkedin.com/in/mustafa-fidan-b65b12339/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          LinkedIn
        </a>
        <a
          href="mailto:your-email@example.com"
          className="text-blue-500"
        >
          {language === "tr" ? "E-posta" : "Email"}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
