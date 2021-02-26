function storeCustomer() {
	return async ({ input, output, errors, state }, next) => {
		const { facade, transaction, models } = state;

		let user;

		const customerRole = await models.Role.findOne(
			{ where: { name: "customer" } },
			{ transaction }
		);

		const newUser = customerRole && (await customerRole.createUser());

		if (newUser) {
			user = newUser.get();
		} else {
			errors.general = `Não foi possível criar um cliente.`;
		}

		const [createLoginErrors, createLoginOutput] = await facade.createLogin(
			{ ...input.login, userId: user?.id },
			{ transaction }
		);

		if (createLoginErrors) {
			errors.login = createLoginErrors;
		} 

		await next();
	};
}

module.exports = storeCustomer;
