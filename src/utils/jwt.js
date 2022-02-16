const jwt = require("jsonwebtoken");
const { Config } = require("../config/index");
const jwtKey = new Config().JWT_KEY();

module.exports = {
    sign: (data) => jwt.sign(data, jwtKey, { expiresIn: 200 * 2 * 12 * 3600 }),
    verify: (data) => jwt.verify(data, jwtKey)
};