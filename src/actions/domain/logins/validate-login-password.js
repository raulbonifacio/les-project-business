const insidePipeline = require("../../control/inside-pipeline");
const mustBeBetweenLength = require("../../validation/must-be-between-length");
const mustBeFilled = require("../../validation/must-be-filled");
const mustBeSent = require("../../validation/must-be-sent");
const mustHaveDifferentCases = require("../../validation/must-have-different-cases");
const mustHaveSpecialCharacters = require("../../validation/must-have-special-characters");

function validateLoginPassword() {

	const rules = { field: "password" };

	return insidePipeline(
		mustBeSent(rules),
		mustBeFilled(rules),
		mustBeBetweenLength(rules),
		mustHaveDifferentCases(rules),
		mustHaveSpecialCharacters(rules)
	);
}

module.exports = validateLoginPassword;
