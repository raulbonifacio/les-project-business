function storeCustomer() {
	return async ({ input, output, errors, globals }, next) => {
		const { facade, transaction, models } = globals;

		const customerRole = await models.Role.findOne(
			{ where: { name: "customer" } },
			{ transaction }
		);

		const user = customerRole && (await customerRole.createUser());

		if (!user) {
			errors.general = `Não foi possível criar um cliente.`;
		}

		await facade
			.createLogin({ ...input.login, userId: user?.id }, { transaction })
			.then(appendToContext);
	};
}

module.exports = storeCustomer;
