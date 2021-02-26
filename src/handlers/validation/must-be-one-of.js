const {
	mustBeOneOf: mustBeOneOfValues,
} = require("../../services/stringValidationService");
const ValidateIfSent = require("./validate-if-sent");

class MustBeOneOf extends ValidateIfSent {
	constructor(field, label = field, ...possibleValues) {
		super();
		this.field = field;
		this.message = `O campo ${label} não possui um dos seguintes valores: ${possibleValues.join( ", ")}.`;
		this.validator = mustBeOneOfValues;
		this.args = possibleValues;
	}
}

module.exports = MustBeOneOf;
