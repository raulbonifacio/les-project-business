const { isADate } = require("../../services/stringValidationService");

function mustBeADate({ field, label = field }) {
	return ({ input, output }, next) => {
		const { [field]: value } = input;
		const { errors } = output;

		if (field in errors || !(field in input)) return next();

		if (!isADate(String(value))) {
			errors[field] = `The ${label} must be a valid date.`;
		}

		return next();
	};
}

module.exports = mustBeADate;
