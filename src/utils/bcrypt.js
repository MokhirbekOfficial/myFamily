const bcrypt = require("bcrypt");

class Bcrypt {
  async hashPassword(password) {
    try {
      const result = await bcrypt.hash(password, 10);
      return result;
    } catch (_) {}
  }

  async comparePassword(password, hash) {
    try {
      const result = await bcrypt.compare(password, hash);
      return result;
    } catch (_) {}
  }
}
module.exports = { Bcrypt };