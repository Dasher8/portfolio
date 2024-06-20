import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socials" id="contact">
        <Link to="https://github.com/Dasher8" aria-label="GitHub Profile">
          <FontAwesomeIcon icon="fa-brands fa-github" className="social-icon" />
        </Link>
        <Link to="https://www.behance.net/dariatopor" aria-label="Behance Profile">
          <FontAwesomeIcon
            icon="fa-brands fa-square-behance"
            className="social-icon"
          />
        </Link>
        <Link to="https://www.linkedin.com/in/dariatopor/" aria-label="Linkedin Profile">
          <FontAwesomeIcon
            icon="fa-brands fa-linkedin"
            className="social-icon"
          />
        </Link>
      </div>
    </div>
  );
}
