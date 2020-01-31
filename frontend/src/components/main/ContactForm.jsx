import React from "react";
import axios from "axios";
import "../../stylesheets/contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.API_PATH = "http://localhost:3000/send";
    this.state = {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      message: "",
      mailSent: false,
      error: null
    };
  }

  handleFormSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      url: `${this.API_PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(response => {
        console.log(response);
        this.setState({ mailSent: response.data.sent });
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    return (
      <div id="cf-wrapper">
        <header className="cf-header hor-center">Get In Touch</header>
        <div>
          <form action="/action_page.php">
            <label>First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your first name"
              onChange={e => this.setState({ fname: e.target.value })}
            />
            <label>Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name"
              onChange={e => this.setState({ lname: e.target.value })}
            />
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <label>Phone</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Your phone number"
              onChange={e => this.setState({ phone: e.target.value })}
            />
            <label>Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              onChange={e => this.setState({ message: e.target.value })}
            ></textarea>
            <input
              type="submit"
              value="Submit"
              onClick={e => this.handleFormSubmit(e)}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
