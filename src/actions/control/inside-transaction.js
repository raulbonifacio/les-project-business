function insideTransaction() {
	return async ({ output, globals }, next) => {
		const transaction = await globals.sequelize.transaction();

		try {
			await next();

			if (output.errors.size) {
				await transaction.rollback();
			} else {
				await transaction.commit();
			}

		} catch (error) {
			await transaction.rollback();
		}
	};
}

module.exports = insideTransaction;
