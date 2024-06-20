import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <h1 className="logo-text">Portfolio</h1>
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <a href="#projects" className="active-link">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" className="active-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
