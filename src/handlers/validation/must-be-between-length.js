const { isInsideRange } = require("../../services/stringValidationService");

function mustBeBetweenLength({ field, label = field, minLength = 1, maxLength = 255}) {
	return ({ input, errors }, next) => {

		const { [field]: value } = input;

		if (field in errors || !(field in input)) return next();

		if (!isInsideRange(String(value), minLength, maxLength)) {
			errors[field] = `O campo ${label} precisa estar entre ${minLength} e ${maxLength} caracteres.`;
		}

		return next();
	};
}

module.exports = mustBeBetweenLength;
