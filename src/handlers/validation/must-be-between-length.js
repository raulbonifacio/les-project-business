const { isInsideRange } = require("../../services/stringValidationService");
const ValidateIfSent = require("./validate-if-sent");

class MustBeBetweenLength extends ValidateIfSent {
	constructor(field, label = field, minLength = 1, maxLength = 255) {
		super();
		this.field = field;
		this.message = `O campo ${label} precisa estar entre ${minLength} e ${maxLength} caracteres.`;
		this.validator = isInsideRange;
		this.args = [minLength, maxLength];
	}
}

module.exports = MustBeBetweenLength;
