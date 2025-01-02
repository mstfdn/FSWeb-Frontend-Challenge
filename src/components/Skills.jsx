import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import javascriptLogo from "../assets/js-logo.jpg"
import reactLogo from "../assets/react-logo.png";
import reduxLogo from "../assets/redux-logo.png";
import nodeLogo from "../assets/nodejs-logo.jpg"
import vscodeLogo from "../assets/vscode-logo.png";
import figmaLogo from "../assets/github-logo.png";

const skillsData = [
  { logo: javascriptLogo, name: "JavaScript" },
  { logo: reactLogo, name: "React" },
  { logo: reduxLogo, name: "Redux" },
  { logo: nodeLogo, name: "Node.js" },
  { logo: vscodeLogo, name: "VS Code" },
  { logo: figmaLogo, name: "GitHub" },
];

const Skills = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  const title = language === "en" ? "Skills" : "Yetenekler";

  return (
    <section
      className={`p-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black "
      }`}
    >
      
      <h2
        className={`text-3xl font-bold text-center mb-8 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 rounded-lg shadow ${
              darkMode
                ? "bg-gray-700 text-white"
                : "bg-white text-black"
            }`}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16 mb-4 object-contain"
            />
            <p className="text-center font-medium">{skill.name}</p>
          </div>
          
        ))}
        <div className="z-20 w-[9rem] h-[9rem] sm:w-[10rem] sm:h-[10rem] md:w-[12rem] md:h-[12rem] lg:w-[10rem] lg:h-[10rem] border-[1.5rem] rounded-full border-gray-300 dark:border-zinc-600 absolute top-[60%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 sm:hidden md:hidden lg:block"></div>
        <div className="w-[10rem] h-[1rem] border-[1.5rem]  border-gray-600 rounded-r-3xl translate-x-[-33rem] translate-y-[4rem]"></div>
        
      </div>
      
    </section>
  );
};

export default Skills;
