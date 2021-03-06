const validateString = require("../../validation/validate-string");

function validateUserAddressCity() {
	return validateString({ field: "addressCity", label: "cidade", filled: true });
}

module.exports = validateUserAddressCity;
