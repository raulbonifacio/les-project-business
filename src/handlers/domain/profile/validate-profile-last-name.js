const validateString = require("../../validation/validate-string");

function validateProfileLastName() {
	return validateString({
		field: "lastName",
		label: "sobrenome",
		filled: true,
	});
}

module.exports = validateProfileLastName;
