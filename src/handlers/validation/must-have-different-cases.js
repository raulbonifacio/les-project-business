const { containsDifferentCases } = require("../../services/stringValidationService");

function mustHaveDifferentCases({ field, label = field }) {
	return ({ input, errors }, next) => {

		const { [field]: value } = input;

		if (field in errors || !(field in input)) return next();

		if (!containsDifferentCases(String(value))) {
			errors[field] = `O campo ${label} precisa conter letras maiúsculas e minúsculas.`;
		}

		return next();
	};
}

module.exports = mustHaveDifferentCases;
