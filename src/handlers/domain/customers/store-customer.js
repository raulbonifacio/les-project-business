function storeCustomer() {
	return async ({ input, output, errors, state }, next) => {

		const { facade, transaction, models } = state;

		const customerRole = await models.Role.findOne(
			{ where: { name: "customer" } },
			{ transaction }
		);

		const user = customerRole && (await customerRole.createUser());

		if (user) {
			output.user = user;
		} else {
			errors.general = `Não foi possível criar um cliente.`;
		}

		const [loginErrors, loginOutput ] = await facade.createLogin(
			{ userId: user?.id, ...input.login },
			{ transaction }
		);

		if (loginOutput) {
			output.login = loginOutput.login;
		}

		if (loginErrors) {
			errors.login = loginErrors;
		}
		

		await next();
	};
}

module.exports = storeCustomer;
