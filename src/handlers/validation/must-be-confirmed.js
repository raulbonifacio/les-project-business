const ValidateIfSent = require("./validate-if-sent");

class MustBeConfirmed extends ValidateIfSent {
	constructor(field, label = field) {
		super();
		this.field = field;
		this.message = `A cofirmação do campo ${label} não confere.`;
		this.validator = (value, { input }) => {
			const confirmation = input[field + "Confirmation"];
			console.log(confirmation, value);
			return confirmation && confirmation == value;
		};
	}
}

module.exports = MustBeConfirmed;
