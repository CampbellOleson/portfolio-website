import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/main.css";

const ContactMeLink = () => {
  return (
    <div id="contact-me-wrapper" className="link-box">
      <Link to="contact" className="selector-link">
        <div>
          <p>Convinced?</p>
          <span>Contact Me</span>
        </div>
      </Link>
    </div>
  );
};

export default ContactMeLink;
