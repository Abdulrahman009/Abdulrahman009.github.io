import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
   then(() => {
  setStatus("success");
  form.current.reset();
  setLoading(false);

  setTimeout(() => {
    setStatus("");
  }, 4000);
})

.catch((error) => {
  console.error(error);
  setStatus("error");
  setLoading(false);

  setTimeout(() => {
    setStatus("");
  }, 4000);
})

      const [status, setStatus] = useState("");
  };

  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h2>Contact Me</h2>

        <p>
          Have a project, internship opportunity, or just want to say hello?
          Feel free to send me a message.
        </p>
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="contact-item">
            <FaEnvelope />

            <div>
              <h3>Email</h3>
              <p>extrobell@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhone />

            <div>
              <h3>Phone</h3>
              <p>+234 912 143 8248</p>
            </div>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />

            <div>
              <h3>Location</h3>
              <p>Ilorin, Kwara State, Nigeria</p>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/Abdulrahman009"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="www.linkedin.com/in/abdulrahman-bello-9395aa285/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>

{status === "success" && (
  <p className="success-message">
    ✅ Your message has been sent successfully!
  </p>
)}

{status === "error" && (
  <p className="error-message">
    ❌ Something went wrong. Please try again.
  </p>
)}

        </motion.form>
      </div>
    </section>
  );
}

export default Contact;