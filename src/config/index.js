require("dotenv").config();

class Config {
  PORT() {
    return process.env.PORT;
  }

  JWT_KEY() {
    return process.env.JWT_KEY;
  }

  PG() {
    return {
      connectionString: process.env.URL,
    };
  }

  EMAIL() {
    return {
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    };
  }
}

module.exports = { Config };