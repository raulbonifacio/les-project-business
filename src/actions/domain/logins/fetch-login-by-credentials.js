const bcrypt = require("bcrypt");

function fetchLoginByCredentials() {
	return ({ input, output, globals }, next) => {
		const { data, errors } = output;
		const { email, password } = input;
		const { Login } = globals.models;

		return Login.scope("raw").findOne({ where: { email }, include: ["user"] })
			.then(login => {
				if (login && bcrypt.compare(password, login.password)) {
					data.login = login;
				} else {
					errors.general = "Invalid credentials.";
				}
			})
			.then(next);
	};
}

module.exports = fetchLoginByCredentials;
