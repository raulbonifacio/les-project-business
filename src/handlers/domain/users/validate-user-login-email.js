const validateEmail = require("../../validation/validate-email");

function validateUserLoginEmail() {
	return validateEmail({ field: "loginEmail", label: "e-mail" });
}

module.exports = validateUserLoginEmail;
