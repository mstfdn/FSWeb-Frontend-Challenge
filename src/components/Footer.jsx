import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <footer
      className={`p-10 text-center flex flex-col md:flex-row items-center justify-center gap-10 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Slogan */}
      <p
        className="text-5xl mb-4 p-10 md:mb-0 relative"
        style={{ lineHeight: "1.8" }}
      >
        {language === "tr" ? (
          <>
            Gelin, bir sonraki <br /> projeniz üzerinde birlikte çalışalım.
          </>
        ) : (
          <>
            Let’s work together on <br /> your next project.
          </>
        )}
      </p>

      {/* Linkler */}
      <div className="flex flex-col space-y-4 md:space-y-2 text-lg font-bold">
        <a
          href="https://github.com/mstfdn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={`text-black hover:underline ${darkMode ? "text-white" : "text-black"}`}
        >
          {language === "tr" ? "Kişisel Blog" : "Personal Blog"}
        </a>

        <a
          href="https://www.linkedin.com/in/mustafa-fidan-b65b12339/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="mailto:your-email@example.com"
          className="text-red-500 hover:underline"
        >
          {language === "tr" ? "E-posta" : "Email"}
        </a>
      </div>

      {/* Çubuk */}
      <div
        className="w-[20rem] h-[1rem] border-[0.6rem] border-blue-500 rounded-l-3xl rounded-r-3xl absolute translate-x-[-60%] translate-y-[-1rem] left-1/2 opacity-65"
        style={{
          maxWidth: "90%", // Küçük ekranlar için genişlik sınırlaması
        }}
      ></div>
    </footer>
  );
};

export default Footer;
