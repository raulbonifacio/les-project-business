const {
	isInteger,
	hasPrecision,

} = require("../../services/number-validation-service");

const defaultMessages = {
	required: label => `O campo ${label} não foi enviado.`,
	type: label => `O campo ${label} não é um número válido.`,
	min: (label, min) => `O campo ${label} não pode ser menor que ${min}.`,
	max: (label, max) => `O campo ${label} não pode ser maior que ${max}.`,
	mustBeAnInteger: label => `O campo ${label} precisa ser um número inteiro.`,
	mustHavePrecision: (label, precision) => `O campo ${label} precisa ter ${precision} dígitos de precisão.`,
};

function validateNumber(
	{
		field,
		label = field,
		required = true,
		strict = true,
		min,
		max,
		mustBeAnInteger,
		mustHavePrecision,
	},
	messages
) {
	messages = { ...messages, ...defaultMessages };

	return ({ input, errors }, next) => {
		if (input.has(field)) {
			if (strict && Number.isNaN(Number(input.get(field)))) {
				errors.set(field, messages.type(label));
			}

			const number = Number(input.get(field));

			if (min != undefined && number < min) {
				errors.set(field, messages.min(label, min));
			} else if (max != undefined && number < max) {
				errors.set(field, messages.max(label, max));
			} else if (mustBeAnInteger && !isInteger(number)) {
				errors.set(field, messages.mustBeAnInteger(label));
			} else if (
				mustHavePrecision && !hasPrecision(number, mustHavePrecision)
			) {
				errors.set(field, messages.mustHavePrecision(label, mustHavePrecision));
			}

		} else if (required) {
			errors.set(field, messages.required(label));
		}

		return next();
	};
}

module.exports = validateNumber;
