const validateString = require("../../validation/validate-string");

function validateUserAddressComplement() {
	return validateString({ field: "addressComplement", label: "complemento" });
}

module.exports = validateUserAddressComplement;
