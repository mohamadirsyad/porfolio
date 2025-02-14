const projects = [
  {
    title: "Sdn Duren Tiga 13",
    description:
      "Official website of SDN Duren Tiga 13, featuring school information, schedules, and the latest news.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "http://sdndurentiga13.rf.gd/?i=2",
    imagIcon: ["/assets/html.png", "/assets/css.png", "/assets/javascript.png"],
    image: "/assets/sdn.png",
  },
  {
    title: "Uang Kas",
    description:
      "this website is designed to manage the cash fund (uang kas) for SDN Duren Tiga 13.",
    tech: ["React js", "Express Js", "Node js", "Mysql", "Tailwind css"],
    link: "",
    imagIcon: [
      "/assets/react.png",
      "/assets/express.png",
      "/assets/nodejs.png",
      "/assets/mysql.png",
      "/assets/tailwindcss.png",
    ],
    image: "/assets/uangkas.png",
  },
  {
    title: "Cuy Tube",
    description:
      "A Next.js-based video streaming platform with search and video playback features.",
    tech: ["Next.js", "TailwindCSS"],
    link: "https://cuy-tube.vercel.app/videos",
    imagIcon: [
      "/assets/nextjs.png",
      "/assets/tailwindcss.png",
      "/assets/typescript.png",
    ],
    image: "/assets/cuytube.png",
  },
  {
    title: "Anime List",
    description:
      "An anime catalog website displaying the latest anime lists with detailed information.",
    tech: ["Next.js", "TailwindCSS"],
    link: "https://anime-list-five-beta.vercel.app/",
    imagIcon: ["/assets/nextjs.png", "/assets/tailwindcss.png"],
    image: "/assets/animecuy.png",
  },
  {
    title: "Prayer Schedule",
    description:
      "A web application that displays daily prayer schedules based on the user's location.",
    tech: ["React.js", "TailwindCSS"],
    link: "https://jadwal-solat.vercel.app/",
    imagIcon: ["/assets/react.png", "/assets/tailwindcss.png"],
    image: "/assets/jadwalsolat.png",
  },
  {
    title: "Me Chat ",
    description:
      "This project is a real-time chat application built using modern web technologies. It allows users to communicate instantly with each other through a seamless and responsive interface. ",
    tech: ["React js", "Express Js", "Node js", "Mongodb", "Tailwind css"],
    link: "",
    imagIcon: [
      "/assets/react.png",
      "/assets/express.png",
      "/assets/nodejs.png",
      "/assets/mongodb.png",
      "/assets/tailwindcss.png",
    ],
    image: "/assets/mechat.png",
  },
  {
    title: "Gallery Idshy",
    description: "A web application for displaying a simple photo gallery.",
    tech: ["Next.js", "TailwindCSS"],
    link: "https://idshy-gallery.vercel.app/",
    imagIcon: ["/assets/nextjs.png", "/assets/tailwindcss.png"],
    image: "/assets/idshy.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="p-10 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <h2 className="text-4xl font-bold text-center text-white">Projects</h2>
      <div className="mt-8 grid mx-10 md:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80%] md:w-full md:h-full ">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-500/50 transition duration-300 transform hover:scale-105"
          >
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover duration-300 group-hover:blur-sm transition-all"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/60">
                <p className="text-white text-sm md:text-lg font-semibold hover:text-gray-300 px-4 py-2 rounded-lg shadow-lg">
                  View Project
                </p>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-[15px] mt-2 font-mono">
                {project.description}
              </p>
              <div className="flex items-center gap-3 mt-4">
                {project.imagIcon.map((icon, idx) => (
                  <img
                    key={idx}
                    src={icon}
                    alt={project.tech[idx]}
                    className="w-8 h-8"
                  />
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
