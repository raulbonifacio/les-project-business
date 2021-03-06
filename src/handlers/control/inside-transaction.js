function insideTransaction() {
	return async ({ state, errors }, next) => {

		if (state.has("transaction")) return next();

		const transaction = await state.get("sequelize").transaction();

		try {
			state.set("transaction", transaction);

			await next();

			if (errors.size) {
				return await transaction.rollback();
			} else {
				return await transaction.commit();
			}

		} catch (error) {

			await transaction.rollback();

			throw error;
		}

		state.delete("transaction");
	};
}

module.exports = insideTransaction;
