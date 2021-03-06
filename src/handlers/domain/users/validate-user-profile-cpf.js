const validateCPF = require("../../validation/validate-cpf");

function validateUserProfileCPF()  {
	return validateCPF({field: "profileCPF", label: "CPF" });
}
module.exports = validateUserProfileCPF;
