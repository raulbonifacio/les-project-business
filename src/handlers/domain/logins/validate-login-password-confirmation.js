const mustBeSent = require("../../validation/must-be-sent");
const mustBeFilled = require("../../validation/must-be-filled");
const chain = require("../../../chain");
const mustBeConfirmed = require("../../validation/must-be-confirmed");

function validateLoginPasswordConfirmation() {
	const rules = {
		field: "password",
		label: "senha",
	};

	return chain(mustBeSent(rules), mustBeFilled(rules), mustBeConfirmed(rules));
}

module.exports = validateLoginPasswordConfirmation;
