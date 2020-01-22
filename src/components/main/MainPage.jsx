import React from "react";
import TopPanel from "./TopPanel";
import CaseStudies from "./CaseStudies";
import AboutMeLink from "./AboutMeLink";
import ContactMeLink from "./ContactMeLink";
import Footer from "./Footer";
import "../../stylesheets/main.css";

const MainPage = () => (
  <div id="main-container">
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
