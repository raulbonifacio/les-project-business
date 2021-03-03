const defaultMessages = {
	notEqual: (label, confirmationLabel) =>
		`O campo ${label} difere do campo ${confirmationLabel}.`,
};

function validateConfirmation(
	{ field, label = field, confirmation, confirmationLabel },
	messages = defaultMessages
) {
	return ({ input, errors }, next) => {
		if (!input.has(input) || !input.has(confirmation)) return next();

		if (input.get(field) != input.get(confirmation)) {
			errors.set(field, messages.notEqual(label, confirmationLabel));
		}

		return next();
	};
}

module.exports = validateConfirmation;
