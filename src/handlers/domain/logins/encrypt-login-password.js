const bcryptIt = require("../../parsing/bcrypt-it");

function encryptLoginPassword() {
	return bcryptIt({field: "password"});
}

module.exports = encryptLoginPassword;
