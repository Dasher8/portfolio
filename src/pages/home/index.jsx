import React from "react";
import LayoutDefault from "../../layouts/default";
import Outil from "../../components/outil";
import { useState, useEffect } from "react";
import Projects from "../../containers/projects";
import iconMap from "../../iconImports";
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

  const [icons, setIcons] = useState([]);

  useEffect(() => {
    fetch("/data/icons.json")
      .then((response) => response.json())
      .then((data) => {
        const resolvedIcons = data.data.map((icon) => ({
          icon: iconMap[icon.icon],
          className: icon.className
        }));
        setIcons(resolvedIcons);
      });
  }, []);

  return (
    <LayoutDefault>
      <main className="main-home">
        <section id="about" className="about">
          <div>
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
