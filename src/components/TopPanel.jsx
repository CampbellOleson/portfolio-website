import React from "react";
import "../stylesheets/top-panel.css";

const TopPanel = () => {
  return (
    <div id="top-panel-wrapper">
      <section>
        <header className="tpt">About me</header>
        <main className="tpt">
          I am a full-stack web devloper based in Salt Lake City, Utah
        </main>
        <p className="tpt">
          Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae
          legendos at vix ad putent
        </p>
      </section>
      {/* <div id="profile-photo-hor-wrapper">
        <div id="profile-photo-vert-wrapper">
          <div id="profile-photo" />
        </div>
      </div> */}
    </div>
  );
};

export default TopPanel;
