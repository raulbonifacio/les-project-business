const { Op } = require("sequelize");

function validateUserProfileCPFAvailability() {
	return async ({ input, errors, state }, next) => {
		const transaction = state.get("transaction");
		const models = state.get("models");

		const { profileCPF, userId = 0 } = Object.fromEntries(input);

		const found = await models.Profile.findOne(
			{ where: { cpf: profileCPF, userId: { [Op.ne]: userId } } },
			{ transaction }
		);

		if (found) {
			errors.set("profileCPF", `O campo CPF não está disponível.`);
		}

		await next();
	};
}

module.exports = validateUserProfileCPFAvailability;
