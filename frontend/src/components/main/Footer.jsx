import React from "react";
import "../../stylesheets/footer.css";

const Footer = () => {
  return (
    <div id="footer-wrapper">
      <p id="cr-text">© 2020 Campbell Oleson</p>
      <section>
        <div>
          <a href="https://github.com/CampbellOleson">
            <div id="git-bubble" className="contact-bubble" />
          </a>
          <a href="https://www.linkedin.com/in/campbell-oleson-5a41a2166/">
            <div id="linkedin-bubble" className="contact-bubble" />
          </a>
          <a href="https://angel.co/campbell-oleson">
            <div id="angel-bubble" className="contact-bubble" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
