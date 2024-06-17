import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <Link to="https://github.com/Dasher8">
          <FontAwesomeIcon icon="fa-brands fa-github social-icon" />
        </Link>
        <Link to="https://www.behance.net/dariatopor">
          <FontAwesomeIcon icon="fa-brands fa-square-behance social-icon" />
        </Link>
        <Link to="https://www.linkedin.com/in/dariatopor/">
          <FontAwesomeIcon icon="fa-brands fa-linkedin social-icon" />
        </Link>
      </div>
    </div>
  );
}
