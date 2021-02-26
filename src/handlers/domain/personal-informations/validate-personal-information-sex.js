const chain = require("../../../chain");
const mustBeBetweenLength = require("../../validation/must-be-between-length");
const mustBeFilled = require("../../validation/must-be-filled");
const mustBeOneOf = require("../../validation/must-be-one-of");
const mustBeSent = require("../../validation/must-be-sent");

function validatePersonalInformationSex() {

	const rules = {
		field: "sex",
		label: "sexo",
		possibleValues: ["male", "female"],
	};

	return chain(
		mustBeSent(rules),
		mustBeFilled(rules),
		mustBeBetweenLength(rules),
		mustBeOneOf(rules)
	);
}

module.exports = validatePersonalInformationSex;
