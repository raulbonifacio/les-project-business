const mustBeADate = require("../../validation/must-be-a-date");
const mustBeFilled = require("../../validation/must-be-filled");
const mustBeSent = require("../../validation/must-be-sent");

function validatePersonalInformationBirthDate() {
	const rules = { field: "birthDate", label: "data de nascimento" };
	return chain(mustBeSent(rules), mustBeFilled(rules), mustBeADate(rules));
}

module.exports = validatePersonalInformationBirthDate;
