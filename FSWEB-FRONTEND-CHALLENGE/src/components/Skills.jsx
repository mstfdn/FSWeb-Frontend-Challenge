import { useTheme } from "../context/ThemeContext"; // useTheme hook'u
import { useLanguage } from "../context/LanguageContext"; // useLanguage hook'u
import javascriptLogo from "../assets/js-logo.png";
import reactLogo from "../assets/react-logo.png";
import reduxLogo from "../assets/redux-logo.png";
import nodeLogo from "../assets/nodejs-logo.png";
import vscodeLogo from "../assets/vscode-logo.png";
import figmaLogo from "../assets/github-logo.png";

const skillsData = [
  { logo: javascriptLogo, name: "JAVASCRIPT" },
  { logo: reactLogo, name: "REACT" },
  { logo: reduxLogo, name: "REDUX" },
  { logo: nodeLogo, name: "NODE" },
  { logo: vscodeLogo, name: "VS CODE" },
  { logo: figmaLogo, name: "GITHUB" },
];

const Skills = () => {
  const { darkMode } = useTheme(); // Dark mode bilgisini al
  const { language } = useLanguage(); // Dil bilgisini al

  const title = language === 'en' ? 'Skills' : 'Yetenekler'; // Dil seçimine göre başlık

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      <div
        className={`grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 ${
          darkMode ? "text-inherit" : "bg-white text-stone-950	"
        }`}
        
      >
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center p-4 rounded-sm ${
              darkMode ? "bg-gray-600" : " text-stone-950"
            }`}
          >
            <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-2" />
            <p className="text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
