import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_9jtzamo",
        "template_2h93pzu",
        form.current,
        "eL5qgqg6sg-vffY12"
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
        setSending(false);
      })
      .catch((error) => {
        console.log(error);
        setStatus("error");
        setSending(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-header">
          <h2 className="section-title">Contact Me</h2>

          <p className="section-subtitle">
            Interested in working together, cybersecurity, or web
            development? Send me a message.
          </p>
        </div>

        <div className="contact-content">

          {/* Left Side */}

          <div className="contact-info">

            <div className="contact-card">
              <FaEnvelope className="contact-icon" />

              <div>
                <h3>Email</h3>
                <p>extrobell@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <FaPhone className="contact-icon" />

              <div>
                <h3>Phone</h3>
                <p>+234 912 143 8248</p>
              </div>
            </div>

            <div className="contact-card">
              <FaWhatsapp className="contact-icon" />

              <div>
                <h3>WhatsApp</h3>

                <a
                  href="https://wa.me/2349121438248"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />

              <div>
                <h3>Location</h3>
                <p>Nigeria</p>
              </div>
            </div>

          </div>

          {/* Right Side */}

          <form
            ref={form}
            className="contact-form"
            onSubmit={sendEmail}
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
              placeholder="Write your message..."
              required
            ></textarea>

            <button
              type="submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
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

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;