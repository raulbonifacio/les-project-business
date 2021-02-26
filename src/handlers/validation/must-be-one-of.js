const validateIfSent = require("./validate-if-sent");

const { mustBeOneOf: mustBeOneOfValues } = require("../../services/stringValidationService");

function mustBeOneOf({field, label=field, possibleValues, }) { 
	return validateIfSent({ 
		field,
		message: `O campo ${label} não possui um dos seguintes valores: ${possibleValues.join(", ") }.`,
		validator: mustBeOneOfValues,
		args: possibleValues
	});
}

module.exports = mustBeOneOf;
