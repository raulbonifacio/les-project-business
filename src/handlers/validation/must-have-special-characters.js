const { containsSpecialCharacters } = require("../../services/stringValidationService");

function mustHaveSpecialCharacters({ field, label = field }) {
	return ({ input, errors }, next) => {

		if (field in errors || !(field in input)) return next();

		const { [field]: value } = input;

		if (!containsSpecialCharacters(String(value))) {
			errors[field] = `O campo ${label} precisa conter caracteres especiais.`;
		}

		return next();
	};
}

module.exports = mustHaveSpecialCharacters;
