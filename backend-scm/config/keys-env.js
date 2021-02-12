const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  secretOrKey: process.env.SECRET_OR_KEY,
  clientId:  process.env.GITHUB_CLIENT_ID,
  clientSecret:  process.env.GITHUB_CLIENT_SECRET
};
