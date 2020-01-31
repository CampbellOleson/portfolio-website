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
      from: "Nodemailer <notifications@campbelloleson.dev>",
      to: 'gracemenani@gmail.com',
      subject: "Hello ✔",
      text: "Hi this is campbell, sending you a message via nodemailer",
      html: "<b>Hello world?</b>"
    })
    .then(() => console.log("Email sent ;)"))
    .catch(e => {
      console.log("\nERROR:\n");
      console.log(
        "================================================================\n"
      );
      console.log(e);
    });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
