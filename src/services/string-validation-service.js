const SUPER_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const SPECIAL_CHARACTERS_REGEX = /[^a-zA-Z0-9]/;
const NUMBERS_REGEX = /[0-9]+/;
const BOOLEAN_REGEX = /^(false|true)$/;
const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/i;

exports.includesDifferentCases = function (value) {
	return (
		String(value).toUpperCase() != String(value) &&
		String(value).toLowerCase() != String(value)
	);
};

exports.includesNumbers = function (value) {
	return NUMBERS_REGEX.test(String(value));
};

exports.includesSpecialCharacters = function (value) {
	return SPECIAL_CHARACTERS_REGEX.test(String(value));
};

exports.isAnEmail = function (value) {
	return SUPER_EMAIL_REGEX.test(String(value));
};

exports.isADate = function (value) {
	return new Date(value || "") != "Invalid Date";
};

exports.isEmpty = function (value) {
	return String(value).length == 0;
};

exports.isABoolean = function (value) {
	return BOOLEAN_REGEX.test(String(value));
};

exports.isACPF = function (value) {
	return CPF_REGEX.test(String(value));
};

exports.matchesOneOf = function (value, ...regexes) {
	return regexes.some(regex => regex.test(value));
};

exports.isOneOf = function (value, ...values) {
	return values.some(oneOf => String(value) == oneOf);
};

exports.isInsideRange = function (value, minLength = 1, maxLength = 255) {
	return value.length >= minLength && value.length <= maxLength;
};
