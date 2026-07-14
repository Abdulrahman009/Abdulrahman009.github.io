import "./Certifications.css";

const certs = [
  {
    title: "Cisco Networking Academy",
    issuer: "Cisco",
    year: "2026",
  },
  {
    title: "Google Cybersecurity",
    issuer: "Google",
    year: "In Progress",
  },
  {
    title: "Coursera Cybersecurity",
    issuer: "Coursera",
    year: "2026",
  },
  {
    title: "TryHackMe",
    issuer: "TryHackMe",
    year: "Learning",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="certifications" data-aos="fade-left">

      <h2>Certifications</h2>

      <div className="cert-grid">

        {certs.map((cert) => (

          <div className="cert-card" key={cert.title}>

            <h3>{cert.title}</h3>

            <p>{cert.issuer}</p>

            <span>{cert.year}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;