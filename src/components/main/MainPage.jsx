import React from "react";
import TopPanel from "./TopPanel";
import CaseStudies from "./CaseStudies";
import About from "./About";
import Contact from "./ContactForm";
import "../../stylesheets/main.css";

const MainPage = () => (
  <div id="main-container">
    <TopPanel />
    <About />
    <CaseStudies />
    <Contact />
  </div>
);

export default MainPage;
