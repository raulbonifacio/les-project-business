const validateEmail = require("../../validation/validate-email");

function validateUserLoginEmail() {
	return validateEmail({ field: "email", label: "e-mail" });
}

module.exports = validateUserLoginEmail;
