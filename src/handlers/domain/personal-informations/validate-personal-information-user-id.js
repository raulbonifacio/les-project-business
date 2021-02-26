const chain = require("../../../chain");
const mustBeANumber = require("../../validation/must-be-a-number");
const mustBeFilled = require("../../validation/must-be-filled");
const mustBeSent = require("../../validation/must-be-sent");

function validatePersonalInformationUserId() {

	const rules = { field: "userId" };

	return chain(
		mustBeSent(rules),
		mustBeFilled(rules),
		mustBeANumber(rules)
	);
}

module.exports = validatePersonalInformationUserId;
