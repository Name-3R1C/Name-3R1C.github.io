// components/Timeline.js
import Image from "next/image";

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  icon: string; // Assuming you have an icon property
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="relative w-full">
        {/* Vertical line */}
        <div className="absolute left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`vertical-timeline-element flex justify-between items-center w-full my-8 ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* <div className="vertical-timeline-element-icon w-12 h-12 rounded-full bg-gray-800 flex justify-center items-center">
              <Image
                src={exp.image}
                alt={exp.title}
                width={30}
                height={30}
                className="object-contain"
              />
            </div> */}
            <div className="vertical-timeline-element-content bg-gray-100 p-4 rounded-lg shadow-lg w-1/2 transform -translate-x-1/2">
              <div className="arrow w-3 h-3 bg-gray-100 transform rotate-45 absolute left-1/2 -translate-x-1/2 -mt-1"></div>
              <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
              <p className="text-lg font-semibold text-gray-700">{exp.company}</p>
              {/* <span className="block text-md font-medium text-gray-500">{exp.date}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
