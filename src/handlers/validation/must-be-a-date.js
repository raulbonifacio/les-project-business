const { isADate } = require("../../services/stringValidationService");
const ValidateIfSent = require("./validate-if-sent");

class MustBeADate extends ValidateIfSent {
	constructor({ field, label }) {
		super();
		this.field = field;
		this.message = `O campo ${label} precisa ser uma data válida.`;
		this.validator = isADate;
	}
}

module.exports = MustBeADate;
