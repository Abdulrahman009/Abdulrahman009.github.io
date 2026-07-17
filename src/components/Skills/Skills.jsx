import "./Skills.css";
import {
  FaShieldAlt,
  FaCode,
  FaReact,
  FaNetworkWired,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      level: "80%",
      width: "80%",
    },
    {
      icon: <FaReact />,
      title: "React.js",
      level: "75%",
      width: "75%",
    },
    {
      icon: <FaJsSquare />,
      title: "JavaScript",
      level: "80%",
      width: "80%",
    },
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      level: "95%",
      width: "95%",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      level: "90%",
      width: "90%",
    },
    {
      icon: <FaCode />,
      title: "Python",
      level: "65%",
      width: "65%",
    },
    {
      icon: <FaNetworkWired />,
      title: "Networking",
      level: "75%",
      width: "75%",
    },
    {
      icon: <FaGitAlt />,
      title: "Git & GitHub",
      level: "85%",
      width: "85%",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <h2 className="section-title">My Skills</h2>

        <p className="section-subtitle">
          Here are some of the technologies and cybersecurity skills I have
          developed through university studies, personal projects, and
          continuous learning.
        </p>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-header">

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div className="skill-info">
                  <h3>{skill.title}</h3>
                  <span>{skill.level}</span>
                </div>

              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: skill.width }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;