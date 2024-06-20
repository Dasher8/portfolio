import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function About({ text }) {
  return (
    <div className="daria">
      <div className="dots">
        <FontAwesomeIcon icon="fa-solid fa-circle" className="fa-circle" />
        <FontAwesomeIcon icon="fa-solid fa-circle" />
        <FontAwesomeIcon icon="fa-solid fa-circle" />
      </div>
      <div className="daria2">
      <p className="daria-text">
        {text}
      </p>
      </div>
    </div>
  );
}
