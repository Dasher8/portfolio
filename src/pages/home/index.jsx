import React from "react";
import LayoutDefault from "../../layouts/default/index";
import Outil from "../../components/outil";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faSass,
  faGithub,
  faGit,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import Projects from "../../containers/projects";

import About from "../../components/about";
export default function Home() {

  const text =
  (
    <div>
      Bonjour, c'est Daria.
      <br />
      Je suis développeuse front-end, précédemment designer graphique et photographe.
      <br />
      Mon expérience en tant que designer graphique et photographe enrichit ma compréhension du web design et m'aide à apporter une touche créative à mes projets ainsi qu'à créer des interfaces utilisateur à la fois fonctionnelles et esthétiques.
    </div>
  );

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
    <LayoutDefault>
      <main className="main-home">
        <section id="about" className="about">
          <div className="">
            <h1>Présentation</h1>
            <About text={text}/>
          </div>
        </section>
        <section id="outils" className="outils">
          <h2>Compétences</h2>
          <div className="outils-container">
            {icons.map((icon, index) => (
              <Outil key={index} icon={icon.icon} className={icon.className} />
            ))}
          </div>
        </section>
        <section id="projects" className="projects">
          <h2>Projets</h2>
          <Projects />
        </section>
      </main>
    </LayoutDefault>
  );
}
