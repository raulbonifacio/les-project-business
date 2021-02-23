const chain = require("../../../chain");
const mustBeBetweenLength = require("../../validation/must-be-between-length");

function validatePersonalInformationFirstName() {

	const rules = { field: "firstName", label: "user first name" };

	return chain(
		mustBeSent(rules),
		mustBeFilled(rules),
		mustBeBetweenLength(rules)
	);
}

module.exports = validatePersonalInformationFirstName;
