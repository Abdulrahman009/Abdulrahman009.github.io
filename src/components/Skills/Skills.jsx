import "./Skills.css";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaShieldAlt,
  FaLinux,
  FaNetworkWired,
} from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", level: 95 },
  { icon: <FaCss3Alt />, name: "CSS3", level: 90 },
  { icon: <FaJs />, name: "JavaScript", level: 85 },
  { icon: <FaReact />, name: "React", level: 85 },
  { icon: <FaGithub />, name: "Git & GitHub", level: 80 },
  { icon: <FaShieldAlt />, name: "Cybersecurity", level: 80 },
  { icon: <FaLinux />, name: "Linux", level: 75 },
  { icon: <FaNetworkWired />, name: "Networking", level: 75 },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <h2>Skills</h2>
        <p>
          Technologies and cybersecurity skills I continue to build through
          projects, coursework, and hands-on practice.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">{skill.icon}</div>

            <div className="skill-info">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="progress">
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;