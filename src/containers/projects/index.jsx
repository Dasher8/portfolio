import React, { useState, useEffect } from "react";

import "../../index.css";

import Project from "../../components/project/index";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProjects(response.data);
      });
  }, []);

  return (
    <section className="cards-section">
      <div className="cards-container">
        {projects.map((item, index) => (
            <Project
              key={index}
              id={item.id}
              title={item.title}
              cover={item.cover}
            />
        ))}
      </div>
    </section>
  );
}
