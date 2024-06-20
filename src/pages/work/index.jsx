import React, { useState, useEffect } from "react";
import LayoutDefault from "../../layouts/default";
import { useParams, useNavigate } from "react-router-dom";
import Description from "../../components/description";
import Banner from "../../components/banner";

import src from "../../assets/mockup_devices.png";
import "../../index.css";

export default function Work() {
  const { id } = useParams(); // Obtient le paramètre d'URL "id"
  const navigate = useNavigate();

  const [project, setProject] = useState(null);


  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          const selectedProject = data.data.find((proj) => proj.id === id);
          if (selectedProject) {
            setProject(selectedProject);
          } else {
            navigate("/error"); // Redirige vers une page d'erreur si le projet n'est pas trouvé
          }
        }
      });
  }, [id, navigate]);


  if (!project) {
    return <div>Project not found</div>; // Message de fallback au cas où le projet serait null
  }

  return (
    <LayoutDefault>
      <main className="main-argent">
        <Banner src={src} />
        <Description
          alt={project.title}
          title={project.title}
          context={project.context}
          url={project.url}
          tags={project.tags}
        />
      </main>
    </LayoutDefault>
  );
}
