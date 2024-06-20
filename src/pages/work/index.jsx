import React, { useState, useEffect } from "react";
import LayoutDefault from "../../layouts/default";
import { useParams, useNavigate } from "react-router-dom";
import Description from "../../components/description";
import Banner from "../../components/banner";

import "../../index.css";

import projectImage1 from "../../assets/mockup_devices.png";
import projectImage2 from "../../assets/ohmyfoodt_mockup_devices.png";
import projectImage3 from "../../assets/argent_mockup_devices.png";

export default function Work() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          const selectedProject = data.data.find((proj) => proj.id === id);
          if (selectedProject) {
            let cover;
            switch (selectedProject.id) {
              case "1":
                cover = projectImage1;
                break;
              case "2":
                cover = projectImage2;
                break;
              case "3":
                cover = projectImage3;
                break;
              default:
                cover = null;
            }
            setProject({ ...selectedProject, cover });
          } else {
            navigate("/error");
          }
        }
      });
  }, [id, navigate]);

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <LayoutDefault>
      <main className="main-argent">
        <Banner src={project.cover} />
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
