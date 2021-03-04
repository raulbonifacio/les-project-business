const chain = require("../chain");
const validateUserAddress = require("./domain/users/validate-user-address");
const validateUserAddressNumber = require("./domain/users/validate-user-address-number");
const validateUserAddressType = require("./domain/users/validate-user-address-type");
const validateUserBirthDate = require("./domain/users/validate-user-birth-date");
const validateUserCity = require("./domain/users/validate-user-city");
const validateUserComplement = require("./domain/users/validate-user-complement");
const validateUserEmail = require("./domain/users/validate-user-email");
const validateUserPassword = require("./domain/users/validate-user-password");
const validateUserPhoneNumber = require("./domain/users/validate-user-phone-number");
const validateUserPostalCode = require("./domain/users/validate-user-postal-code");
const validateUserSex = require("./domain/users/validate-user-sex");
const validateUserState = require("./domain/users/validate-user-state");

exports.createUser = () =>
	chain(
		validateUserBirthDate(),
		validateUserSex(),
		validateUserEmail(),
		validateUserPassword(),
		validateUserPostalCode(),
		validateUserAddress(),
		validateUserAddressType(),
		validateUserAddressNumber(),
		validateUserCity(),
		validateUserState(),
		validateUserComplement(),
		validateUserPhoneNumber(),
	);
