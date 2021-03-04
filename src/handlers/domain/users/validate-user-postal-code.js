const validateCEP = require("../../validation/validate-cep");

function validateUserPostalCode() {
	return validateCEP({ field: "postalCode", label: "CEP" });
}

module.exports = validateUserPostalCode;
