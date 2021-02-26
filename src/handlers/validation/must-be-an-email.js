const { isAnEmail } = require("../../services/stringValidationService");
const validateIfSent = require("./validate-if-sent");

function mustBeAnEmail({ field, label = field }) {
	return validateIfSent({
		field,
		message: `O campo ${label} precisa ser um e-mail válido.`,
		validator: isAnEmail,
	});
}

module.exports = mustBeAnEmail;
