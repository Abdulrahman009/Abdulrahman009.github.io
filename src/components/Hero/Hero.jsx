import "./Hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

import profileImage from "../../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">

        {/* Left Side */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>Hello, I'm</h3>

          <h1>
            Bello <span>Abdulrahman</span>
          </h1>

          <h2>
            <Typewriter
              words={[
                "Cybersecurity Student",
                "React Developer",
                "Future Security Engineer",
                "Ethical Hacking Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p>
            Computer Science (Cybersecurity) student passionate about ethical
            hacking, secure web development, penetration testing, and building
            modern web applications with React.
          </p>

          <div className="hero-location">
            <FaMapMarkerAlt />
            <span>Ilorin, Kwara State, Nigeria</span>
          </div>

          <div className="hero-status">
            <span className="status-dot"></span>
            Available for SIWES & Internship
          </div>

          <div className="hero-buttons">
            <a
              href="/Abdulrahman_Bello_CV.pdf"
              className="primary-btn"
              download
            >
              <FaDownload />
              Download CV
            </a>

            <a href="#contact" className="secondary-btn">
              <FaEnvelope />
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Abdulrahman009"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/extro82"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="hero-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>Cybersecurity</span>
            <span>Networking</span>
            <span>Linux</span>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profileImage} alt="Bello Abdulrahman" />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;