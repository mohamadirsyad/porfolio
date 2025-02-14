import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "skills",
        "projects",
        "experience",
        "certificates",
      ];
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;

          if (
            scrollPosition >= sectionTop - 50 &&
            scrollPosition < sectionTop + sectionHeight - 50
          ) {
            setActiveLink(section);
          }
        }
      });

      // Cek apakah scroll sudah melewati navbar
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all rounded-b-xl duration-300 flex items-center justify-between p-4 md:p-8 ${
        isScrolled ? "bg-black  shadow-lg" : "bg-transparent"
      } text-white`}
    >
      {/* Tombol ☰ (Hanya Muncul di Mobile, Tetap di Kiri) */}
      <button
        className="md:hidden text-2xl hover:text-gray-400 transition duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Menu Tengah (Hanya Muncul di Layar Besar) */}
      <div className="hidden md:flex text-lg font-semibold absolute left-1/2 transform -translate-x-1/2 space-x-8">
        <a
          href="#home"
          className={`hover:text-blue-400 transition duration-200 ${
            activeLink === "home" ? "border-b-2 border-blue-400" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#skills"
          className={`hover:text-blue-400 transition duration-200 ${
            activeLink === "skills" ? "border-b-2 border-blue-400" : ""
          }`}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`hover:text-blue-400 transition duration-200 ${
            activeLink === "projects" ? "border-b-2 border-blue-400" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#experience"
          className={`hover:text-blue-400 transition duration-200 ${
            activeLink === "experience" ? "border-b-2 border-blue-400" : ""
          }`}
        >
          Experience
        </a>
        <a
          href="#certificates"
          className={`hover:text-blue-400 transition duration-200 ${
            activeLink === "certificates" ? "border-b-2 border-blue-400" : ""
          }`}
        >
          Certificates
        </a>
      </div>

      {/* GitHub & LinkedIn (Selalu di Pojok Kanan) */}
      <div className="absolute right-6 md:right-10 flex items-center space-x-6">
        <a
          target="_blank"
          href="https://github.com/mohamadirsyad"
          className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 transition duration-200"
        >
          <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          <span className="hidden sm:inline">Github</span>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mohamad-irsyad-993a282a4/"
          className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 transition duration-200"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 " />
          <span className="hidden sm:inline">Linkedin</span>
        </a>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isOpen && (
        <div className="absolute z-0 top-16 w-[50%] bg-gray-500 p-4 rounded-lg left-1 bg-opacity-30 md:hidden shadow-xl">
          <a
            href="#home"
            className="block py-2 text-lg hover:text-blue-400 transition duration-200"
          >
            Home
          </a>
          <a
            href="#skills"
            className="block py-2 text-lg hover:text-blue-400 transition duration-200"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block py-2 text-lg hover:text-blue-400 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="block py-2 text-lg hover:text-blue-400 transition duration-200"
          >
            Experience
          </a>
          <a
            href="#certificates"
            className="block py-2 text-lg hover:text-blue-400 transition duration-200"
          >
            Certificates
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
