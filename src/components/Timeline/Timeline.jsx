import "./Timeline.css";

const timeline = [
  {
    year: "2023",
    title: "Started Computer Science",
    place: "Al-Hikmah University",
  },
  {
    year: "2024",
    title: "Cisco Networking Academy",
    place: "Networking & Cybersecurity",
  },
  {
    year: "2025",
    title: "Cybersecurity Projects",
    place: "React • Networking • Security",
  },
  {
    year: "2026",
    title: "SIWES Internship",
    place: "Network Operations Centre",
  },
  {
    year: "Future",
    title: "Cybersecurity Engineer",
    place: "Blue Team • Penetration Testing",
  },
];

function Timeline() {
  return (
    <section className="timeline" id="timeline" data-aos="fade-up">
      <h2>My Journey</h2>

      <div className="timeline-container">
        {timeline.map((item, index) => (
          <div className="timeline-card" key={index}>
            <span className="year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;