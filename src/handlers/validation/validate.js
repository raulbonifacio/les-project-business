const Handler = require("../handler");

class Validate extends Handler {

	constructor() {
		super();
		this.args =  [];
		this.field = field;
		this.message = message;
		this.validator = () => true;
	}

	async handle(context, next) {
		const { hasErrors, input, errors } = context;

		if (hasErrors(this.field)) return next();

		const validatorArgs = [input[this.field], ...this.args, context];

		if (!(await this.validator(...validatorArgs))) {
			errors[this.field] = this.message;
		}

		return next();
	}
}

module.exports = Validate;
