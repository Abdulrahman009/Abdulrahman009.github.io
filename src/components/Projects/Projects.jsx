import "./Projects.css";

const projects = [
  {
    title: "Cybersecurity Portfolio",
    description:
      "A modern React portfolio showcasing my cybersecurity skills, certifications, projects and professional experience.",

    tech: ["React", "CSS", "Vite"],

    github: "https://github.com/Abdulrahman009",

    demo: "#",
  },

  {
    title: "Network Security Lab",

    description:
      "Built a secure virtual lab for penetration testing, network monitoring and vulnerability assessment.",

    tech: ["Cisco", "Wireshark", "Kali Linux"],

    github: "https://github.com/Abdulrahman009",

    demo: "#",
  },

  {
    title: "Password Strength Checker",

    description:
      "Developed a password validation tool that evaluates password complexity using security best practices.",

    tech: ["JavaScript", "HTML", "CSS"],

    github: "https://github.com/Abdulrahman009",

    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects" data-aos="fade-up">

      <h2>Projects</h2>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">

              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}

            </div>

            <div className="project-links">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;