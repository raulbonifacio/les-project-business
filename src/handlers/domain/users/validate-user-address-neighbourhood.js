const validateString = require("../../validation/validate-string");

function validateUserAddressNeighbourhood() { 
	return validateString({ field: "addressNeighbourhood", label: "bairro", filled: true });
}

module.exports = validateUserAddressNeighbourhood;
