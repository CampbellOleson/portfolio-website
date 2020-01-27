import React from "react";
import CaseStudyQuickshow from "./CaseStudyQuickshow";
import "../../stylesheets/case-studies.css";
import "../../stylesheets/quickshow.css";

const CaseStudies = () => {
  return (
    <div id="case-studies-wrapper">
      <div>
        <p>My Recent Work</p>
      </div>
      <section>
        <ul>
          <li>
            <CaseStudyQuickshow
              name="RipCamp"
              tech="TECHNOLOGIES: NodeJS, ReactJS, Redux, MongoDB, AWS, Google Maps API, Open Weather API"
              summary="Map-based surf-spot locator"
              url="ripcamp"
              bg="rc-bg"
            />
          </li>
          <li>
            <CaseStudyQuickshow
              name="Tax Prep"
              tech="ROLE: Wrote logic to autocomplete tax forms, diagnosed errors"
              summary="Workflow management software for tax practitioners."
              url="tax-prep"
              bg="ct-bg"
            />
          </li>
          <li>
            <CaseStudyQuickshow
              name="Fishhook"
              tech="TECHNOLOGIES: Ruby on Rails, PostgreSQL, ReactJS, Redux"
              summary="Fishing themed social media platform"
              url="fishhook"
              bg="fh-bg"
            />
          </li>
          <li>
            <CaseStudyQuickshow
              name="AmpCamp"
              tech="TECHNOLOGIES: NodeJS, ReactJS, Apollo GraphQL, MongoDB, AWS, Docker"
              summary="Music streaming service"
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
