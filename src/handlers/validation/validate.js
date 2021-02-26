function validate({ field, validator, message, args = [] }) {

	return async (context, next) => {

		const { input, errors } = context;

		if (field in errors) return next();

		const validatorArgs = [input[field], ...args, context];

		if (! await validator(...validatorArgs)) {
			errors[field] = message;
		}

		return next();
	};
}
module.exports = validate;
