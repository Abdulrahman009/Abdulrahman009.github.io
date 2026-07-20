import "./Certificates.css";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaGraduationCap,
} from "react-icons/fa";

const certificates = [
  {
    title: "Cisco Networking Academy",
    issuer: "Cisco",
    status: "Completed",
    link: "#",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    status: "In Progress",
    link: "#",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    status: "Completed",
    link: "#",
  },
  {
    title: "TryHackMe Learning Path",
    issuer: "TryHackMe",
    status: "In Progress",
    link: "https://tryhackme.com/",
  },
  {
    title: "React Development",
    issuer: "Self Learning",
    status: "Completed",
    link: "#",
  },
  {
    title: "Future Certifications",
    issuer: "CompTIA • EC-Council • Microsoft",
    status: "Coming Soon",
    link: "#",
  },
];

function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <div className="section-title">
        <h2>Certifications</h2>

        <p>
          Professional certifications, learning platforms, and continuous
          development in cybersecurity and software engineering.
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="certificate-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div className="certificate-icon">
              <FaCertificate />
            </div>

            <h3>{cert.title}</h3>

            <p>{cert.issuer}</p>

            <span className="status">{cert.status}</span>

            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
              View
            </a>
          </motion.div>
        ))}
      </div>

      <div className="learning-box">
        <FaGraduationCap />

        <div>
          <h3>Currently Learning</h3>

          <p>
            React • Linux • Networking • Penetration Testing • Web
            Security • Git & GitHub • Secure Software Development
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certificates;