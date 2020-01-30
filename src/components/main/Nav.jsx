import React from "react";
import scrollToRef from "../../utils/scrollToRef";
import Resume from "../../assets/Resume.pdf";
import "../../stylesheets/nav.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      activeModal: false
    };
  }

  render() {
    return (
      <div>
        <button className="nav-button" onClick={this.toggleModal} />
        <div id="nav-modal" className="modal">
          <div>
            <ul>
              <Link to="/">
                <button
                  className="anchor-button"
                  onClick={() => {
                    scrollToRef("tp-wrapper");
                    this.toggleModal();
                  }}
                >
                  <li className="nav-link">Home</li>
                </button>
              </Link>
              <Link to="/">
                <button
                  className="anchor-button"
                  onClick={() => {
                    scrollToRef("am-wrapper");
                    this.toggleModal();
                  }}
                >
                  <li className="nav-link">About</li>
                </button>
              </Link>
              <Link to="/">
                <button
                  className="anchor-button"
                  onClick={() => {
                    scrollToRef("cs-header");
                    this.toggleModal();
                  }}
                >
                  <li className="nav-link">Projects</li>
                </button>
              </Link>
              <li className="nav-link">
                <a href={Resume} onClick={this.toggleModal}>
                  Resume
                </a>
              </li>
              <Link to="/">
                <button
                  className="anchor-button"
                  onClick={() => {
                    scrollToRef("cf-wrapper");
                    this.toggleModal();
                  }}
                >
                  <li className="nav-link">Contact</li>
                </button>
              </Link>
            </ul>
          </div>
        </div>
        <Link
          to="/"
          onClick={() => {
            scrollToRef("tp-wrapper");
          }}
        >
          <p className="floating-name">Campbell Oleson</p>
        </Link>
        <Link
          to="/"
          onClick={() => {
            scrollToRef("tp-wrapper");
          }}
        >
          <p className="floating-initials">C.O.</p>
        </Link>
      </div>
    );
  }

  toggleModal() {
    let modal = document.getElementById("nav-modal");
    let button = document.getElementsByClassName("nav-button")[0];
    this.setState({
      activeModal: !this.state.activeModal
    });

    if (this.state.activeModal) {
      modal.classList.remove("active-modal");
      modal.classList.add("inactive-modal");
      button.classList.remove("x-background");
    } else {
      modal.classList.add("active-modal");
      modal.classList.remove("inactive-modal");
      button.classList.add("x-background");
    }
  }
}

export default Nav;
