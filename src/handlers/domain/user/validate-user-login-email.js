const { validateEmail } = require("../../../services/validation-service");

function validateUserLoginEmail() {
	return async ({ input, errors }, next) => {

		const error = await validateEmail(input?.login?.email, "email");

		if (error) {
			errors.login = { ...errors.login, email: error };
		}

		return next();
	};
}
module.exports = validateUserLoginEmail;
