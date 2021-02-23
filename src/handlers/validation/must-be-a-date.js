const { isADate } = require("../../services/stringValidationService");

function mustBeADate({ field, label = field }) {

	return ({ input, errors }, next) => {

		const { [field]: value } = input;

		if (field in errors || !(field in input)) return next();

		if (!isADate(String(value))) {
			errors[field] = `O campo ${label} precisa ser uma data válida.`;
		}

		return next();
	};
}

module.exports = mustBeADate;
