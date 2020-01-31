const express = require("express");
const bodyParser = require("body-parser");
const exhbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const server = express();

server.engine("handlebars", exhbs());
server.set("view engine", "handlebars");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.post("/send", (req, res) => {
  const body = req.body;

  const emailHTML = `
  <div>
    <h3>Email from <strong>${body.fname} ${body.lname}</strong></h3>
    <p><strong>Contact info:</strong></p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Phone:</strong> ${body.phone}</p>
    <p><strong>Message:</strong></p>
    <p>${body.message}</p>
  </div>
  `;

  let transporter = nodemailer.createTransport({
    host: "campbelloleson.dev",
    port: 465,
    secure: true,
    auth: {
      user: "notifications@campbelloleson.dev",
      pass: "_EahxVk(i%P*"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  transporter
    .sendMail({
      from: "Portfolio Website <notifications@campbelloleson.dev>",
      to: "campbellsoleson@gmail.com",
      subject: "Portfolio Visitor",
      text: req.body.message,
      html: emailHTML
    })
    .then(() => console.log("Email sent ;)"))
    .catch(e => {
      console.log(e);
    });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
