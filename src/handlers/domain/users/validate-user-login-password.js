const chain = require("../../../chain");
const validateConfirmation = require("../../validation/validate-confirmation");
const validatePassword = require("../../validation/validate-password");

function validateUserLoginPassword() {
	return chain(
		validatePassword({
			field: "loginPassword",
			label: "senha",
		}),
		validateConfirmation({
			field: "loginPassword",
			label: "senha",
			confirmation: "loginPasswordConfirmation",
			confirmationLabel: "confirmação de senha",
		})
	);
}

module.exports = validateUserLoginPassword;
