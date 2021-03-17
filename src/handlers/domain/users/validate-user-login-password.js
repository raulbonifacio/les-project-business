const validatePassword = require("../../validation/validate-password");

function validateUserLoginPassword() {
	return validatePassword({
		field: "loginPassword",
		label: "senha",
	});
}

module.exports = validateUserLoginPassword;
