const validateString = require("./validate-string");

const initials = [
	"AC",
	"AL",
	"AP",
	"AM",
	"BA",
	"CE",
	"DF",
	"ES",
	"GO",
	"MA",
	"MT",
	"MS",
	"MG",
	"PA",
	"PB",
	"PR",
	"PE",
	"PI",
	"RJ",
	"RN",
	"RS",
	"RO",
	"RR",
	"SC",
	"SP",
	"SE",
	"TO",
];

function validateStateInitial() {
	return validateString({
		field: "state",
		label: "estado",
		mustBeOneOf: initials,
	});
}

module.exports = validateStateInitial;
