const validateCEP = require("../../validation/validate-cep");

function validateUserAddressPostalCode() {
	return validateCEP({ field: "addressPostalCode", label: "CEP" });
}

module.exports = validateUserAddressPostalCode;
