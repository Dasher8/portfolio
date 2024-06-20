import React, { useState, useEffect } from "react";

import "../../index.css";

import Project from "../../components/project/index";

import projectImage1 from "../../assets/kasa_mobile_mockup.webp";
import projectImage2 from "../../assets/ohmyfood_desktop_mockup.webp";
import projectImage3 from "../../assets/argentbank_ipad.webp";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => {
        // Ajouter les images locales aux données du projet
        const projectsWithImages = data.data.map((project) => {
          switch (project.id) {
            case "1":
              return { ...project, cover: projectImage1 };
            case "2":
              return { ...project, cover: projectImage2 };
            case "3":
              return { ...project, cover: projectImage3 };
            default:
              return project;
          }
        });
        setProjects(projectsWithImages);
      });
  }, []);

  return (
    <section className="cards-section">
      <div className="cards-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            id={project.id}
            title={project.title}
            cover={project.cover}
            alt={project.title}
          />
        ))}
      </div>
    </section>
  );
}
