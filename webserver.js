const express = require("express");
const bodyParser = require("body-parser");
const exhbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const MAIL = require("./frontend/src/config/mail.js");
const server = express();

if (process.env.NODE_ENV === "production") {
  server.use(express.static("frontend/build"));
  server.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

server.engine("handlebars", exhbs());
server.set("view engine", "handlebars");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.post("/send", (req, res) => {
  const body = req.body;
  const company = body.company ? body.company : "an unspecified company";
  const info = {};
  const emailHTML = `
  <div>
    <h3><strong>${body.name} at ${company} is interested in you</strong></h3>
    <p><strong>Contact info:</strong></p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Phone:</strong> ${body.phone}</p>
    <p><strong>Message:</strong></p>
    <p>${body.message}</p>
  </div>
  `;

  let transporter = nodemailer.createTransport({
    host: MAIL.host,
    port: MAIL.port,
    secure: true,
    auth: {
      user: MAIL.user,
      pass: MAIL.pass
    },
    tls: {
      rejectUnauthorized: false
    },
    debug: true,
    logger: true
  });

  console.log("sending ...");

  transporter
    .sendMail({
      from: `Portfolio Visitor <${MAIL.user}>`,
      to: "campbellsoleson@gmail.com",
      subject: "Somebody's Interested in You",
      text: req.body.message,
      html: emailHTML
    })
    .then(() => {
      console.log("Email sent ;)");
      info["mailSent"] = true;
      info["error"] = null;
      res.send({ info });
    })
    .catch(e => {
      console.log(e);
      info["mailSent"] = false;
      res.send({ info });
    });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
