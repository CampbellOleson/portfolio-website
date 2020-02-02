const express = require("express");
const bodyParser = require("body-parser");
const exhbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const server = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
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
    .then(() => {
      console.log("Email sent ;)");
      info["mailSent"] = true;
      info["error"] = "";
      res.send({ info });
    })
    .catch(e => {
      info["mailSent"] = false;
      info["error"] = e;
      res.send({ info });
    });
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on port ${port}`));
