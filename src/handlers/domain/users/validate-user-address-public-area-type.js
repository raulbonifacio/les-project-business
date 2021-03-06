const validateString = require("../../validation/validate-string");

function validateUserAddressPublicAreaType() {
	return validateString({
		field: "addressPublicAreaType",
		label: "tipo de logradouro",
		filled: true,
	});
}

module.exports = validateUserAddressPublicAreaType;
