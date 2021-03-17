function fetchProfileByUserId() {
	return async ({ input, output, state }, next) => {
		const transaction = state.get("transaction");
		const models = state.get("models");
		const userId = input.get("userId");

		const user = await models.User.findByPk(userId, { transaction });

		const profile = await user.getProfile();

		output.set("profile", profile.get());

		return next();
	};
}

module.exports = fetchProfileByUserId;
