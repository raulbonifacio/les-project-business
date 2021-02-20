function mustBeSent({ field, label = field }) {
	return ({ input, output }, next) => {
		const { errors } = output;

		if (field in errors) return next();

		if (!(field in input)) {
			errors[field] = `O campo ${label} precisa ser enviado.`;
		}

		return next();
	};
}

module.exports = mustBeSent;
