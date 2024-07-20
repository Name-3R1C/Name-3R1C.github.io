import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="pt-[12vh] py-12 ">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-7">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Headshot pic */}
          <div className="flex-shrink-0 mb-8 lg:mb-0 flex flex-col items-center pr-3 pt-4">
            <Image
              className="rounded-full object-cover"
              src="/assets/headshot.png"
              alt="Biography Image"
              width={200}
              height={200}
            />
            <p className="text-lg text-gray-700 pt-5">
            Full-Stack Web Developer
            </p>
            <p className="text-lg text-gray-700 pt-1">
            Problem Solver
            </p>
            <p className="text-lg text-gray-700 pt-1">
            Mathematics
            </p>
          </div>

          {/* bio */}
          <div className="flex flex-col justify-center">
            <h1 className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_1rem)] font-black tracking-[-0.2rem] transition-all duration-300 pb-4">
              About Me
            </h1>
            <div className='About-me mb-4'>
              <p className="text-lg text-gray-700 mb-4">
              Enthusiastic and results-driven Full-Stack Web Developer with a solid background in mathematics and a passion for creating robust, client-focused web applications. Experienced in the complete development lifecycle, from research and planning to design, implementation, and testing. Skilled in using JavaScript, Ruby, HTML, CSS, and various testing frameworks.
              </p>
              {/* resume */}
              <div className="w-auto inline-flex">
                <a
                  href="/assets/Eric-Feng-Full-Stack-Developer-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg
                    className="w-3.5 h-3.5 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 00-1.414.0L11 10.086V1.5a1 1 0 00-2 0v8.586L6.707 7.793A1 1 0 105.293 9.207l4 4a1 1 0 001.416.0l4-4a1 1 0 00-.002-1.414z"></path>
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 01-4.95.0L4.55 12H2a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2zm-3 5a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                  Download CV
                </a>
              </div>
            </div>

            <div className='Education'>
              <h2 className="text-xl font-extrabold text-gray-900 mb-4 dark:text-slate-400">
                Education
              </h2>
              <ul className="flex flex-col md:flex-row md:space-x-4 gap-6">
                <li className="flex items-start">
                  <svg 
                    className="flex-shrink-0 w-5 h-5 me-2" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      fill="none" 
                      stroke="currentcolor" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="1.5" 
                      d="M4.26 10.147a60.436 60.436.0 00-.491 6.347A48.627 48.627.0 0112 20.904a48.627 48.627.0 018.232-4.41 60.46 60.46.0 00-.491-6.347m-15.482.0a50.57 50.57.0 00-2.658-.813A59.905 59.905.0 0112 3.493a59.902 59.902.0 0110.399 5.84 51.39 51.39.0 00-2.658.814m-15.482.0A50.697 50.697.0 0112 13.489a50.702 50.702.0 017.74-3.342M6.75 15a.75.75.0 100-1.5.75.75.0 000 1.5m0 0v-3.675A55.378 55.378.0 0112 8.443m-7.007 11.55A5.981 5.981.0 006.75 15.75v-1.5"
                    >
                    </path>
                  </svg>
                  <div className='description'>
                    <p className='font-bold'>Diploma of Web Development</p>
                    <p >Lighthouse Labs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg 
                      className="flex-shrink-0 w-5 h-5 me-2 mt-1" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        fill="none" 
                        stroke="currentcolor" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="1.5" 
                        d="M4.26 10.147a60.436 60.436.0 00-.491 6.347A48.627 48.627.0 0112 20.904a48.627 48.627.0 018.232-4.41 60.46 60.46.0 00-.491-6.347m-15.482.0a50.57 50.57.0 00-2.658-.813A59.905 59.905.0 0112 3.493a59.902 59.902.0 0110.399 5.84 51.39 51.39.0 00-2.658.814m-15.482.0A50.697 50.697.0 0112 13.489a50.702 50.702.0 017.74-3.342M6.75 15a.75.75.0 100-1.5.75.75.0 000 1.5m0 0v-3.675A55.378 55.378.0 0112 8.443m-7.007 11.55A5.981 5.981.0 006.75 15.75v-1.5"
                      >
                      </path>
                    </svg>
                  <div className="description">
                    <p className="font-bold">BSc Mathematics</p>
                    <p>Simon Fraser University</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
