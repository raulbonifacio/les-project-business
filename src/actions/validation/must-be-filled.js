function mustBeFilled({ field, label = field }) {
	return ({ input, output }, next) => {

		const { errors } = output;
		const { [field]:value } = input

		if (field in errors || !(field in input)) return next();

		if (String(value).length == 0) {
			errors[field] = `O campo ${label} precisa estar preenchido.`;
		}

		return next();
	};
}

module.exports = mustBeFilled;
