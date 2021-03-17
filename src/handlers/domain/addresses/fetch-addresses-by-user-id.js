function fetchAddressesByUserId() {
	return async ({ input, output, state }, next) => {
		const transaction = state.get("transaction");
		const models = state.get("models");
		const { userId, offset, limit } = Object.fromEntries(input);

		const { count, rows } = await models.Address.scope("raw").findAndCountAll(
			{ where: { userId }, offset, limit },
			{ transaction }
		);

		output.set("addresses", rows);
		output.set("total", count);

		return next();
	};
}

module.exports = fetchAddressesByUserId;
