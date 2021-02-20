function mustBeSent({ field, label = field }) {
	return ({ input, output }, next) => {
		const { errors } = output;

		if (field in errors) return next();

		if (!(field in input)) {
			errors[field] = `The ${label} is must be sent.`;
		}

		return next();
	};
}

module.exports = mustBeSent;
