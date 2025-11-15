import { FaUserPlus, FaSearch, FaHandshake, FaBookOpen } from "react-icons/fa";

const steps = [
  { icon: <FaUserPlus size={40} />, title: "Create Account", desc: "Sign up and set your learning preferences." },
  { icon: <FaSearch size={40} />, title: "Find Partners", desc: "Browse and match with compatible learners." },
  { icon: <FaHandshake size={40} />, title: "Send Request", desc: "Connect and start communicating." },
  { icon: <FaBookOpen size={40} />, title: "Study Together", desc: "Share notes, solve problems and grow." }
];

const HowItWorks = () => (
  <div className="py-20 bg-[#F8FAFF] dark:bg-black">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 dark:text-white">How It Works</h2>

    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6 text-center">
      {steps.map((s, i) => (
        <div key={i} className="p-6 bg-white border rounded-xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300 dark:bg-gray-400">
          <div className="text-blue-600 mb-4 flex justify-center">{s.icon}</div>
          <h3 className="font-semibold text-lg mb-2 dark:text-black">{s.title}</h3>
          <p className="text-gray-600 text-sm">{s.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default HowItWorks;
