const bcrypt = require("bcrypt");

function fetchUserByLoginCredentials() {

	return async ({ input, output, errors, state }, next) => {

		const transaction = state.get("transaction");
		const models = state.get("models");
		const { loginEmail, loginPassword } = Object.fromEntries(input);

		const login = await models.Login.findOne(
			{
				where: { email: loginEmail },
				include: {
					model: models.User,
					as: "user",
					include: [
						{
							model: models.Profile,
							as: "profile",
						},
						{
							model: models.Role,
							as: "role",
						},
					],
				},
			},
			{ transaction }
		);

		if (login && (await bcrypt.compare(loginPassword, login.password))) {
			output.set("user", await login.user.get());
		} else {
			errors.set("error", "As credenciais enviadas são inválidas.");
		}

		return next();
	};
}

module.exports = fetchUserByLoginCredentials;
