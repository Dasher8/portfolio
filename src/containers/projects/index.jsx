import React, { useState, useEffect } from "react";

import "../../index.css";

import Project from "../../components/project/index";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setProjects(data.data);
        }
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
