import React from "react";
import CaseStudyQuickshow from "./CaseStudyQuickshow";
import "../../stylesheets/case-studies.css";
import "../../stylesheets/quickshow.css";

const CaseStudies = () => {
  return (
    <div id="case-studies-wrapper">
      <div>
        <p>Case Studies</p>
      </div>
      <section>
        <ul>
          <li>
            <CaseStudyQuickshow
              name="RipCamp"
              desc="Full-stack, Responsive UI"
              url="ripcamp"
              bg="rc-bg"
            />
          </li>
          <li>
            <CaseStudyQuickshow
              name="Tax Prep"
              desc="Canopy, Inc. QA"
              url="tax-prep"
              bg="ct-bg"
            />
          </li>
          <li>
            <CaseStudyQuickshow
              name="Fishhook"
              desc="Full-stack, Relational DB"
              url="fishhook"
              bg="fh-bg"
            />
          </li>
          <li>
            <CaseStudyQuickshow
              name="AmpCamp"
              desc="Full-stack, AWS S3"
              url="ampcamp"
              bg="ac-bg"
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CaseStudies;
