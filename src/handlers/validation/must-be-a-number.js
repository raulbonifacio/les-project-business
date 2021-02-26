const ValidateIfSent = require("./validate-if-sent");

class MustBeANumber extends ValidateIfSent {
	constructor({ field, label = field }) {
		super();
		this.field = field;
		this.message = `O campo ${label} precisa ser um número.`;
		this.validator = val => !Number.isNaN(Number(val));
	}
}

module.exports = MustBeANumber;
