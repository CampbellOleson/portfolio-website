import React from "react";
import TopPanel from "./TopPanel";
import CaseStudies from "./CaseStudies";
import AboutMeLink from "./AboutMeLink";
import ContactMeLink from "./ContactMeLink";
import Footer from "./Footer";
import Nav from "./Nav";
import "../stylesheets/main.css";

const MainPage = () => (
  <div id="main-container">
    <Nav />
    <TopPanel />
    <CaseStudies />
    <div id="aml-cml-wrapper">
      <AboutMeLink />
      <ContactMeLink />
    </div>
    <Footer />
  </div>
);

export default MainPage;
