import Image from 'next/image';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="w-full h-48 object-cover"
                src={project.image}
                alt={`${project.title} Image`}
                width={500}
                height={300}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-700">{project.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900">Tech Stack:</h4>
                  <ul className="flex flex-wrap mt-2 space-x-2">
                    {project.techStack.map((tech, index) => (
                      <li key={index} className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
