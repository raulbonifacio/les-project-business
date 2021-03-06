const defaultMessages = {
	notSent: confirmationLabel => `O campo ${confirmationLabel} não foi enviado.`,
	notEqual: (label, confirmationLabel) => `O campo ${confirmationLabel} difere do campo ${label}.`,
	notFilled: confirmationLabel => `O campo ${confirmationLabel} não está preenchido.`,
};

function validateConfirmation(
	{ field, label = field, confirmation, confirmationLabel },
	messages
) {
	messages = { ...defaultMessages, ...messages };
	return ({ input, errors }, next) => {
		if (!input.has(confirmation)) {
			errors.set(confirmation, messages.notSent(confirmationLabel));
		} else if (String(input.get(confirmation)).length == 0) {
			errors.set(confirmation, messages.notFilled(confirmationLabel));
		} else if (input.get(field) != input.get(confirmation)) {
			errors.set(confirmation, messages.notEqual(label, confirmationLabel));
		}

		return next();
	};
}

module.exports = validateConfirmation;
