import "./Certificates.css";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaShieldAlt,
} from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      year: "2025",
      icon: <FaShieldAlt />,
      link: "#",
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      year: "2025",
      icon: <FaCertificate />,
      link: "#",
    },
    {
      title: "React Development",
      issuer: "Coursera",
      year: "2026",
      icon: <FaCertificate />,
      link: "#",
    },
  ];

  return (
    <section className="certificates section">
      <h2 className="section-title">Certificates</h2>

      <p className="section-subtitle">
        Professional certifications and learning achievements.
      </p>

      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-icon">
              {cert.icon}
            </div>

            <h3>{cert.title}</h3>

            <p>{cert.issuer}</p>

            <span>{cert.year}</span>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              View Certificate
              <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;