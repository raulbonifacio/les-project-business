const validateString = require("./validate-string");

const PHONE_REGEX = /^\(\d{2}\)\s+\d{4,5}\-\d{4}$/;

function validatePhoneNumber({ field, label = field }) {
	return validateString(
		{ field, label, matches: PHONE_REGEX },
		{ matches: label => `O campo ${label} não possui um formato de telefone válido.`, }
	);
}

module.exports = validatePhoneNumber;
