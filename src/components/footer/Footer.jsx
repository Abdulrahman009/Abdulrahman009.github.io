import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <p>
        © {new Date().getFullYear()} Bello Abdulrahman Adebolaji
      </p>

      <p>
        Built with React & Vite
      </p>

    </footer>
  );
}

export default Footer;