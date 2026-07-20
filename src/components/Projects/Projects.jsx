import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import portfolioImg from "../../assets/images/portfolio.jpg";
import passwordImg from "../../assets/images/password-checker.jpg";
import securityImg from "../../assets/images/security-dashboard.jpg";

const projects = [
  {
    title: "Personal Portfolio",
    image: portfolioImg,
    description:
      "A responsive portfolio built with React and Vite showcasing my projects, cybersecurity journey, and technical skills.",
    tech: ["React", "Vite", "CSS"],
    github: "https://github.com/Abdulrahman009/Abdulrahman009.github.io",
    demo: "https://abdulrahman009.github.io/",
  },
  {
    title: "Password Strength Checker",
    image: passwordImg,
    description:
      "A password checker that evaluates password strength and promotes secure password practices.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Abdulrahman009",
    demo: "#",
  },
  {
    title: "Cybersecurity Learning",
    image: securityImg,
    description:
      "Hands-on cybersecurity labs covering networking, Linux, penetration testing, and defensive security concepts.",
    tech: ["Linux", "Networking", "Cybersecurity"],
    github: "https://github.com/Abdulrahman009",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <h2>Projects</h2>
        <p>
          A selection of projects that demonstrate my interest in web
          development and cybersecurity.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;