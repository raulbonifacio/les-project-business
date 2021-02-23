const bcrypt = require("bcrypt");

function fetchLoginByCredentials() {
	return async ({ input, output, errors, globals }, next) => {
		const { email, password } = input;
		const {
			transaction, //the ongoing transaction
			models: { Login },
		} = globals;

		const login = await Login.scope("raw").findOne({
			where: { email },
			transaction,
		});

		if (login && await bcrypt.compare(password, login.password)) {
			output.login = login;
		} else {
			errors.general = "Invalid credentials.";
		}

		return next();
	};
}

module.exports = fetchLoginByCredentials;
