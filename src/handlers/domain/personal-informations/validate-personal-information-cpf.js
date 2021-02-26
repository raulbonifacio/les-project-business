const chain = require("../../../chain");
const mustBeACPF = require("../../validation/must-be-cpf");
const mustBeFilled = require("../../validation/must-be-filled");
const mustBeSent = require("../../validation/must-be-sent");

function validatePersonalInformationCPF() { 

	const rules = {field: "cpf", label: "CPF"};

	return chain(
		mustBeSent(rules),
		mustBeFilled(rules),
		mustBeACPF(rules)
	);
}

module.exports =validatePersonalInformationCPF;
