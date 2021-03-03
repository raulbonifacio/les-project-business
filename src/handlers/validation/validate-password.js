const chain = require("../../chain");
const validateString = require("./validate-string");

function validatePassword({ field, label = field }) {
	return chain(validateString({
		field,
		label,
		min: 8,
		mustIncludeNumbers: true,
		mustIncludeDifferentCases: true,
		mustIncludeSpecialCharacters: true,
	}));
}

module.exports = validatePassword;
