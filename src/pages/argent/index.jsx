import React from "react";
import LayoutDefault from "../../layouts/default";
import projects from "../../../public/data/projects.json";
import Description from "../../components/description";
import Banner from "../../components/banner";
import src from "../../assets/mockup_devices.png";
import "../../index.css";
export default function Argent() {
  // Select the project with id "1"
  const projectId = "1";
  const project = projects.data.find((proj) => proj.id === projectId);

  // Check if the project exists
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <LayoutDefault>
      <main className="main-argent">
        <Banner src={src} />
        <Description
          alt={project.title}
          title={project.title}
          context={project.context}
          tags={project.tags}
        />
      </main>
    </LayoutDefault>
  );
}
