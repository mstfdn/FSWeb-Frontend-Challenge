/* eslint-disable react/prop-types */
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import data from "../data";
import PropTypes from "prop-types";
import projectPhoto from "../assets/pizza.png";
import projectPhoto2 from "../assets/proje2.png";
import laptopImage from "../assets/laptop.png";


const ProjectCard1 = ({ title, description, tags, githubLink, appLink }) => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <div
      className={`p-6 rounded-lg shadow-md flex flex-col items-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {/* Proje Başlığı */}
      <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-black"}`}>
        {title}
      </h3>
      {/* Proje Açıklaması */}
      <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{description}</p>
      {/* Kullanılan Teknolojiler */}
      <div className="flex space-x-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`text-sm py-1 px-3 rounded-full ${
              darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-400 text-black"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      {/* GitHub Linki */}
      <div className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-black"}`}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          {language === "tr" ? "GitHub'da Gör" : "View on GitHub"}
        </a>
      </div>
      {/* Go to App Link */}
      <div className="flex items-center space-x-2 mb-4">
        <a
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-bold ${darkMode ? "text-blue-300" : "text-blue-500"}`}
        >
          {language === "tr" ? "Uygulamaya Git →" : "Go to app →"}
        </a>
      </div>
      {/* Laptop ekranı içinde proje fotoğrafı */}
      <div className="w-full h-80 bg-gray-200 flex justify-center items-center rounded-lg overflow-hidden relative">
          {/* Laptop ekranı */}
          <div className="w-[90%] h-[80%] bg-gray-200 rounded-md relative flex justify-center items-center">
            {/* İçerik grubu */}
            <div className="relative w-full h-full flex items-center justify-center">
                    {/* Laptop Image */}
              <img
                src={laptopImage}
                alt="Laptop Image"
                className="absolute w-full h-full object-contain"
              />
              {/* Project Photo */}
              <img
                src={projectPhoto}
                alt={title}
                className="relative z-10 w-[52%] h-auto object-contain transform -translate-y-1/4 mt-8 mr-0.5"
              />
            </div>
         </div>
        </div>






    </div>
  );
};

const ProjectCard2 = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <div
      className={`p-6 rounded-lg shadow-md flex flex-col items-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-black"}`}>
      Serenity Cafe
      </h3>
      <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="flex space-x-2 mb-4">
        <span
          className={`text-sm py-1 px-3 rounded-full ${
            darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-400 text-black"
          }`}
        >
          React
        </span>
        <span
          className={`text-sm py-1 px-3 rounded-full ${
            darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-400 text-black"
          }`}
        >
          Router
        </span>
      </div>
      <div className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-black"}`}>
        <a href="https://github.com/project3" target="_blank" rel="noopener noreferrer">
          {language === "tr" ? "GitHub'da Gör" : "View on GitHub"}
        </a>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <a
          href="https://app-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-bold ${darkMode ? "text-blue-300" : "text-blue-500"}`}
        >
          {language === "tr" ? "Uygulamaya Git →" : "Go to app →"}
        </a>
      </div>
      <div className="w-full h-80 bg-gray-100 flex justify-center items-center rounded-lg overflow-hidden relative">
          {/* Laptop ekranı */}
          <div className="w-[90%] h-[80%] bg-gray-200 rounded-md relative flex justify-center items-center">
            {/* İçerik grubu */}
            <div className="relative w-full h-full flex items-center justify-center">
                    {/* Laptop Image */}
              <img
                src={laptopImage}
                alt="Laptop Image"
                className="absolute w-full h-full object-contain"
              />
              {/* Project Photo */}
              <img
                src={projectPhoto2}
                className="relative z-10 w-[52%] h-auto object-contain transform -translate-y-1/4 mt-8 mr-0.5"
              />
            </div>
         </div>
        </div>
    </div>
  );
};

const Projects = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <section
      id="projects"
      className={`py-12 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-8 ${darkMode ? "text-white" : "text-black"}`}>
          {language === "tr" ? "Projeler" : "Projects"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <ProjectCard1
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubLink={project.links.github}
              appLink={project.links.app}
              image={project.image || projectPhoto} // Varsayılan proje fotoğrafı ekleniyor
            />
          ))}
          <ProjectCard2 />
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
  appLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Projects;
