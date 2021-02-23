const mustBeSent = require("../../validation/must-be-sent");
const mustBeFilled = require("../../validation/must-be-filled");
const chain = require("../../../chain");

function validateLoginPasswordConfirmation() {

	const rules = {
		field: "passwordConfirmation",
		label: "confirmação de senha",
	};

	return chain(
		mustBeSent(rules),
		mustBeFilled(rules),
		({ input, errors }, next) => {

			const { password, passwordConfirmation } = input;

			if (passwordConfirmation in errors || !(passwordConfirmation in input))
				return next();

			if (passwordConfirmation != password) {
				errors.passwordConfirmation = `A a confirmação de senha não confere.`;
			}

			return next();
		}
	);
}

module.exports = validateLoginPasswordConfirmation;
