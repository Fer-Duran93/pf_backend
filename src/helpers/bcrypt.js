const bcrypt = require("bcryptjs");

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const checkPassword = async function (password, userPassword) {
  return await bcrypt.compare(password, userPassword);
};

module.exports = { encryptPassword, checkPassword };
