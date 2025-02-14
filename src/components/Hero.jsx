import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import profilePic from "/assets/fotostudio.png";
import Resume from "../pdf/CV-MohamadIrsyad.pdf";

const words = ["Mohamad Irsyad", "Web Developer"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[index];

    if (deleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex((prev) => prev - 1), 100);
      } else {
        setDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else {
      if (charIndex < currentWord.length) {
        setTimeout(() => setCharIndex((prev) => prev + 1), 200);
      } else {
        setTimeout(() => setDeleting(true), 2000);
      }
    }

    setText(currentWord.substring(0, charIndex));
  }, [charIndex, deleting, index]);

  return (
    <section
      id="home"
      style={{ backgroundImage: "url('/assets/background.jpg')" }}
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-cover bg-center text-white text-center md:text-left px-10 relative"
    >
      {/* Overlay supaya teks lebih terbaca */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Foto Profil dengan Bingkai Modern */}
      <motion.div
        className="relative z-10 mt-8 md:mt-0 md:w-[40%] flex justify-center py-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative p-2 shadow-lg">
          <img
            src={profilePic}
            alt="Profile"
            className="w-60 h-60  md:w-80 md:h-80 object-cover rounded-full border-blue-500/50 border-2  shadow-[0px_0px_20px_rgba(0,0,255,0.5)] transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Teks Animasi */}
      <motion.div
        className="relative  md:w-[60%]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I&apos;m <span className="text-blue-400">{text}</span>
          <motion.span
            className="text-gray-600"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          >
            |
          </motion.span>
        </h1>
        <a href={Resume} download="CV-MohamadIrsyad.pdf">
          <motion.button
            className="mt-6 px-8 py-3 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>📄</span>| Download CV
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
