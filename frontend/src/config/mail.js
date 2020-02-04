if (process.env.NODE_ENV === "production") {
  module.exports = require("./mail_prod");
} else {
  module.exports = require("./mail_dev");
}
