import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaLock,
  FaGlobe,
} from "react-icons/fa";

import portfolioImg from "../../assets/images/portfolio.jpg";
import passwordImg from "../../assets/images/password-checker.jpg";
import securityImg from "../../assets/images/security-dashboard.jpg";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      image: portfolioImg,
      icon: <FaGlobe />,
      description:
        "A modern cybersecurity portfolio built with React and Vite featuring responsive design, animations, and a professional UI.",

      technologies: ["React", "Vite", "CSS", "JavaScript"],

      github: "https://github.com/Abdulrahman009",

      demo: "#",
    },

    {
      title: "Password Strength Checker",
      image: passwordImg,
      icon: <FaLock />,
      description:
        "A password strength checker that evaluates password security and provides recommendations for creating stronger passwords.",

      technologies: ["React", "JavaScript", "CSS"],

      github: "https://github.com/Abdulrahman009",

      demo: "#",
    },

    {
      title: "Cybersecurity Dashboard",
      image: securityImg,
      icon: <FaShieldAlt />,
      description:
        "A concept dashboard for monitoring cybersecurity metrics, threats, and system activity using modern frontend technologies.",

      technologies: ["React", "CSS", "Charts"],

      github: "https://github.com/Abdulrahman009",

      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2 className="section-title">My Projects</h2>

        <p className="section-subtitle">
          Here are some projects that demonstrate my interest in
          cybersecurity, web development, and problem solving.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              <div className="project-content">

                <div className="project-icon">
                  {project.icon}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">

                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}

                </div>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn github-btn"
                  >
                    <FaGithub /> GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="project-btn live-btn"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;