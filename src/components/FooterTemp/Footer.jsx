import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-name">
          Bello Abdulrahman Adebolaji
        </h2>

        <p className="footer-role">
          Cybersecurity Student • React Developer • Future Security Engineer
        </p>

        <div className="footer-icons">
          <a
            href="https://github.com/Abdulrahman009"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/extro82"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.tiktok.com/@itsabdulr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>

          <a
            href="https://www.youtube.com/@abdulrahmanbello6598"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

          <a
            href="mailto:extrobell@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-copy">
          © {year} Bello Abdulrahman Adebolaji. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;