import React from "react";
import ProfilePhoto from "../../assets/campbell.png";
import "../../stylesheets/top-panel.css";

const TopPanel = () => {
  const scrollToRef = id => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="top-panel-wrapper">
      <div className="vert-center">
        <section>
          <header className="tpt">Hello World!</header>
          <main className="tpt">
            I heard you're looking for a web developer.
          </main>
          <p className="tpt">
            If you're into responsive interfaces, modern design, and clean,
            modular code, then I'm your guy.
          </p>
        </section>
        <img id="profile-photo" src={ProfilePhoto} alt="" />
      </div>
      <button
        id="scroll-button"
        onClick={() => scrollToRef("case-studies-wrapper")}
      />
      <div className="downwards-arrow" />
    </div>
  );
};

export default TopPanel;
