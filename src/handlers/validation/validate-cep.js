const validateString = require("./validate-string");

const CEP_REGEX = /^\d{5}\-\d{3}$/;

function validateCEP({ field, label = field }) {
	return validateString(
		{ field, label, matches: CEP_REGEX },
		{ matches: label => `O campo ${label} não é um CEP válido.` }
	);
}

module.exports = validateCEP;
