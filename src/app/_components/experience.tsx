import React from 'react';
import { experiences } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Experience</h2>
        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
              <h4 className="text-xl text-primary-500">{exp.company}</h4>
              <p className="text-gray-600">{exp.duration}</p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
