import React from "react";
import { Link } from "react-router-dom";

class CaseStudyQuickshow extends React.Component {
  render() {
    return (
      <Link
        to={`/case-studies/${this.props.url}`}
        className={`quickshow-item ${this.props.bg}`}
      >
        <div className="quickshow-wrapper">
          <div className="qs-info">
            <div className="vert-center">
              <p>{this.props.name}</p>
              <span>{this.props.desc}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default CaseStudyQuickshow;
