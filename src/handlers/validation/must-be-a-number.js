function mustBeANumber({ field, label = field }) {
	return ({ input, errors }, next) => {
		const { [field]: value } = input;

		if (field in errors || !(field in input)) return next();

		if (Number.isNaN(Number(value))) {
			errors[field] = `O campo ${label} precisa ser um número.`;
		}

		return next();
	};
}

module.exports = mustBeANumber;
