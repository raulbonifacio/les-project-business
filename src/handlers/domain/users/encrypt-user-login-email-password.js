const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = process.env;

function encryptUserLoginEmailPassword() {
	return async ({ input }, next) => {
		const encryptedPassword = await bcrypt.hash(
			input.get("loginPassword"),
			Number(SALT_ROUNDS)
		);

		input.set("loginPassword", encryptedPassword);

		return next();
	};
}

module.exports = encryptUserLoginEmailPassword;
