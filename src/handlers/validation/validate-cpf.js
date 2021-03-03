const validateString = require("./validate-string");

const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

function validateCPF({ field, label = field }) {
	return validateString(
		{ field, label, matches: CPF_REGEX },
		{ matches: label => `O campo ${label} não possui um formato de CPF válido.`, }
	);
}

module.exports = validateCPF;
