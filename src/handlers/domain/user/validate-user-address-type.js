const validateString = require("../../validation/validate-string");

function validateUserAddressType() {
	return validateString({ field: "addressType", label: "tipo de logradouro" });
}

module.exports = validateUserAddressType;
