import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function About({ text, children }) {
  return (
    <div className="daria">
      <div className="dots">
        <FontAwesomeIcon icon="fa-solid fa-circle" />
        <FontAwesomeIcon icon="fa-solid fa-circle" />
        <FontAwesomeIcon icon="fa-solid fa-circle" />
      </div>
      <div className="daria-text">{text}</div>
      {children}
    </div>
  );
}
