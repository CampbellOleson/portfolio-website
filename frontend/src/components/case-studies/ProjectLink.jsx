import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/case-studies/more-projects.css";

const ProjectLink = props => {
  return (
    <div className="mp-link">
      <Link to={props.URL}>
        <img src={props.imgURL} alt={props.name} className="mp-img" />
        <div className="mp-info">
          <div>
            <header>{props.name}</header>
            <p>{props.desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectLink;
