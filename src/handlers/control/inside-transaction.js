function insideTransaction() {
	return async ({ state, errors }, next) => {

		if (state.transaction) return next();

		const transaction = await state.sequelize.transaction();

		try {
			state.transaction = transaction;

			await next();

			if (Object.keys(errors).length) {
				return await transaction.rollback();
			} else {
				return await transaction.commit();
			}
		} catch (error) {
			await transaction.rollback();

			throw error;
		}

		delete state.transaction;
	};
}

module.exports = insideTransaction;
