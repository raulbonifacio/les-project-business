const { isADate } = require("../../services/stringValidationService");
const validateIfSent = require("./validate-if-sent");

function mustBeADate({ field, label = field }) {
	return validateIfSent({
		field,
		message: `O campo ${label} precisa ser uma data válida.`,
		validator: isADate,
	});
}

module.exports = mustBeADate;
