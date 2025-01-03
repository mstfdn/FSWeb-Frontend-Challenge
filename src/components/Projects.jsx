import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import projectsData from '../dataJSON/projectsData.json';
import projectPhoto from "../assets/pizza.png";
import projectPhoto2 from "../assets/proje2.png";

function Projects() {
  const [projects, setProjects] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section className="py-16">
      <h4 className="text-4xl font-semibold text-center text-blue-700 dark:text-white mb-10">
        {language === "en" ? "Projects" : "Projeler"}
      </h4>
      <div className="flex flex-wrap justify-center gap-10">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project) => {
            const projectImage =
              project.id === 1 ? projectPhoto : projectPhoto2;

            return (
              <div
                key={project.id}
                className="bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg w-[350px] overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-64">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={projectImage}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
                <div className="p-6 bg-white dark:bg-gray-700 rounded-b-lg">
                  <h5 className="text-xl font-semibold text-blue-800 dark:text-white">
                    {language === "en" ? project["title-en"] : project["title-tr"]}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {language === "en"
                      ? project["description-en"]
                      : project["description-tr"]}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-600 text-white rounded-full px-3 py-1 text-xs hover:bg-blue-700 hover:cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between mt-6">
                    <a
                      className="text-blue-700 font-semibold hover:underline dark:text-white"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {language === "en" ? "GitHub" : "GitHub"} &rarr;
                    </a>
                    <a
                      className="text-blue-700 font-semibold hover:underline dark:text-white"
                      href={project.appLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {language === "en" ? "App" : "Uygulama"} &rarr;
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </section>
  );
}

export default Projects;
