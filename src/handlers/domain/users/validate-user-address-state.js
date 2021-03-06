const validateStateInitial = require("../../validation/validate-state-initial");

function validateUserAddressState() {
	return validateStateInitial({ field: "addressState", label: "estado" });
}

module.exports = validateUserAddressState;
