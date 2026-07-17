import "./PasswordChecker.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const checkStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2)
      return {
        text: "Weak",
        color: "#ef4444",
        width: "30%",
      };

    if (score <= 4)
      return {
        text: "Medium",
        color: "#f59e0b",
        width: "65%",
      };

    return {
      text: "Strong",
      color: "#22c55e",
      width: "100%",
    };
  };

  const strength = checkStrength(password);

  return (
    <section className="password-checker section" id="password-checker">

      <h2 className="section-title">
        Password Strength Checker
      </h2>

      <p className="section-subtitle">
        Test your password security instantly.
      </p>

      <div className="password-card">

        <div className="password-input">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        <div className="strength-bar">
          <div
            className="strength-fill"
            style={{
              width: strength.width,
              background: strength.color,
            }}
          ></div>
        </div>

        <h3 style={{ color: strength.color }}>
          {password ? strength.text : "Start typing..."}
        </h3>

        <div className="requirements">

          <p className={password.length >= 8 ? "valid" : ""}>
            ✓ Minimum 8 characters
          </p>

          <p className={/[A-Z]/.test(password) ? "valid" : ""}>
            ✓ Uppercase letter
          </p>

          <p className={/[a-z]/.test(password) ? "valid" : ""}>
            ✓ Lowercase letter
          </p>

          <p className={/[0-9]/.test(password) ? "valid" : ""}>
            ✓ Number
          </p>

          <p className={/[^A-Za-z0-9]/.test(password) ? "valid" : ""}>
            ✓ Special character
          </p>

        </div>

      </div>

    </section>
  );
}

export default PasswordChecker;