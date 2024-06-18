import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1 className="logo-text">Portfolio</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="#about" className="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="#outils" className="active-link">
              Outils
            </NavLink>
          </li>
          <li>
            <NavLink to="#projects" className="active-link">
              Projets
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
