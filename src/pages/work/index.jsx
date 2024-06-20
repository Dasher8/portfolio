import React, { useState, useEffect } from "react";
import LayoutDefault from "../../layouts/default";
import { useParams, useNavigate } from "react-router-dom";
import Description from "../../components/description";
import Banner from "../../components/banner";
import Loader from "../../components/loader";


export default function Work() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Start loading
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          const selectedProject = data.data.find((proj) => proj.id === id);
          if (selectedProject) {
            setProject(selectedProject);
          } else {
            navigate("/error"); // Navigate to error page if project is not found
          }
        }
        setIsLoading(false); // Finish loading
      });
  }, [id, navigate]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <LayoutDefault>
      <main className="main-argent">
        <Banner src={project.image} />
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
