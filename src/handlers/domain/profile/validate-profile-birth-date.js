const validateDate = require("../../validation/validate-date");

function validateProfileBirthDate() {
	return validateDate({ field: "birthDate", label: "data de nascimento" });
}

module.exports = validateProfileBirthDate;
