const { isInsideRange } = require("../../services/stringValidationService");
const validateIfSent = require("./validate-if-sent");

function mustBeBetweenLength({ field, label = field, minLength = 1, maxLength = 255}) {
	return validateIfSent({
		field,
		validator: isInsideRange,
		message: `O campo ${label} precisa estar entre ${minLength} e ${maxLength} caracteres.`,
		args: [minLength, maxLength]
	});
}

module.exports = mustBeBetweenLength;
