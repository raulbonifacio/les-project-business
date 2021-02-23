
const mustBeBetweenLength = require("../../validation/must-be-between-length");

function validatePersonalInformationLastName() {

	const rules = { field: "lastName", label: "user last name" };

	return insidePipeline(
		mustBeSent(rules),
		mustBeFilled(rules),
		mustBeBetweenLength(rules)
	);
}

module.exports = validatePersonalInformationLastName;
