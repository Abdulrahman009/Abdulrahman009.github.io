import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <h2>Bello Abdulrahman Adebolaji</h2>

        <p>
          Cybersecurity Student | React Developer | Future Security Engineer
        </p>

        <div className="footer-icons">

          <a
            href="https://github.com/Abdulrahman009"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/extro82"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://tiktok.com/@itsabdulr"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok />
          </a>

          <a
            href="https://youtube.com/@abdulrahmanbello6598"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>

        </div>

        <hr />

        <p className="copyright">
          © 2026 Bello Abdulrahman Adebolaji.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;