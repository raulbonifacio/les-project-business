const { isAnEmail } = require("../../services/stringValidationService");

function mustBeAnEmail({ field, label = field }) {
	return ({ input, output }, next) => {
		const { [field]: value } = input;
		const { errors } = output;

		if (field in errors || !(field in input)) return next();

		if (!isAnEmail(String(value))) {
			errors[field] = `The ${label} must be a valid e-mail.`;
		}

		return next();
	};
}

module.exports = mustBeAnEmail;
