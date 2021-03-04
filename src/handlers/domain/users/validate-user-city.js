const validateString = require("../../validation/validate-string");

function validateUserCity() {
	return validateString({ field: "city", label: "cidade" });
}

module.exports = validateUserCity;
