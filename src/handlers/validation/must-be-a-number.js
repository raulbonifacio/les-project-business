const validateIfSent = require("./validate-if-sent");

function mustBeANumber({ field, label = field }) {
	return validateIfSent({
		field,
		message: `O campo ${label} precisa ser um número.`,
		validator: val => !Number.isNaN(Number(val)),
	});
}

module.exports = mustBeANumber;
