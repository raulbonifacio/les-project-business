const validateString = require("./validate-string");

function validateSex({ field, label = field }) {
	return validateString({
		field,
		label,
		oneOf: ["male", "female"],
	});
}

module.exports = validateSex;
