import { motion } from "framer-motion";

const techStack = [
  { name: "HTML", img: "/assets/html.png" },
  { name: "CSS", img: "/assets/css.png" },
  { name: "TailwindCSS", img: "/assets/tailwindcss.png" },
  { name: "JavaScript", img: "/assets/javascript.png" },
  { name: "React JS", img: "/assets/react.png" },
  { name: "Next JS", img: "/assets/nextjs.png" },
  {
    name: "Express JS",
    img: "/assets/express.png",
    className: "bg-white p-1 rounded-md",
  },
  { name: "Node JS", img: "/assets/nodejs.png" },
  { name: "MySQL", img: "/assets/mysql.png" },
  { name: "MongoDB", img: "/assets/mongodb.png" },
  { name: "Prisma", img: "/assets/prisma.png" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="p-10 bg-gradient-to-b from-[#000000]  to-[#111827]"
    >
      <motion.h2
        className="text-3xl font-bold text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        💻 This is my Tech Stack
      </motion.h2>

      <div className="flex justify-center mt-10">
        <motion.div
          className="bg-zinc-900 text-white grid grid-cols-4 md:grid-cols-6 p-6 shadow-xl w-[90%] sm:w-[80%] md:w-[70%] rounded-lg gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={tech.img}
                alt={tech.name}
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 transition-transform transform hover:scale-110 ${
                  tech.className ?? ""
                }`}
              />
              <span className="text-xs sm:text-sm md:text-lg">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
