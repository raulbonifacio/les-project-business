const chain = require("../../../chain");
const mustBeAnEmail = require("../../validation/must-be-an-email");
const mustBeBetweenLength = require("../../validation/must-be-between-length");
const mustBeFilled = require("../../validation/must-be-filled");
const mustBeSent = require("../../validation/must-be-sent");

function validateLoginEmail() {

	const rules = { field: "email" };

	return chain(
		mustBeSent(rules),
		mustBeFilled(rules),
		mustBeBetweenLength(rules),
		mustBeAnEmail(rules)
	);
}

module.exports = validateLoginEmail;
