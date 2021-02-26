const Validate = require("./validate");

class MustBeSent extends Validate {
	constructor(field, label = field) {
		super();
		this.field = field;
		this.message = `O campo ${label} precisa ser enviado.`;
		this.validator = (_, context) => field in context.input;
	}
}

module.exports = MustBeSent;
