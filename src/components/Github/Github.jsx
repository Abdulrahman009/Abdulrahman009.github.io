import "./Github.css";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaCode,
  FaLaptopCode,
  FaShieldAlt,
} from "react-icons/fa";

function Github() {
  return (
    <section className="github" id="github">

      <div className="section-title">
        <h2>GitHub Activity</h2>
        <p>
          My coding journey, open-source contributions, and continuous
          learning through practical development projects.
        </p>
      </div>

      <motion.div
        className="github-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="github-stats">

          <div className="github-card">
            <FaGithub />
            <h3>GitHub</h3>
            <p>Open Source & Personal Projects</p>
          </div>

          <div className="github-card">
            <FaCode />
            <h3>React</h3>
            <p>Frontend Development</p>
          </div>

          <div className="github-card">
            <FaLaptopCode />
            <h3>JavaScript</h3>
            <p>Modern Web Development</p>
          </div>

          <div className="github-card">
            <FaShieldAlt />
            <h3>Cybersecurity</h3>
            <p>Learning Through Practice</p>
          </div>

        </div>

        <div className="calendar-wrapper">
          <GitHubCalendar
            username="Abdulrahman009"
            colorScheme="dark"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
          />
        </div>

      </motion.div>

    </section>
  );
}

export default Github;