import React from "react";
import scrollToRef from "../../utils/scrollToRef";
import "../../stylesheets/about.css";
import "../../stylesheets/skills.css";

const About = () => {
  return (
    <div>
      <div id="am-wrapper">
        <div className="border-container">
          <div className="htm" />
          <header className="am-header">About Me</header>
          <div className="htm" />
        </div>
        <article className="am-text hbm">
          Hi, I’m Campbell, a full-stack web developer from Salt Lake City,
          Utah. I express my unequivocal love for building things by creating
          websites that are intuitive, dynamic, and responsive.
        </article>
        <div className="am-block-wrapper hbm">
          <div className="hor-center">
            <div className="am-block">
              <article>
                I began my career at the University of Utah. I was an
                enthusiastic student, and I was part of the honors-level
                Business Scholars program, but I was ultimately unsatisfied with
                the pace of business school. While studying, I got an internship
                doing product and QA work at Canopy, Inc. where I discovered my
                passion for software development.
              </article>
              <div className="am-bg u-bg" />
            </div>
          </div>
          <div className="hor-center">
            <div className="am-block">
              <article>
                Determined to delve deeper into software development, I found
                App Academy: a highly-rated web development bootcamp with a 3%
                acceptance rate. After an immersive, 6-month course filled with
                group projects and hands-on practice, I graduated with a
                versatile skill set in full-stack web development.
              </article>
              <div className="am-bg a-bg" />
            </div>
          </div>
          <div className="hor-center">
            <div className="am-block">
              <article>
                Since graduating from App Academy, I have been refining my
                skills by building my own websites, and adding to my toolset by
                taking courses on Pluralsight. I am determined to keep learning
                and I am eager for an opportunity to prove myself in the tech
                industry. I am excited to see where my endeavors will take me
                next!
              </article>
              <div className="am-bg q-bg" />
            </div>
          </div>
        </div>
        <div className="border-container">
          <div className="htm" />
          <header className="am-header">My Skills</header>
          <div className="htm" />
        </div>
        <article className="am-text">
          My current toolset includes Ruby on Rails, NodeJS, PostgreSQL,
          ReactJS, Redux, Apollo GraphQL, and MongoDB. I have integrated
          external APIs into my projects, including Open Weather API and Google
          Maps API. I also have experience with leveraging AWS S3 Bucket for
          uploading and hosting photos and audio files.
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
          I have organized responsibilities on group projects using Trello. I
          use Git for version control on all of my work. I am well accustomed to
          Agile/Scrum workplace environments from my previous work experience.
        </article>
        <article className="am-text hstm">
          Recently, I have been educating myself on Python, Java, networking,
          and application security. I have a strong fundamental knowledge of
          networking and security protocols such as HTTP, TCP, TLS, SSL, etc. I
          continue learning skills as a way to indulge my endless curiosity, and
          I'm confident in my ability to quickly get up to speed with new
          technologies.
        </article>
        <button
          id="scroll-arrow"
          className="is-relative htm hbm"
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
