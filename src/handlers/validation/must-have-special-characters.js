const {
	containsSpecialCharacters,
} = require("../../services/stringValidationService");
const ValidateIfSent = require("./validate-if-sent");

class MustHaveSpecialCharacters extends ValidateIfSent {
	constructor(field, label = field) {
		super() 
		this.field = field;
		this.message = `O campo ${label} precisa conter caracteres especiais.`;
		this.validate = containsSpecialCharacters;
	}
}

module.exports = MustHaveSpecialCharacters;
