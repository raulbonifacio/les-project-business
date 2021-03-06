const {
	isOneOf,
	includesNumbers,
	includesDifferentCases,
	includesSpecialCharacters,
	matchesOneOf,
} = require("../../services/string-validation-service");

const defaultMessages = {
	required: label => `O campo ${label} não foi enviado.`,
	type: label => `O campo ${label} não é uma string.`,
	min: (label, min) => `O campo ${label} precisa conter mais de ${min} caractere${ min > 1 ? "s" : "" }.`,
	max: (label, max) => `O campo ${label} precisar conter menos de ${max} caractere${ min > 1 ? "s" : "" }.`,
	filled: label => `O campo ${label} precisa estar preenchido.`,
	matches: (label, matches) => `O campo ${label} não atende ao formato: ${matches}.`,
	mustIncludeNumbers: label => `O campo ${label} precisa conter números.`,
	mustIncludeDifferentCases: label => `O campo ${label} precisa conter letras maiúsculas e minúsculas.`,
	mustIncludeSpecialCharacters: label => `O campo ${label} precisa conter caracteres especiais.`,
	mustBeOneOf: (label, be) => `O campo ${label} precisa ser um dos seguintes valores: ${be.join(", ")} .`,
	mustMatchOneOf: (label, match) => `O campo ${label} precisa ser um dos seguintes formatos: ${match.join( ", ")} .`,
};

function validateString(options, messages) {
	const {
		field,
		label,
		required = true,
		strict = true,
		min,
		max,
		filled,
		matches,
		mustBeOneOf,
		mustMatchOneOf,
		mustIncludeDifferentCases,
		mustIncludeSpecialCharacters,
		mustIncludeNumbers,
	} = {
		...options,
	};

	messages = {
		...defaultMessages,
		...messages,
	};

	return ({ input, errors }, next) => {
		if (errors.has(field)) return next();

		if (input.has(field)) {
			let val = input.get(field);

			if (strict && typeof val != "string") {
				errors.set(field, messages.type(label));
			} else {
				val = String(val);
			}

			if (filled && val.length == 0) {
				errors.set(field, messages.filled(label));
			} else if (min && val.length < min) {
				errors.set(field, messages.min(label, min));
			} else if (max && length > max) {
				errors.set(field, messages.max(label, max));
			} else if (matches && !matches.test(val)) {
				errors.set(field, messages.matches(label, matches));
			} else if (mustBeOneOf && !isOneOf(val, ...mustBeOneOf)) {
				errors.set(field, messages.mustBeOneOf(label, mustBeOneOf));
			} else if (mustMatchOneOf && !matchesOneOf(val, ...matchesOneOf)) {
				errors.set(field, messages.oneOf(label, mustBeOneOf));
			} else if (mustIncludeNumbers && !includesNumbers(val)) {
				errors.set(field, messages.mustIncludeNumbers(label));
			} else if (mustIncludeDifferentCases && !includesDifferentCases(val)) {
				errors.set(field, messages.mustIncludeDifferentCases(label));
			} else if (
				mustIncludeSpecialCharacters &&
				!includesSpecialCharacters(val)
			) {
				errors.set(field, messages.mustIncludeSpecialCharacters(label));
			}
		} else if (required) {
			errors.set(field, messages.required(label, required));
		}

		return next();
	};
}

module.exports = validateString;
