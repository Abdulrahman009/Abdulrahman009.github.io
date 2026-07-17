import "./Github.css";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaUsers,
  FaBook,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";

function Github() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Abdulrahman009")
      .then((res) => res.json())
      .then((data) => setUser(data));

    fetch(
      "https://api.github.com/users/Abdulrahman009/repos?sort=updated&per_page=6"
    )
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  if (!user) {
    return (
      <section className="github">
        <h2 className="section-title">Loading GitHub...</h2>
      </section>
    );
  }

  return (
    <section className="github" id="github">
      <h2 className="section-title">GitHub Profile</h2>

      <p className="section-subtitle">
        Live GitHub profile and latest repositories.
      </p>

      {/* Profile Card */}

      <div className="github-card">

        <img
          src={user.avatar_url}
          alt={user.login}
          className="github-avatar"
        />

        <h2>{user.name}</h2>

        <h3>@{user.login}</h3>

        <p>{user.bio}</p>

        <div className="github-stats">

          <div className="github-stat">
            <FaBook />
            <span>{user.public_repos}</span>
            <p>Repositories</p>
          </div>

          <div className="github-stat">
            <FaUsers />
            <span>{user.followers}</span>
            <p>Followers</p>
          </div>

          <div className="github-stat">
            <FaCodeBranch />
            <span>{user.following}</span>
            <p>Following</p>
          </div>

        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          <FaGithub />
          Visit GitHub
        </a>

      </div>

      {/* Latest Repositories */}

      <h2 className="repo-title">
        Latest Repositories
      </h2>

      <div className="repo-grid">

        {repos.map((repo) => (
          <div
            className="repo-card"
            key={repo.id}
          >

            <h3>{repo.name}</h3>

            <p>
              {repo.description || "No description available."}
            </p>

            <div className="repo-info">

              <span>
                💻 {repo.language || "Unknown"}
              </span>

              <span>
                <FaStar /> {repo.stargazers_count}
              </span>

            </div>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt />
              View Repository
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Github;