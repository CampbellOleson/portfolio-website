import React from "react";
import "../../stylesheets/top-panel.css";

const TopPanel = () => {
  return (
    <div id="top-panel-wrapper">
      <div className="vert-center">
        <section>
          <header className="tpt">Hello!</header>
          <main className="tpt">
            I am a full-stack web devloper based in Salt Lake City, Utah
          </main>
          <p className="tpt">
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent
          </p>
        </section>
      </div>
    </div>
  );
};

export default TopPanel;
