const chain = require("../../../chain");
const validateConfirmation = require("../../validation/validate-confirmation");
const validatePassword = require("../../validation/validate-password");

function validateUserPassword() {
	return chain(
		validatePassword({
			field: "userPassword",
			label: "senha",
		}),
		validateConfirmation({
			field: "userLoginPassword",
			label: "senha",
			confirmation: "userPasswordConfirmation",
			confirmationLabel: "confirmação de senha",
		})
	);
}

module.exports = validateUserPassword;
