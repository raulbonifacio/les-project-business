const validateDate = require("../../validation/validate-date");

function validateUserProfileBirthDate() {
	return validateDate({ field: "profileBirthDate", label: "data de nascimento" });
}

module.exports = validateUserProfileBirthDate;
