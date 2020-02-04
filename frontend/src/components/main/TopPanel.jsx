import React from "react";
import ProfilePhoto from "../../assets/campbell.png";
import scrollToRef from "../../utils/scrollToRef";
import "../../stylesheets/top-panel.css";

const TopPanel = () => {
  return (
    <div className="tp">
      <div id="tp-wrapper">
          <div className="tp-content">
            <img id="profile-photo" src={ProfilePhoto} alt="" />
            <section className="tp-text">
              <header className="tpt">Hello World!</header>
              <main className="tpt">
                Looking for a web developer?
              </main>
              <p className="tpt">
                If you're into responsive interfaces, modern design, and clean,
                modular code, then I'm your guy.
              </p>
            </section>
          </div>
        <button
          id="scroll-arrow"
          className="is-absolute"
          onClick={() => scrollToRef("am-wrapper")}
        />
      </div>
      <div>
        <div className="tp-buffer-wrapper">
          <div className="vert-bottom">
            <div className="tp-arrow left" />
          </div>
          <div className="vert-bottom">
            <div className="tp-arrow right" />
          </div>
        </div>
      </div>
      <div className="tp-buffer" />
    </div>
  );
};

export default TopPanel;
