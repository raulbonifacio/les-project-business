const {
	containsDifferentCases,
} = require("../../services/stringValidationService");

const ValidateIfSent = require("./validate-if-sent");

class MustHaveDifferentCases extends ValidateIfSent {
	constructor(field, label = field) {
		super()
		this.field = field
		this.message = `O campo ${label} precisa conter letras maiúsculas e minúsculas.`;
		this.validator = containsDifferentCases;
	}
}

module.exports = MustHaveDifferentCases;
