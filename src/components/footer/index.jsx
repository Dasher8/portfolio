import React from "react";
import SocialLink from "../social";
import {
  faGithub,
  faSquareBehance,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socials" id="contact">
        <SocialLink
          url="https://github.com/Dasher8"
          icon={faGithub}
          ariaLabel="GitHub Profile"
        />
        <SocialLink
          url="https://www.behance.net/dariatopor"
          icon={faSquareBehance}
          ariaLabel="Behance Profile"
        />
        <SocialLink
          url="https://www.linkedin.com/in/dariatopor/"
          icon={faLinkedin}
          ariaLabel="Linkedin Profile"
        />
      </div>
    </div>
  );
}
