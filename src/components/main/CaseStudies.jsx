import React from "react";
import CaseStudyQuickshow from "./CaseStudyQuickshow";
import { Link } from "react-router-dom";
import "../../stylesheets/case-studies.css";

const CaseStudies = () => {
  return (
    <div id="case-studies-wrapper">
      <div>
        <p>Case Studies</p>
      </div>
      <section>
        <ul>
          <Link to="/case-studies/canopy">
            <li className="quickshow-item">
              <CaseStudyQuickshow name={"Canopy"} />
            </li>
          </Link>
          <Link to="/case-studies/fishhook">
            <li className="quickshow-item">
              <CaseStudyQuickshow name="Fishhook" />
            </li>
          </Link>
          <Link to="/case-studies/ampcamp">
            <li className="quickshow-item">
              <CaseStudyQuickshow name="AmpCamp" />
            </li>
          </Link>
          <Link to="/case-studies/ripcamp">
            <li className="quickshow-item">
              <CaseStudyQuickshow name="RipCamp" />
            </li>
          </Link>
        </ul>
      </section>
    </div>
  );
};

export default CaseStudies;
