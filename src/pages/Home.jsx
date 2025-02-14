import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Certificate from "../components/Certificate";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Certificate />

      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-5 right-0 p-3 text-3xl text-white rounded-full shadow-lg  "
          animate={{
            y: ["0px", "-10px", "0px", "10px", "0px"], // membuat tombol bergerak atas dan bawah
          }}
          transition={{
            repeat: Infinity, // ulangi terus
            duration: 1, // durasi animasi
            ease: "easeInOut", // jenis transisi yang smooth
          }}
        >
          ⬆️
        </motion.button>
      )}
    </div>
  );
};

export default Home;
