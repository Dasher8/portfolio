import React from "react";
import { Link } from "react-router-dom";


export default function Project({ id, title, cover }) {
  return (
    <Link to={`/project/${id}`} className="card" id={id}>
      <img src={cover} alt={title} className="cover" />
      <span className="title">{title}</span>
    </Link>
  );
}
