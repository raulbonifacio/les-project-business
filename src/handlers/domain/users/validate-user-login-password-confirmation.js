const validateConfirmation = require("../../validation/validate-confirmation");

function validateUserLoginPasswordConfirmation() {
	return validateConfirmation({
		field: "loginPassword",
		label: "senha",
		confirmation: "loginPasswordConfirmation",
		confirmationLabel: "confirmação de senha",
	});
}

module.exports = validateUserLoginPasswordConfirmation;
