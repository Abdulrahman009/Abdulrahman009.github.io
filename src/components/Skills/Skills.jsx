import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  { name: "Cybersecurity", level: 90 },
  { name: "Networking", level: 85 },
  { name: "Linux", level: 80 },
  { name: "Python", level: 75 },
  { name: "React", level: 70 },
  { name: "JavaScript", level: 75 },
];

function Skills() {
  return (
    <motion.section id="skills" className="skills"data-aos="zoom-in">
      <h2>Technical Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <div className="skill-title">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;