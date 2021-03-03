const validatePhoneNumber = require("../../validation/validate-phone-number");

function validateUserPhoneNumber() {
	return validatePhoneNumber({
		field: "userPhoneNumber",
		label: "número de telefone",
	});
}

module.exports = validateUserPhoneNumber;
