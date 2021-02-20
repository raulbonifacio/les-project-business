function withoutErrors(...keys) {

	return (context, next) => {

		const { errors } = context.output;

		if (keys.length == 0 && Object.keys(errors).length) {
			return;
		}

		if(keys.some( key => key in errors)) { 
			return;
		}

		return next();
	};
}

module.exports = withoutErrors;
