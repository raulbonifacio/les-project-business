function mustBeFilled({ field, label = field }) {
	return ({ input, output }, next) => {

		const { errors } = output;
		const { [field]:value } = input

		if (field in errors || !(field in input)) return next();

		if (String(value).length == 0) {
			errors[field] = `The ${label} must be filled.`;
		}

		return next();
	};
}

module.exports = mustBeFilled;
