const validatePhoneNumber = require("../../validation/validate-phone-number");

function validateUserPhoneNumberNumber() {
	return validatePhoneNumber({
		field: "phoneNumberNumber",
		label: "número de telefone",
	});
}

module.exports = validateUserPhoneNumberNumber;
