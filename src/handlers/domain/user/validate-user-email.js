const validateEmail = require("../../validation/validate-email");

function validateUserLoginEmail() {
	return validateEmail({ field: "userLoginEmail", label: "email" });
}

module.exports = validateUserLoginEmail;
