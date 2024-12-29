import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import data from '../data';
import PropTypes from 'prop-types';
import projectPhoto from "../assets/pizza.png";
import projectPhoto2 from "../assets/proje2.png";


const ProjectCard1 = ({ title, description, tags, githubLink, appLink, image }) => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md flex flex-col items-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Proje Başlığı */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {/* Proje Açıklaması */}
      <p className="text-gray-700 mb-4">{description}</p>
      {/* Kullanılan Teknolojiler */}
      <div className="flex space-x-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-400 text-sm py-1 px-3 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      {/* GitHub Linki */}
      <div className="text-lg font-bold text-gray-800 mb-2">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          {language === "tr" ? "GitHub'da Gör" : "View on GitHub"}
        </a>
      </div>
      {/* Go to App Link */}
      <div className="flex items-center space-x-2 mb-4">
        <a href={appLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold">
          {language === "tr" ? "Uygulamaya Git →" : "Go to app →"}
        </a>
      </div>
      {/* Laptop ekranı içinde proje fotoğrafı */}
      <div className="w-full h-60 bg-gray-100 flex justify-center items-center rounded-lg overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

const ProjectCard2 = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md flex flex-col items-center ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">Project 3 Title</h3>
      <p className="text-gray-700 mb-4">Serenity Cafe</p>
      <div className="flex space-x-2 mb-4">
        <span className="bg-gray-400 text-sm py-1 px-3 rounded-full">React</span>
        <span className="bg-gray-400 text-sm py-1 px-3 rounded-full">Router</span>
      </div>
      <div className="text-lg font-bold text-gray-800 mb-2">
        <a href="https://github.com/project3" target="_blank" rel="noopener noreferrer">
          {language === "tr" ? "GitHub'da Gör" : "View on GitHub"}
        </a>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <a href="https://app-link.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold">
          {language === "tr" ? "Uygulamaya Git →" : "Go to app →"}
        </a>
      </div>
      <div className="w-full h-60 bg-gray-100 flex justify-center items-center rounded-lg overflow-hidden">
        <img src={projectPhoto2} alt="Project 3" className="object-cover w-full h-full" />
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
      className={`py-12 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
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
