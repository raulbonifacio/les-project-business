const chain = require("../chain");
const validateUserLoginEmail = require("./domain/user/validate-user-login-email");
const validateUserLoginPassword = require("./domain/user/validate-user-login-password");

exports.createUser = () =>
	chain(validateUserLoginEmail(), validateUserLoginPassword());
