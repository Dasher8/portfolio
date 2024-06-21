import React from "react";
import SocialLink from "../social";
import iconMap from "../../iconImports";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socials" id="contact">
        <SocialLink
          url="https://github.com/Dasher8"
          icon={iconMap.faGithub}
          ariaLabel="GitHub Profile"
        />
        <SocialLink
          url="https://www.behance.net/dariatopor"
          icon={iconMap.faSquareBehance}
          ariaLabel="Behance Profile"
        />
        <SocialLink
          url="https://www.linkedin.com/in/dariatopor/"
          icon={iconMap.faLinkedin}
          ariaLabel="Linkedin Profile"
        />
      </div>
    </div>
  );
}
