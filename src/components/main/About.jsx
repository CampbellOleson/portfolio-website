import React from "react";
import scrollToRef from "../../utils/scrollToRef";
import "../../stylesheets/about.css";
import "../../stylesheets/skills.css";

const About = () => {
  return (
    <div>
      <div id="am-wrapper">
        <div className="has-borders">
          <div />
          <header className="am-header">My Story</header>
          <div />
        </div>
        <article className="am-text">
          Hi, I’m Campbell, a software developer from Salt Lake City, Utah. I
          express my unequivocal love for building things by creating websites
          that are responsive, dynamic, and user friendly. My current toolset
          includes React, Redux, Apollo GraphQL, Ruby on Rails, NodeJS,
          PostgreSQL, and MongoDB.
        </article>
        <div className="am-block-wrapper">
          <div className="hor-center">
            <div className="am-block">
              <article>
                My career began in the Business Scholars program at the
                University of Utah. There, I was connected with an internship at
                Canopy, Inc. where I worked for four months and discovered my
                passion for software development.
              </article>
              <div className="u-bg" />
            </div>
          </div>
          <div className="hor-center">
            <div className="am-block">
              <article>
                In searching for the fastest way to learn web development I came
                upon App Academy: a demanding, 6-month immersive bootcamp with a
                3% acceptance rate. I was accepted in, and graduated from App
                Academy in October of 2019.
              </article>
              <div className="a-bg" />
            </div>
          </div>
          <div className="hor-center">
            <div className="am-block">
              <article>
                I have since been working on solo projects and adding to my
                toolset by taking courses on Pluralsight. I am determined to
                always keep learning, and find an opportunity to prove myself in
                the industry. I am a junior, but I am hungry, and I'm excited to
                see where I go next!
              </article>
              <div className="q-bg" />
            </div>
          </div>
        </div>

        <div className="has-borders">
          <div />
          <header className="am-header">My Skills</header>
          <div />
        </div>
        <article className="am-text">
          My current toolset includes React, Redux, Apollo GraphQL, Ruby on
          Rails, NodeJS, PostgreSQL, and MongoDB. My current toolset includes
          React, Redux, Apollo GraphQL, Ruby on Rails, NodeJS, PostgreSQL, and
          MongoDB.
        </article>

        <div className="skills-container">
          <div className="skills-row">
            <div id="img-ruby" className="skill-bubble" />
            <div id="img-rails" className="skill-bubble" />
            <div id="img-js" className="skill-bubble" />
            <div id="img-node" className="skill-bubble" />
            <div id="img-react" className="skill-bubble" />
            <div id="img-redux" className="skill-bubble" />
            <div id="img-apollo" className="skill-bubble" />
          </div>
          <div className="skills-row">
            <div id="img-docker" className="skill-bubble" />
            <div id="img-git" className="skill-bubble" />
            <div id="img-post" className="skill-bubble" />
            <div id="img-aws" className="skill-bubble" />
            <div id="img-mongo" className="skill-bubble" />
          </div>
        </div>
        <article className="am-text">
          My current toolset includes React, Redux, Apollo GraphQL, Ruby on
          Rails, NodeJS, PostgreSQL, and MongoDB. My current toolset includes
          React, Redux, Apollo GraphQL, Ruby on Rails, NodeJS, PostgreSQL, and
          MongoDB.
        </article>
        <button
          id="scroll-arrow"
          className="is-relative has-margin"
          onClick={() => scrollToRef("cs-header")}
        />
      </div>
      <div className="am-buffer-wrapper">
        <div id="am-arrow" />
      </div>
    </div>
  );
};

export default About;
