const { Op } = require("sequelize");

function validateLoginEmailAvalability() {
	return async ({ input, state, errors }, next) => {

		const { Login } = state.models;
		const { id = 0, email } = input;

		if ("email" in errors || !("email" in input)) return next();

		const found = await Login.findOne({
			where: { email, id: { [Op.ne]: id } },
		});

		if (found) {
			errors.email = "O e-mail não está disponível.";
		}

		await next();
	};
}

module.exports = validateLoginEmailAvalability;
