import React from "react";
import "../../stylesheets/contact.css";

const Contact = () => {
  return (
    <div id="cf-wrapper">
      <header className="cf-header hor-center">Get In Touch</header>
      <form method="post" name="contact_form" action="/email-form.php">
        Your Name:
        <input type="text" name="name" />
        Email Address:
        <input type="text" name="email" />
        Message:
        <textarea name="message"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
