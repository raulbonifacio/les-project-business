const validateString = require("../../validation/validate-string");

function validateUserAddressPublicArea() {
	return validateString({
		field: "addressPublicArea",
		label: "logradouro",
		filled: true,
	});
}

module.exports = validateUserAddressPublicArea;
