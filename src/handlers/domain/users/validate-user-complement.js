const validateString = require("../../validation/validate-string");

function validateUserComplement() {
	return validateString({ field: "complement", label: "complemento" });
}

module.exports = validateUserComplement;
