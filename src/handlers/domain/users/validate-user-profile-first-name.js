const validateString = require("../../validation/validate-string");

function validateUserProfileFirstName() {
	return validateString({
		field: "profileFirstName",
		label: "nome",
		filled: true,
	});
}

module.exports = validateUserProfileFirstName;
