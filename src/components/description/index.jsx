import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Description({ src, alt, title, context, tags }) {
  return (
    <section className="projects-description-container">
      <div className="projects-description-img-container">
        <img src={src} alt={alt} className="projects-description-img" />
      </div>
      <div className="about-project">
        <Link to="https://kasa-iota-flame.vercel.app" className="title-about-project-link">
        <span className="title-about-project">{title}<FontAwesomeIcon icon="fa-solid fa-link" className="fa-link"/></span>
        </Link>
        <p className="context">{context}</p>
        <div className="tags-container">
          <ul className="tags-list">
            {tags.map((tag, index) => (
              <li className="tag" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
