import React from "react";

export default function Description({ src, alt, title, context, tags }) {
  return (
    <section className="projects-description-container">
      <div>
        <img src={src} alt={alt} />
      </div>
      <div>
        <h1 className="title">{title}</h1>
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
