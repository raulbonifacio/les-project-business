const SUPER_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const SPECIAL_CHARACTERS_REGEX = /[^a-zA-Z0-9]/;
const NUMBERS_REGEX = /[0-9]/;
const BOOLEAN_REGEX = /^(false|true)$/;
const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/i;

exports.containsDifferentCases = function () {
	return this.toUpperCase() != this && this.toLowerCase() != this;
};

exports.containsNumbers = function () {
	return NUMBERS_REGEX.test(this);
};

exports.containsSpecialCharacters = function () {
	return SPECIAL_CHARACTERS_REGEX.test(this);
};

exports.isAnEmail = function () {
	return SUPER_EMAIL_REGEX.test(this);
};

exports.isADate = function () {
	return new Date(this || "") != "Invalid Date";
};

exports.isEmpty = function () {
	return this.length == 0;
};

exports.isABoolean = function () {
	return BOOLEAN_REGEX.test(this);
};

exports.isCPF = function () {
	return CPF_REGEX.test(this);
};

exports.mustMatchOneOf = function (...regexes) {
	return regexes.some(regex => regex.test(this));
};

exports.mustBeOneOf = function ( ...values) {
	return values.some(value => this == value);
};

exports.isInsideRange = function (min = 0, max = 255) {
	return this.length >= min && this.length <= max;
};
