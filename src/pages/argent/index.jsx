import React from "react";
import LayoutDefault from "../../layouts/default";
import projects from "../../../public/data/projects.json";
import Description from "../../components/description";
import "../../index.css";
export default function Argent() {

      // Select the project with id "1"
  const projectId = "1";
  const project = projects.data.find(proj => proj.id === projectId);

  // Check if the project exists
  if (!project) {
    return <div>Project not found</div>;
  }
    return (
       <LayoutDefault>
   
   <Description
        src={project.cover}
        alt={project.title}
        title={project.title}
        context={project.context}
        tags={project.tags}
      />

       </LayoutDefault>
    )
}