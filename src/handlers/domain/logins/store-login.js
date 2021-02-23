function storeLogin() {
	return async ({ input, output, db }, next) => {
		const { userId, email, password } = input;

		const user = await db.User.findByPk(userId);
		const login = user.createLogin({ email, password });

		output.login = login;

		await next();
	};
}

module.exports = storeLogin;
