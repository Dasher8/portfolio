import React from "react";
import LayoutDefault from "../../layouts/default/index";
import Outil from "../../components/outil";
import { faReact, faJs, faHtml5, faCss3Alt, faSass, faGithub, faGit, faFigma } from "@fortawesome/free-brands-svg-icons";
import Projects from "../../containers/projects";

export default function Home() {

  const icons = [
    { icon: faReact, className: "react-icon" },
    { icon: faJs, className: "js-icon" },
    { icon: faHtml5, className: "html5-icon" },
    { icon: faCss3Alt, className: "css3-icon" },
    { icon: faSass, className: "sass-icon" },
    { icon: faGithub, className: "github-icon" },
    { icon: faGit, className: "git-icon" },
    { icon: faFigma, className: "figma-icon" },
  ];
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
        <h2>Outils</h2>
        <div className="outils-container">
        {icons.map((icon, index) => (
          <Outil key={index} icon={icon.icon} className={icon.className} />
        ))}
        </div>
      </section>
      <section id="projects" className="projects">
      <Projects/>
      </section>
    </LayoutDefault>
  );
}
