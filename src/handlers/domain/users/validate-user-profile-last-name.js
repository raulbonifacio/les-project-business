const validateString = require("../../validation/validate-string");

function validateUserProfileLastName() {
	return validateString({
		field: "profileLastName",
		label: "sobrenome",
		filled: true,
	});
}

module.exports = validateUserProfileLastName;
