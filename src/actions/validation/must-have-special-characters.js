const { containsSpecialCharacters } = require("../../services/stringValidationService");

function mustHaveSpecialCharacters({ field, label = field }) {
	return ({ input, output }, next) => {
		const { [field]: value } = input;
		const { errors } = output;

		if (field in errors || !(field in input)) return next();

		if (!containsSpecialCharacters(String(value))) {
			errors[field] = `O campo ${label} precisa conter caracteres especiais.`;
		}

		return next();
	};
}

module.exports = mustHaveSpecialCharacters;
