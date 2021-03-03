const validateString = require("../../validation/validate-string");

function validateUserAddress() { 
	return validateString({ field: "address", label: "logradouro" });
}

module.exports = validateUserAddress();
