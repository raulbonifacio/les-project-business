const validateNumber = require("../../validation/validate-number");

function validateUserAddressNumber() {
	return validateNumber({
		field: "addressNumber",
		label: "número de endereço",
		mustBeAnInteger: true,
	});
}

module.exports = validateUserAddressNumber;
