const { isInsideRange } = require("../../services/stringValidationService");

function mustBeBetweenLength({ field, label = field, minLength, maxLength }) {
	return ({ input, output }, next) => {
		const { [field]: value } = input;
		const { errors } = output;

		if (field in errors || !(field in input)) return next();

		if (!isInsideRange(String(value), minLength, maxLength)) {
			errors[field] = `O campo ${label} precis estar entre ${minLength} e ${maxLength} caracteres.`;
		}

		return next();
	};
}

module.exports = mustBeBetweenLength;
