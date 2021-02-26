const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

function bcryptIt({ field }) {
	return async ({ input }, next) => {

		input[field] = await bcrypt.hash(input[field], SALT_ROUNDS);

		return next();
	};
}

module.exports = bcryptIt;
