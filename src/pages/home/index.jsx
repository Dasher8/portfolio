import React from "react";
import LayoutDefault from "../../layouts/default/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <LayoutDefault page="home">
      <section id="about" className="about">
        <div className="about-text">
          <h1>Frontend dev</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            vel, culpa fuga velit obcaecati nemo, deleniti maiores provident
            sint nisi molestiae accusantium dolorem illum molestias nihil?
            Libero ipsum aut ab?
          </p>
        </div>
      </section>
      <section id="outils" className="outils">
        <div className="outils-container">
          <div className="outil">
            <FontAwesomeIcon icon="fa-brands fa-react outil-icon" />
          </div>
          <div className="outil">
            <FontAwesomeIcon icon="fa-brands fa-js outil-icon" />
          </div>
          <div className="outil">
            <FontAwesomeIcon icon="fa-brands fa-html5 outil-icon" />
          </div>
          <div className="outil">
            <FontAwesomeIcon icon="fa-brands fa-css3-alt outil-icon" />
          </div>
          <div className="outil">
            <FontAwesomeIcon icon="fa-brands fa-sass outil-icon" />
          </div>
          <div className="outil">
            <FontAwesomeIcon icon="fa-brands fa-github outil-icon" />
          </div>
          <div className="outil">
            <FontAwesomeIcon icon="fa-brands fa-git outil-icon" />
          </div>
          <div className="outil">
            <FontAwesomeIcon icon="fa-brands fa-figma outil-icon" />
          </div>
        </div>
      </section>
      <section id="projects" className="projects"></section>
    </LayoutDefault>
  );
}
