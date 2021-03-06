const validateSex = require("../../validation/validate-sex");

function validateUserProfileSex() {
	return validateSex({ field: "profileSex", label: "sexo" });
}

module.exports = validateUserProfileSex;
