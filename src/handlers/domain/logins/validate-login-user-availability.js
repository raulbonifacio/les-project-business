function validateLoginUserAvailability() {
	return async ({ input, output }, next) => {
		const { errors } = output;
		const { userId } = input;
		const { User } = globals.models;

		if ("userId" in errors || !("userId" in input)) return next();

		const user = await User.findByPk(userId);
		const login = await user.getLogin();

		if (login) {
			errors.userId = `O usuário já possui um login.`;
		}

		return await next();
	};
}

module.exports = validateLoginUserAvailability;
