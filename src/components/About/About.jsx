import "./About.css";
import { motion } from "framer-motion";
import {
  FaUserShield,
  FaLaptopCode,
  FaGraduationCap,
  FaBullseye,
} from "react-icons/fa";

import profileImage from "../../assets/images/profile.jpg";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side - Image */}

        <div className="about-image">
          <img src={profileImage} alt="Abdulrahman Bello" />
        </div>

        {/* Right Side */}

        <div className="about-content">
          <h2 className="section-title">About Me</h2>

          <p className="section-subtitle">
            I'm <strong>Abdulrahman Bello</strong>, a Computer Science student
            specializing in Cybersecurity.
          </p>

          <p>
            I am passionate about cybersecurity, ethical hacking, web
            development, and network security. I enjoy building secure
            applications with React while continuously improving my skills
            through hands-on projects and certifications.
          </p>

          <div className="about-grid">

            <motion.div
              className="about-card"
              whileHover={{ scale: 1.05 }}
            >
              <FaUserShield className="about-icon" />
              <h3>Cybersecurity</h3>
              <p>Ethical Hacking, Network Security & Digital Defense.</p>
            </motion.div>

            <motion.div
              className="about-card"
              whileHover={{ scale: 1.05 }}
            >
              <FaLaptopCode className="about-icon" />
              <h3>Web Development</h3>
              <p>React, JavaScript, HTML, CSS and modern UI development.</p>
            </motion.div>

            <motion.div
              className="about-card"
              whileHover={{ scale: 1.05 }}
            >
              <FaGraduationCap className="about-icon" />
              <h3>Learning</h3>
              <p>Always improving through certifications and practical projects.</p>
            </motion.div>

            <motion.div
              className="about-card"
              whileHover={{ scale: 1.05 }}
            >
              <FaBullseye className="about-icon" />
              <h3>Career Goal</h3>
              <p>To become a professional Cybersecurity Engineer.</p>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;