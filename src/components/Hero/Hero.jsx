import "./Hero.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import profileImage from "../../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
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
            Abdulrahman <span>Bello</span>
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
            Passionate about cybersecurity, secure web development,
            penetration testing, and creating modern digital experiences
            using React.
          </p>

          <div className="hero-buttons">

            <a
              href="/Abdulrahman_Bello_CV.pdf"
              className="primary-btn"
              download
            >
              <FaDownload />
              Download CV
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              <FaEnvelope />
              Contact Me
            </a>

          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profileImage}
            alt="Abdulrahman Bello"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;