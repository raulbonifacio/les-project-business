const validateNumber = require("./validate-number");

function validateId({ field, label = field }) {
	return validateNumber({
		field,
		label,
		mustBeAnInteger: true,
		min: 0,
	});
}

module.exports = validateId;
