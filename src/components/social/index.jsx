import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialLink({ url, icon, ariaLabel }) {
  return (
    <Link to={url} aria-label={ariaLabel}>
      <FontAwesomeIcon icon={icon} className="social-icon" />
    </Link>
  );
}

export default SocialLink;
