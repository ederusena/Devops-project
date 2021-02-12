const dotenv = require("dotenv");
dotenv.config();

const ambiente = process.env.NODE_ENV || "Developing";
const ENV = ["production", "staging"];

if (ENV.includes(ambiente)) {
  module.exports = require("./keys-env");
} else {
  module.exports = require("./keys-dev");
}