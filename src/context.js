const assert = require("assert");

class Context {
	constructor(input = {}, globals = {}) {
		this.input = input;
		this.globals = globals;
		this.errors = {};
		this.output = {};
	}

	*[Symbol.iterator]() {
		yield Object.keys(this.errors).length && this.errors;
		yield Object.keys(this.output).length && this.output;
	}

	get appendContextOutputAndErrors() {

		return (field, context) => {

			assert(context instanceof Context);

			const [errors, output] = context;

			if (errors) {
				this.errors[field] = errors;
			}

			if (output) {
				this.output[field] = output;
			}
		};
	}
}

module.exports = Context;
