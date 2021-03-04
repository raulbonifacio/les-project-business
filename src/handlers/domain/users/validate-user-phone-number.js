const validatePhoneNumber = require("../../validation/validate-phone-number");

function validateUserPhoneNumber() {
	return validatePhoneNumber({
		field: "phoneNumber",
		label: "número de telefone",
	});
}

module.exports = validateUserPhoneNumber;
