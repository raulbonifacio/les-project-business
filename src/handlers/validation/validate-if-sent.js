const Validate = require("./validate");

class ValidateIfSent extends Validate {
	constructor(field) {
		super(field);
	}

	set validator(validator) { 
		this.validator = (...args) => {

			const context = [...args].pop();

			if (!context.hasInput(field)) return true;

			console.log("shit");

			return validator(...args);
		};
	}
}

module.exports = ValidateIfSent;
