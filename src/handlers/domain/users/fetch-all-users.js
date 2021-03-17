function fetchAllUsers() {
	return ({ input, output }, next) => {
		const transaction = state.get("transaction");
		const models = state.get("models");

		const {count: total, rows: users} = await models.User.scope("raw").findAndCountAll(
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

		output.set("users", users);
		output.set("total", total);

		return next();
	};
}

module.exports = fetchAllUsers;
