const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

function encryptUserLoginEmailPassword() {
	return async ({ input }, next) => {
		const encryptedPassword = await bcrypt.hash(
			input.get("loginPassword"),
			SALT_ROUNDS
		);

		input.set("loginPassword", encryptedPassword);

		return next();
	};
}

module.exports = encryptUserLoginEmailPassword;
