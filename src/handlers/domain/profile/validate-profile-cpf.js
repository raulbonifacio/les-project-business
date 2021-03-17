const validateCPF = require("../../validation/validate-cpf");

function validateProfileCPF() {
	return validateCPF({ field: "cpf", label: "CPF" });
}

module.exports = validateProfileCPF;
