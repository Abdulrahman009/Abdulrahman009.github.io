import "./About.css";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.section id="about" className="about" data-aos="fade-right">
      <h2>About Me</h2>

      <p>
        I'm <strong>Bello Abdulrahman Adebolaji</strong>, a Computer Science student
        specializing in Cybersecurity at Al-Hikmah University. I have practical experience in network monitoring and IT support through my SIWES internship at the University of Ilorin Network Operating Centre. I am passionate about network security, ethical hacking, penetration testing, and secure software development, and I enjoy building projects that strengthen my technical skills.

        I am passionate about ethical hacking, penetration testing,
        network security, web application security, Linux administration,
        and digital forensics.

        My goal is to become a Security Engineer who builds secure systems
        and protects organizations against cyber threats.
      </p>

      <div className="about-cards">

        <div className="card">
          <h3>🎓 Education</h3>
          <p>Computer Science (Cybersecurity)</p>
        </div>

        <div className="card">
          <h3>🛡 Focus</h3>
          <p>Ethical Hacking & Penetration Testing</p>
        </div>

        <div className="card">
          <h3>🌍 Goal</h3>
          <p>Become a Cybersecurity Engineer</p>
        </div>

      </div>
    </motion.section>
  );
}

export default About;