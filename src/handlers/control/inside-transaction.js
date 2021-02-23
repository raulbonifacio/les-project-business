function insideTransaction() {
	return async ({ globals, errors }, next) => {

		if (globals.transaction) return next();

		const transaction = await globals.sequelize.transaction();

		try {
			globals.transaction = transaction;

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

		delete globals.transaction;
	};
}

module.exports = insideTransaction;
