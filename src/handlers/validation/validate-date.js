const { isAfter, isBefore } = require("../../services/date-validation-service");

const defaultMessages = {
	required: label => `O campo ${label} não foi enviado.`,
	isDate: label => `O campo ${label} não é uma data válida.`,
	mustBeAfter: (label, mustBeAfter) =>
		`O campo ${label} precisa ser após ${mustBeAfter.toString()}.`,
	mustBeBefore: (label, mustBeBefore) =>
		`O campo ${label} precisa ser após ${mustBeBefore.toString()}.`,
};

function validateDate(
	{ field, label = field, required = true, mustBeBefore, mustBeAfter },
	messages
) {
	messages = { ...messages, ...defaultMessages };

	return ({ input, errors }, next) => {
		if (input.has(field)) {

			const date = input.get(field);

			if (!(date instanceof Date)) {
				errors.set(field, messages.isDate(label));
			} else if (mustBeAfter && isAfter(date, mustBeAfter)) {
				errors.set(field, messages.mustBeAfter(label, mustBeAfter));
			} else if (mustBeBefore && isBefore(date, mustBeBefore)) {
				errors.set(field, messages.mustBeBefore(label, mustBeBefore));
			}
		} else if (required) {
			errors.set(field, messages.required(label));
		}

		return next();
	};
}

module.exports = validateDate;
