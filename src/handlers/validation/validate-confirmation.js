const defaultMessages = {
	notSent: confirmationLabel => `O campo ${confirmationLabel} não foi enviado.`,
	notEqual: (label, confirmationLabel) =>
		`O campo ${label} difere do campo ${confirmationLabel}.`,
	notFilled: confirmationLabel =>
		`O campo ${confirmationLabel} não está preenchido.`,
};

function validateConfirmation(
	{ field, label = field, confirmation, confirmationLabel },
	messages = defaultMessages
) {
	return ({ input, errors }, next) => {
		if (!input.has(confirmation)) {
			errors.set(confirmation, messages.notSent(confirmationLabel));
		} else if (String(input.get(confirmation)).length == 0) {
			errors.set(confirmation, messages.notFilled(confirmationLabel));
		}

		if (input.get(field) != input.get(confirmation)) {
			errors.set(field, messages.notEqual(label, confirmationLabel));
		}

		return next();
	};
}

module.exports = validateConfirmation;
