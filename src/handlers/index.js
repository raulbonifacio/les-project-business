const chain = require("../chain");
const validateUserEmail = require("./domain/user/validate-user-email");
const validateUserPassword = require("./domain/user/validate-user-password");
const validateUserPhoneNumber = require("./domain/user/validate-user-phone-number");
const validateUserSex = require("./domain/user/validate-user-sex");

exports.createUser = () =>
	chain(
		validateUserPassword(),
		validateUserEmail(),
		validateUserSex(),
		validateUserPhoneNumber()
	);
