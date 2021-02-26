const { isCPF } = require("../../services/stringValidationService");
const validateIfSent = require("./validate-if-sent");

function mustBeACPF({ field, label = field }) {
	return validateIfSent({
		field,
		message: `O campo ${label} não é um CPF válido.`,
		validator: isCPF,
	});
}

module.exports = mustBeACPF;
