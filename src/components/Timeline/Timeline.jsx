import "./Timeline.css";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2023",
    title: "Started Computer Science",
    description:
      "Began my Computer Science (Cybersecurity) degree at Al-Hikmah University, Ilorin.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    description:
      "Started learning HTML, CSS, JavaScript, React, and modern web development practices.",
  },
  {
    year: "2025",
    title: "Cybersecurity & GitHub",
    description:
      "Built cybersecurity projects, learned Git/GitHub, and developed my personal portfolio.",
  },
  {
    year: "2026",
    title: "SIWES & Practical Experience",
    description:
      "Focused on SIWES, hands-on cybersecurity labs, React development, and expanding my project portfolio.",
  },
  {
    year: "Future",
    title: "Cybersecurity Engineer",
    description:
      "My goal is to specialize in penetration testing, cloud security, network defense, and secure software development.",
  },
];

function Timeline() {
  return (
    <section className="timeline" id="timeline">
      <div className="section-title">
        <h2>My Journey</h2>
        <p>
          A snapshot of my growth in computer science, web development,
          and cybersecurity.
        </p>
      </div>

      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>{item.year}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;