const validateString = require("./validate-string");

const SUPER_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail({ field, label = field }) {
	return validateString(
		{ field, label, matches: SUPER_EMAIL_REGEX },
		{ matches: label => `O campo ${label} não possui um formato de e-mail válido.`}
	)
}

module.exports = validateEmail;
