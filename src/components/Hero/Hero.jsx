import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import profile from "../../assets/images/profile.jpg";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="hero" data-aos="fade-up" >

      <div className="hero-left">

        <p className="hello">Hello, I'm</p>

        <h1>Bello Abdulrahman Adebolaji</h1>

        <h2>
          <Typewriter
            words={[
              "Cybersecurity Student",
              "Network Security Enthusiast",
              "Future Security Engineer",
              "React Developer",
              "Ethical Hacking Learner"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1800}
          />
        </h2>

        <p className="description">
          I'm a Computer Science student specializing in Cybersecurity at
          Al-Hikmah University with practical experience in network monitoring,
          troubleshooting, and IT support. I enjoy building secure web
          applications while learning ethical hacking, penetration testing, and
          network defence.
        </p>

        <div className="buttons">

         <a href="/Resume.docx" download>
  <button className="btn1">
    Download CV
  </button>
</a>

          <a href="#contact">
            <button className="btn2">Contact Me</button>
            <div className="social-icons">

  <a
    href="https://github.com/Abdulrahman009"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/abdulrahman-bello-9395aa285"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin />
  </a>

  <a href="mailto:extrobell@gmail.com">
    <FaEnvelope />
  </a>

</div>
          </a>

        </div>

      </div>

      <div className="hero-right">

        <img src={profile} alt="Bello Abdulrahman Adebolaji" />

      </div>

    </section>
  );
}

export default Hero;