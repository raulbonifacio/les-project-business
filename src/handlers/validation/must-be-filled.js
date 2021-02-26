const ValidateIfSent = require("./validate-if-sent");

class MustBeFilled extends ValidateIfSent {
	constructor(field, label = field) {
		super();
		this.field = field;
		this.message = `O campo ${label} precisa estar preenchido.`;
		this.validator = val => String(val).length > 0;
	}
}
module.exports = MustBeFilled;
