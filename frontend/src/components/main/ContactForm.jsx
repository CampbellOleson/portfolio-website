import React from "react";
import axios from "axios";
import validateFormInput from "../../utils/validations";
import "../../stylesheets/contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.API_PATH = "https://campbelloleson.herokuapp.com/send";
    this.state = {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      mailSent: false,
      sending: false,
      nameError: null,
      contactError: null
    };
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const validation = validateFormInput(this.state);
    if (validation.isValid) {
      this.setState({ sending: true });
      axios({
        method: "post",
        url: `${this.API_PATH}`,
        headers: { "content-type": "application/json" },
        data: this.state
      })
        .then(res => {
          this.setState({
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
            nameError: null,
            contactError: null,
            sending: false,
            mailSent: res.data.info.mailSent
          });
        })
        .catch(e => this.setState({ error: e.message }));
    } else {
      this.setState({
        nameError: validation.name,
        contactError: validation.contact
      });
    }
  }

  submitButton() {
    return this.state.sending ? (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : this.state.mailSent ? (
      <div className="success-message">
        <div>Thanks for reaching out!</div>
        <p>✓</p>
      </div>
    ) : (
      <input
        className="submit-button"
        type="submit"
        value="Submit"
        onClick={e => this.handleFormSubmit(e)}
      />
    );
  }

  nameError() {
    return <p className="error">{this.state.nameError}</p>;
  }

  contactError() {
    return <p className="error">{this.state.contactError}</p>;
  }

  render() {
    return (
      <div id="cf-wrapper">
        <div className="cf-bg" />
        <div className="bg-cover">
          <div className="form-wrapper">
            <header className="cf-header hor-center">Get In Touch</header>
            {this.nameError()}
            <form>
              <input
                className="field"
                value={this.state.name}
                type="text"
                id="name"
                name="name"
                placeholder="Full name"
                onChange={e => this.setState({ name: e.target.value })}
              />
              <input
                className="field"
                value={this.state.company}
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                onChange={e => this.setState({ company: e.target.value })}
              />
              {this.contactError()}
              <input
                value={this.state.email}
                className="field"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={e => this.setState({ email: e.target.value })}
              />
              <input
                className="field"
                value={this.state.phone}
                type="phone"
                id="phone"
                name="phone"
                placeholder="Your phone number"
                onChange={e => this.setState({ phone: e.target.value })}
              />
              <textarea
                value={this.state.message}
                className="field"
                id="message"
                name="message"
                placeholder="Write something.."
                onChange={e => this.setState({ message: e.target.value })}
              ></textarea>
              <div className="cf-bottom-block hor-center">
                {this.submitButton()}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
