function withoutErrors(...keys) {
	return ({ errors }, next) => {

		if(errors.size && keys.length == 0) { 
			return;
		} else if(keys.some(key => errors.has(key))) {
			return;
		}

		return next();
	};
}

odule.exports = withoutErrors;
