import { motion } from "framer-motion";

const certificates = [
  {
    name: "Javascript",
    company: "Myskill",
    date: "December 2023",
    description: "Fundamentals of JavaScript programming.",
    image: "/assets/myskill1.jpeg",
  },
  {
    name: "Data Type And Operator",
    company: "Myskill",
    date: "December 2023",
    description: "Understanding JavaScript data types and operators.",
    image: "/assets/myskill2.jpeg",
  },
  {
    name: "Basic Web Programming",
    company: "Dicoding",
    date: "February 2024",
    description: "Learned HTML, CSS, and JavaScript basics.",
    image: "/assets/dicoding.jpg",
  },
  {
    name: "Machine Learning",
    company: "Dicoding",
    date: "December 2022",
    description: "Introduction to machine learning using Python.",
    image: "/assets/dicoding2.jpg",
  },
  {
    name: "Software Engineering",
    company: "RevoU",
    date: "October 2024",
    description:
      "Built a temperature conversion web project using HTML, CSS, and JavaScript.",
    image: "/assets/revou.jpg",
  },
  {
    name: "Google Digital Talent Entrepreneurship",
    company: "Kominfo",
    date: "November 2022",
    description: "Studied digital entrepreneurship strategies.",
    image: "/assets/digitaltalent.jpg",
  },
  {
    name: "Learning Management Systems Magenta",
    company: "Magenta BUMN",
    date: "January 2025",
    description:
      "Explored learning management systems and digital education strategies.",
    image: "/assets/magenta.jpg",
  },
];

const Certificate = () => {
  return (
    <section
      id="certificates"
      className="p-10 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Certificates
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img
              src={cert.image}
              alt={cert.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-400">
                {cert.name}
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-300 text-sm font-semibold mt-2 font-mono">
                  {cert.company}
                </p>
                <p className="text-gray-400 text-xs">{cert.date}</p>
              </div>

              <p className="text-gray-300 text-sm mt-3">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
