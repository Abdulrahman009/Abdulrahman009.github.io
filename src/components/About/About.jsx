import "./About.css";
import { motion } from "framer-motion";
import {
  FaUserShield,
  FaUniversity,
  FaMapMarkerAlt,
  FaBullseye,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="section-title">
        <h2>About Me</h2>
      </div>

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-card">

          <div className="about-item">
            <FaUserShield className="about-icon" />
            <div>
              <h3>Who I Am</h3>
              <p>
                I'm Bello Abdulrahman Adebolaji, a Computer Science
                (Cybersecurity) student who enjoys building secure web
                applications and learning offensive and defensive security.
              </p>
            </div>
          </div>

          <div className="about-item">
            <FaUniversity className="about-icon" />
            <div>
              <h3>Education</h3>
              <p>
                Computer Science (Cybersecurity)<br />
                Al-Hikmah University, Ilorin.
              </p>
            </div>
          </div>

          <div className="about-item">
            <FaMapMarkerAlt className="about-icon" />
            <div>
              <h3>Location</h3>
              <p>Ilorin, Kwara State, Nigeria</p>
            </div>
          </div>

          <div className="about-item">
            <FaBullseye className="about-icon" />
            <div>
              <h3>Career Goal</h3>
              <p>
                To become a Cybersecurity Engineer specializing in
                penetration testing, cloud security, and secure software
                development.
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default About;