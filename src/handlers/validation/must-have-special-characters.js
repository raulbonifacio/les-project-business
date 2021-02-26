const {
	containsSpecialCharacters,
} = require("../../services/stringValidationService");

const validateIfSent = require("./validate-if-sent");

function mustHaveSpecialCharacters({ field, label = field }) {
	return validateIfSent({
		field,
		message: `O campo ${label} precisa conter caracteres especiais.`,
		validator: containsSpecialCharacters,
	});
}

module.exports = mustHaveSpecialCharacters;
