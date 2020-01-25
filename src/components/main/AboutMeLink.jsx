import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/main.css";

const AboutMeLink = () => {
  return (
    <div id="about-me-wrapper" className="link-box">
      <Link to="/about" className="selector-link">
        <div>
          <p>Continue Learning?</p>
          <span>About Me</span>
        </div>
      </Link>
    </div>
  );
};

export default AboutMeLink;
