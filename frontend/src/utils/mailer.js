const nodemailer = require("nodemailer");

class Mailer {
  constructor(props) {
    this.transporter = nodemailer.createTransport({
      port: 587,
      server: "mail.campbelloleson.dev",
      secure: false,
      auth: {
        user: "webmaster@campbelloleson.dev",
        password: "DBStiCASE700?"
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  send() {
    const mailOptions = {
      from: "Portfolio Contact <webmaster@campbelloleson.dev>",
      to: "campbellsoleson@gmail.com",
      subject: "Porfolio Contact Request",
      text: "That was easy!"
    };  

    this.transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  }
}

export default Mailer;
