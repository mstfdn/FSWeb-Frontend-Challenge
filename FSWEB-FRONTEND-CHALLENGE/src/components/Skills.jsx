
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
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={skill.logo} alt={skill.name} className="w-16 h-16" />
            <p className="mt-2 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Skills;