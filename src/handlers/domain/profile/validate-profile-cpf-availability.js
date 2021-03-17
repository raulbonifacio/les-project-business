const { Op } = require("sequelize");

function validateProfileCPFAvailability() {
	return async ({ input, errors, state }, next) => {

		const transaction = state.get("transaction");
		const models = state.get("models");

		const { cpf, userId = 0 } = Object.fromEntries(input);

		const found = await models.Profile.findOne(
			{ where: { cpf, userId: { [Op.ne]: userId } } },
			{ transaction }
		);

		if (found) {
			errors.set("cpf", `O campo CPF não está disponível.`);
		}

		await next();
	};
}

module.exports = validateProfileCPFAvailability;
