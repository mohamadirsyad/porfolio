import { motion } from "framer-motion";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "SDN Duren Tiga 13",
    duration: "2023 - 2024",
  },
  {
    role: "Mobile Developer Intern",
    company: "Aplikasi Pariwisata kabupaten Sukabumi ",
    duration: "2023 - 2024",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="p-10 h-[100vh] bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-blue-100"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>

      <div className="mt-10 flex flex-col items-center relative before:absolute before:left-1/2 before:top-0 before:h-full before:w-1 before:bg-blue-500 before:shadow-lg">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative w-[80%] max-w-xl p-6 bg-black/30 backdrop-blur-lg border border-blue-500 shadow-lg rounded-2xl mb-6 hover:scale-105 transition-all duration-300 ${
              index % 2 === 0 ? "self-start text-left" : "self-end text-right"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-blue-300">{exp.role}</h3>
            <p className="text-gray-300">{exp.company}</p>
            <p className="text-gray-400">{exp.duration}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
