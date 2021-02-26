const { isAnEmail } = require("../../services/stringValidationService");
const ValidateIfSent = require("./validate-if-sent");

class MustBeAnEmail extends ValidateIfSent {
	constructor({ field, label = field }) {
		super();
		this.field = field;
		this.message = `O campo ${label} precisa ser um e-mail válido.`;
		this.validator = isAnEmail;
	}
}

module.exports = mustBeAnEmail;
