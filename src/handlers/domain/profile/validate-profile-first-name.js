
const validateString = require("../../validation/validate-string");

function validateProfileFirstName() {
	return validateString({
		field: "lastName",
		label: "sobrenome",
		filled: true,
	});
}

module.exports = validateProfileFirstName;
