import React from "react";

class CaseStudyQuickshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
      photoURL: ""
    };
  }

  render() {
    return (
      <div className="quickshow-wrapper">
        <p>Example Case Study</p>
      </div>
    );
  }
}

export default CaseStudyQuickshow;
