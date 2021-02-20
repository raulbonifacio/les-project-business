const { containsDifferentCases } = require("../../services/stringValidationService");

function mustHaveDifferentCases({ field, label = field }) {
	return ({ input, output }, next) => {
		const { [field]: value } = input;
		const { errors } = output;

		if (field in errors || !(field in input)) return next();

		if (!containsDifferentCases(String(value))) {
			errors[field] = `The ${label} must have different cases.`;
		}

		return next();
	};
}

module.exports = mustHaveDifferentCases;
