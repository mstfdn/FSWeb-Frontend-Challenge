import data from '../data';
import PropTypes from 'prop-types';



const ProjectCard = ({ title, description, tags, githubLink, appLink, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      {/* Proje Başlığı */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {/* Proje Açıklaması */}
      <p className="text-gray-700 mb-4">{description}</p>
      {/* Kullanılan Teknolojiler */}
      <div className="flex space-x-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-sm py-1 px-3 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      {/* GitHub Linki */}
      <div className="text-lg font-bold text-gray-800 mb-2">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      {/* Go to App Link */}
      <div className="flex items-center space-x-2 mb-4">
        <a href={appLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold">
          Go to app →
        </a>
        <span className="text-gray-500">→</span>
      </div>
      {/* Laptop ekranı içinde proje fotoğrafı */}
      <div className="w-full h-60 bg-gray-100 flex justify-center items-center rounded-lg overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubLink={project.links.github}
              appLink={project.links.app}
              image="path_to_project_image.jpg" // İmaj yolu burada kullanılacak.
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired, // 'tags' dizisi içinde string olmalı
  githubLink: PropTypes.string.isRequired,
  appLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};


export default Projects;
