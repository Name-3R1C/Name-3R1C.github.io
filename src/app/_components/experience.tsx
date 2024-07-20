import React from 'react';
import experiences from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="my-12 px-4 pt-20 -mt-20">
      <h1 className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_1rem)] font-black tracking-[-0.2rem] transition-all duration-300 text-center pb-4">
        Experience
      </h1>
      <div className="relative">
        {/* Vertical Line for Timeline */}
        <div className="absolute left-1/2 top-0 w-px h-full bg-gray-300 transform -translate-x-1/2"></div>

        <ul className="relative">
          {experiences.map((exp, index) => (
            <li
              key={index}
              className={`flex items-start mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
            >
              {/* Time Element */}
              <div className={`w-1/2 flex flex-col self-center ${index % 2 === 0 ? 'pr-4 items-end' : 'pl-4 items-start'} space-y-2`}>
                <time className="timeline-box">{exp.time}</time>
                <h2 className="timeline-title text-xl font-bold">{exp.title}</h2>
              </div>
              
              {/* Job Details */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-4' : 'pr-4'} flex items-center`}>
                <div className="timeline-box">
                  <h4 className="timeline-subtitle text-md md:text-xl text-slate-600 dark:text-slate-400 pb-1 font-semibold">{exp.company}</h4>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
