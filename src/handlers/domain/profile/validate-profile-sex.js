const validateSex = require("../../validation/validate-sex");

function validateProfileSex() {
	return validateSex({ field: "sex", label: "sexo" });
}

module.exports = validateProfileSex;
