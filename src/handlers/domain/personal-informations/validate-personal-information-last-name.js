const chain = require("../../../chain");
const mustBeBetweenLength = require("../../validation/must-be-between-length");
const mustBeFilled = require("../../validation/must-be-filled");
const mustBeSent = require("../../validation/must-be-sent");

function validatePersonalInformationLastName() {

	const rules = { field: "lastName", label: "user last name" };

	return chain(
		mustBeSent(rules),
		mustBeFilled(rules),
		mustBeBetweenLength(rules)
	);
}

module.exports = validatePersonalInformationLastName;
