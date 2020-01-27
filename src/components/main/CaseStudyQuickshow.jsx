import React from "react";
import { Link } from "react-router-dom";

class CaseStudyQuickshow extends React.Component {
  render() {
    return (
      <Link to={`/case-studies/${this.props.url}`} className="quickshow-item">
        <div className={`qs-bg ${this.props.bg}`} />
        <div className="qs-info">
          <header>{this.props.name}</header>
          <article>{this.props.summary}</article>
          <span>{this.props.tech}</span>
          <div className="vert-bottom">
            <div>
              <div>See Project</div>
              <div id="curvedarrow" />
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default CaseStudyQuickshow;
