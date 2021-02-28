const { validatePassword } = require("../../../services/validation-service");

function validateUserLoginPassword() {
	return async ({ input, errors }, next) => {

		const error = await validatePassword(input?.login?.password, "senha");

		if (error) {
			errors.login = { ...errors.login, password: error };
		}

		return next();
	};
}

module.exports = validateUserLoginPassword;
