const validateIfSent = require("../../validation/validate-if-sent");

function validateLoginUserAvailability() {

	const validator = async (userId, { state }) => {
		const { transaction, models } = state;

		const user = await models.User.findByPk(userId, {
			transaction,
		});

		return await user.hasLogin({ transaction });
	};

	return validateIfSent({
		field: "userId",
		message: "O usuário já possui um login.",
		validator,
	});
}

module.exports = validateLoginUserAvailability;
