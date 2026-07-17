import "./Timeline.css";
import { FaGraduationCap, FaLaptopCode, FaShieldAlt } from "react-icons/fa";

function Timeline() {
  const timeline = [
    {
      year: "2024",
      icon: <FaGraduationCap />,
      title: "Started Computer Science",
      description:
        "Began studying Computer Science with a specialization in Cybersecurity at Al-Hikmah University.",
    },
    {
      year: "2024",
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description:
        "Started learning HTML, CSS, JavaScript, React and Vite while building responsive web applications.",
    },
    {
      year: "2024",
      icon: <FaShieldAlt />,
      title: "Cybersecurity Journey",
      description:
        "Focused on network security, ethical hacking, penetration testing and security best practices.",
    },
    {
      year: "2026",
      icon: <FaShieldAlt />,
      title: "Portfolio & Projects",
      description:
        "Built cybersecurity projects, React applications and a professional portfolio website.",
    },
  ];

  return (
    <section className="timeline section">
      <h2 className="section-title">My Journey</h2>

      <div className="timeline-container">
        {timeline.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">{item.icon}</div>

            <div className="timeline-content">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;