import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
            <HashLink smooth to="#contact" className="active-link">
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
