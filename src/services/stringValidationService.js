const SUPER_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const SPECIAL_CHARACTERS_REGEX = /[^a-zA-Z0-9]/;
const NUMBERS_REGEX = /[0-9]/;
const BOOLEAN_REGEX = /^(false|true)$/;
const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/i;

const stringValidationService = {
	/**
	 * This function returns true if the provided
	 * string have different cases.
	 */
	containsDifferentCases(string) {
		return string.toUpperCase() != string && string.toLowerCase() != string;
	},

	/**
	 * This function returns true if the provided
	 * string contains numbers.
	 */
	containsNumbers(string) {
		return NUMBERS_REGEX.test(string);
	},

	/**
	 * This function returns true if the provided string
	 * contains special characters
	 */
	containsSpecialCharacters(string) {
		return SPECIAL_CHARACTERS_REGEX.test(string);
	},

	/**
	 * This function returns true if the provided
	 * string is an e-mail.
	 */
	isAnEmail(string) {
		return SUPER_EMAIL_REGEX.test(string);
	},

	/**
	 * This function returns true if the provided
	 * string is a valid Date.
	 */
	isADate(string) {
		return new Date(string || "") != "Invalid Date";
	},

	/**
	 * This function returns true if the provided
	 * string is empty.
	 */
	isEmpty(string) {
		return string.length == 0;
	},

	/**
	 * This function returns true if the provided
	 * string represents a boolean.
	 */
	isABoolean(value) {
		return BOOLEAN_REGEX.test(value);
	},

	/**
	 * This function returns true if the provided
	 * string has a CPF format and is valid.
	 */
	isCPF(value) {
		return CPF_REGEX.test(value);
	},

	/**
	 * This function returns true if the provided
	 * value matches one of the provided regular
	 * expressions.
	 */
	mustMatchOneOf(value, ...regexes) {
		return regexes.some(regex => regex.test(value));
	},

	/**
	 * This function returns true if the provided
	 * value matches one of the provided values.
	 */
	mustBeOneOf(value, ...values) {
		return values.some(aValue => value == aValue);
	},

	/**
	 * This function returns true if the provided
	 * string is inside the range.
	 */
	isInsideRange(string, min = 0, max = 255) {
		return string.length >= min && string.length <= max;
	},
};

module.exports = stringValidationService;
