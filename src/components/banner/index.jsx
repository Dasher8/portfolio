import React from "react";
export default function Banner( {src} ) {
  return (
    <div className="banner">
      <div className="img-container">
        <img src={src} className="banner-img" alt="Banner"></img>
      </div>
    </div>
  );
}
