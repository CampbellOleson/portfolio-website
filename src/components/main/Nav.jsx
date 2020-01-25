import React from "react";
import Resume from "../../assets/Resume.pdf";
import { Link } from "react-router-dom";
import "../../stylesheets/nav.css";

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
              <li className="nav-link">
                <Link to="/" onClick={this.toggleModal}>
                  Home
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/about" onClick={this.toggleModal}>
                  About
                </Link>
              </li>
              <li className="nav-link">
                <a href={Resume} onClick={this.toggleModal}>
                  Resume
                </a>
              </li>
              <li className="nav-link">
                <Link to="/contact" onClick={this.toggleModal}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link to="/">
          <p className="floating-name">Campbell Oleson</p>
        </Link>
        <Link to="/">
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
