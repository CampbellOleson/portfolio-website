import React from "react";
import ProjectLink from "./ProjectLink";
import fhPhoto from "../../assets/screenshots/fishhook/fh-requests.png";
import acPhoto from "../../assets/screenshots/ampcamp/ac-home.png";
import rcPhoto from "../../assets/screenshots/ripcamp/rc-home.png";
import tpPhoto from "../../assets/screenshots/canopy/ct-clientsurvey.png";
import "../../stylesheets/case-studies/more-projects.css";

const MoreProjects = props => {
  const pLinks = {
    ac: (
      <ProjectLink
        URL="/case-studies/ampcamp"
        name="AmpCamp"
        imgURL={acPhoto}
        desc="Music Sharing Site"
      />
    ),
    fh: (
      <ProjectLink
        URL="/case-studies/fishhook"
        name="Fishhook"
        imgURL={fhPhoto}
        desc="Social Media for Fishing Enthusiasts"
      />
    ),
    rc: (
      <ProjectLink
        URL="/case-studies/ripcamp"
        name="RipCamp"
        imgURL={rcPhoto}
        desc="Surf Spot Locator"
      />
    ),
    tp: (
      <ProjectLink
        URL="/case-studies/tax-prep"
        name="Tax Prep"
        imgURL={tpPhoto}
        desc="Workflow Management for Tax Practitioners"
      />
    )
  };

  const keys = Object.keys(pLinks);
  keys.splice(keys.indexOf(props.exclude), 1);

  return (
    <div className="mp-wrapper">
      <div>
        <header>More Projects</header>
      </div>
      <section>
        <ul>
          {keys.map(key => {
            return (
              <li className="mp-item" key={key}>
                {pLinks[key]}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default MoreProjects;
