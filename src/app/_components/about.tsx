import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section id="section-resume-biography-3" className="pt-[12vh] py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Headshot pic */}
          <div className="flex-shrink-0 mb-8 lg:mb-0">
            <Image
              className="rounded-full object-cover"
              src="/assets/headshot.png"
              alt="Biography Image"
              width={200}
              height={200}
            />
          </div>
          {/* bio */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-700 mb-4">
            💻 Full-Stack Web Developer | Problem Solver | Mathematics
            </p>
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
        </div>
      </div>
    </section>
  );
};

export default About;
