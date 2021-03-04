const validateSex = require("../../validation/validate-sex");

function validateUserSex() {
	return validateSex({ field: "sex", label: "sexo" });
}

module.exports = validateUserSex;
