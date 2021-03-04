const validateDate = require("../../validation/validate-date");

function validateUserBirthDate() {
	return validateDate({ field: "birthDate", label: "data de nascimento" });
}

module.exports = validateUserBirthDate;
