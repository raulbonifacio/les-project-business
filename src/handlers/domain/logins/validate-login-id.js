const chain = require("../../../chain");
const mustBeANumber = require("../../validation/must-be-a-number");
const mustBeSent = require("../../validation/must-be-sent");

function validateLoginId() {
	
	const rules = { field: "id" };

	return chain(
		mustBeSent(rules),
		mustBeFilled(rules),
		mustBeANumber(rules)
	);
}

module.exports = validateLoginId;
