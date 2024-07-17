import Image from 'next/image';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-6 bg-white rounded-lg shadow-md">
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex space-x-2 mb-4">
                {project.techStack.slice(0, 5).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-200 text-gray-600 rounded">{tech}</span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <img
                  src="/assets/github-dark.png"
                  alt="GitHub Icon"
                  className="w-4 h-4 mr-1.5 inline align-sub"
                />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
