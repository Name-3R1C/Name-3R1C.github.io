// components/Experience.tsx
import React from 'react';
import experiences from '../data/experience';

const Experience = () => {
  return (
    <div className="my-12 px-4">
      <h1 className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,10vw,4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">Experience</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {experiences.map((experience, index) => (
          <li key={index} className="timeline-item dark:text-white">
            <time className={`timeline-box ${index % 2 === 0 ? 'md:timeline-start' : 'md:timeline-end'} timeline-end`}>
              {experience.duration}
            </time>
            <div className={`timeline-box ${index % 2 === 0 ? 'md:timeline-end' : 'md:timeline-start'} timeline-start`}>
              <h2 className="timeline-title text-lg md:text-3xl">{experience.title}</h2>
              <h4 className="timeline-subtitle text-md md:text-xl text-slate-600 dark:text-slate-400">{experience.company}</h4>
              <p className="timeline-desc">{experience.description}</p>
            </div>
            <hr className="bg-primary" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
