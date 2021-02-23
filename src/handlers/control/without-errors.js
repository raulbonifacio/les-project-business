function withoutErrors(...keys) {
	return ({ errors }, next) => {

		if (keys.length == 0 && Object.keys(errors).length) {
			return;
		}

		if (keys.some(key => key in errors)) {
			return;
		}

		return next();
	};
}

module.exports = withoutErrors;
