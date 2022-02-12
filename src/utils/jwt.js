const jwt = require("jsonwebtoken");
const { Config } = require("../config/index");
const jwtKey = new Config().JWT_KEY();

class JWT {
  sign = (data) => jwt.sign(data, jwtKey);
  verify = (data) => jwt.verify(data, jwtKey);
}

module.exports = { JWT };