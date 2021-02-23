function mustBeConfirmed({ field, label = field }) {
	return ({ input, errors }, next) => {
		const { [field]: value, [`${field}Confimation`]: confirmation } = input;

		if (field in errors || !(field in input)) return next();

		if (!(`${field}Confirmation` in input) || value != confirmation) {
			errors[field] = `A cofirmação do campo ${label} não confere.`;
		}

		return next();
	};
}

module.exports = mustBeConfirmed;
