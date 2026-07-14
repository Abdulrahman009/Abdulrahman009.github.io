import "./Contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaTiktok } from "react-icons/fa6";

function Contact() {
  return (
    <section className="contact" id="contact" data-aos="zoom-in">

      <h2>Contact Me</h2>

      <p className="contact-text">
        I'm always open to internship opportunities, cybersecurity
        collaborations, freelance projects, and networking with other
        technology enthusiasts.
      </p>

      <div className="contact-container">

        <div className="contact-card">

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:extrobell@gmail.com">
              extrobell@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <FaPhone className="icon" />
            <a href="tel:+2349121438248">
              +234 912 143 8248
            </a>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>Kwara State, Nigeria</span>
          </div>

          <div className="contact-item">
            <FaLinkedin className="icon" />
            <a
              href="https://www.linkedin.com/in/abdulrahman-bello-9395aa285"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="contact-item">
            <FaGithub className="icon" />
            <a
              href="https://github.com/Abdulrahman009"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Abdulrahman009
            </a>
          </div>

          <div className="contact-item">
            <FaInstagram className="icon" />
            <a
              href="https://www.instagram.com/extro82"
              target="_blank"
              rel="noreferrer"
            >
              @extro82
            </a>
          </div>

          <div className="contact-item">
            <FaYoutube className="icon" />
            <a
              href="https://youtube.com/@abdulrahmanbello6598"
              target="_blank"
              rel="noreferrer"
            >
              Abdulrahman Bello
            </a>
          </div>

          <div className="contact-item">
            <FaTiktok className="icon" />
            <a
              href="https://www.tiktok.com/@itsabdulr"
              target="_blank"
              rel="noreferrer"
            >
              @itsabdulr
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;