import "./Stats.css";
import { useEffect, useState } from "react";
import {
  FaCode,
  FaShieldAlt,
  FaCertificate,
  FaGithub,
} from "react-icons/fa";

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const increment = Math.max(1, Math.ceil(end / 50));

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 40);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
}

function Stats() {
  return (
    <section className="stats" id="stats">

      <h2 className="section-title">
        Portfolio Statistics
      </h2>

      <p className="section-subtitle">
        A snapshot of my learning journey and technical growth.
      </p>

      <div className="stats-container">

        <div className="stat-card">
          <FaCode className="stat-icon" />

          <h2>
            <Counter end={10} />+
          </h2>

          <p>Projects Completed</p>
        </div>

        <div className="stat-card">
          <FaShieldAlt className="stat-icon" />

          <h2>
            <Counter end={15} />+
          </h2>

          <p>Cybersecurity Skills</p>
        </div>

        <div className="stat-card">
          <FaCertificate className="stat-icon" />

          <h2>
            <Counter end={3} />+
          </h2>

          <p>Certificates</p>
        </div>

        <div className="stat-card">
          <FaGithub className="stat-icon" />

          <h2>
            <Counter end={10} />+
          </h2>

          <p>GitHub Repositories</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;