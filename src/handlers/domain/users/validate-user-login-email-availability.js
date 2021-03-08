const { Op } = require("sequelize");

function validateUserLoginEmailAvailability() {
	return async ({ input, errors, state }, next) => {
		const transaction = state.get("transaction");
		const models = state.get("models");

		const { loginEmail, userId = 0 } = Object.fromEntries(input);
		console.log(input);

		const found = await models.Login.findOne(
			{ where: { email: loginEmail, userId: { [Op.ne]: userId } } },
			{ transaction }
		);

		if (found) {
			errors.set("loginEmail", `O campo e-mail não está disponível.`);
		}

		await next();
	};
}

module.exports = validateUserLoginEmailAvailability;
