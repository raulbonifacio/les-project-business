function fetchLoginByUserId() {
	return async ({ input, output, state }, next) => {
		const userId = input.get("userId");
		const transaction = state.get("transaction");
		const models = state.get("models");

		const login = await models.Login.findOne({ where: { userId } }, { transaction });

		output.set("login", login.get());

		return next();
	};
}

module.exports = fetchLoginByUserId;
