const {
	containsDifferentCases,
} = require("../../services/stringValidationService");

const validateIfSent = require("./validate-if-sent");

function mustHaveDifferentCases({ field, label = field }) {
	return validateIfSent({
		field,
		message: `O campo ${label} precisa conter letras maiúsculas e minúsculas.`,
		validator: containsDifferentCases,
	});
}

module.exports = mustHaveDifferentCases;
