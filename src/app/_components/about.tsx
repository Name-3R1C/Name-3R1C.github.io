import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section id="section-resume-biography-3" className="pt-[12vh] py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Image section */}
          <div className="flex-shrink-0 mb-8 lg:mb-0">
            <Image
              className="rounded-full object-cover"
              src="/assets/blog/authors/portrait.png"
              alt="Biography Image"
              width={200} // adjust as per your requirement
              height={200} // adjust as per your requirement
            />
          </div>
          {/* Text section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link href="/your-link" legacyBehavior>
              <a className="text-indigo-600 hover:text-indigo-500 font-medium">
                Read More &rarr;
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
