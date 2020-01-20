import React from "react";
import "../stylesheets/case-studies.css";
import CaseStudyQuickshow from "./CaseStudyQuickshow";

const CaseStudies = () => {
  return (
    <div id="case-studies-wrapper">
      <div>
        <p>Case Studies</p>
      </div>
      <section>
        <ul>
          <li className="quickshow-item">
            <CaseStudyQuickshow />
          </li>
          <li className="quickshow-item">
            <CaseStudyQuickshow />
          </li>
          <li className="quickshow-item">
            <CaseStudyQuickshow />
          </li>
          <li className="quickshow-item">
            <CaseStudyQuickshow />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CaseStudies;
