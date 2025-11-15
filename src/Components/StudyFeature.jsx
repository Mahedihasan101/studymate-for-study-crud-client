import { FaUsers, FaUserGraduate, FaBookReader, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaUsers size={38} />,
    title: "Find Study Partners",
    description: "Match with learners who share your study goals and study style."
  },
  {
    icon: <FaUserGraduate size={38} />,
    title: "Expert Mentorship",
    description: "Learn directly from seniors, toppers, and skilled mentors."
  },
  {
    icon: <FaBookReader size={38} />,
    title: "Share Study Materials",
    description: "Exchange notes, problem solutions, and useful study resources."
  },
  {
    icon: <FaClock size={38} />,
    title: "Group Study Scheduling",
    description: "Plan productive study sessions that fit everyone’s routine."
  }
];

const StudyFeatures = () => {
  return (
    <div className="py-20 bg-[#F7F9FC] dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Side Grid With Highlight Center Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">

          {/* Card 1 */}
          <div className="group bg-white p-8 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300
            hover:-translate-y-2 cursor-default dark:bg-gray-400 "
          >
            <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">{features[0].icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{features[0].title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{features[0].description}</p>
          </div>


          {/* Card 2 — Highlight */}
         <div className="group bg-white p-8 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300
            hover:-translate-y-2 cursor-default dark:bg-gray-400 "
          >
            <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">{features[1].icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{features[1].title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{features[1].description}</p>
          </div>

          {/* Card 3 */}
         <div className="group bg-white p-8 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300
            hover:-translate-y-2 cursor-default dark:bg-gray-400 "
          >
            <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">{features[2].icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{features[2].title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{features[2].description}</p>
          </div>


          {/* Card 4 */}
          <div className="group bg-white p-8 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300
            hover:-translate-y-2 cursor-default dark:bg-gray-400 "
          >
            <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">{features[3].icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{features[3].title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{features[3].description}</p>
          </div>

        </div>

        {/* Right Text Section */}
        <div>
          <p className="uppercase text-sm tracking-wide text-gray-500 mb-2">
            About StudyMate Platform
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            <span className="text-blue-500">Study Better</span><span className="dark:text-white">, Together — Not Alone</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            StudyMate helps you find study companions and create a motivating environment.
            Collaborative learning improves understanding, confidence, and consistency.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
};

export default StudyFeatures;
