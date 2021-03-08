const chain = require("../chain");
const insideTransaction = require("./control/inside-transaction");
const withoutErrors = require("./control/without-errors");
const storeUser = require("./domain/users/store-user");
const validateUserAddressCity = require("./domain/users/validate-user-address-city");
const validateUserAddressComplement = require("./domain/users/validate-user-address-complement");
const validateUserAddressNeighbourhood = require("./domain/users/validate-user-address-neighbourhood");
const validateUserAddressNumber = require("./domain/users/validate-user-address-number");
const validateUserAddressPostalCode = require("./domain/users/validate-user-address-postal-code");
const validateUserAddressPublicArea = require("./domain/users/validate-user-address-public-area");
const validateUserAddressPublicAreaType = require("./domain/users/validate-user-address-public-area-type");
const validateUserAddressState = require("./domain/users/validate-user-address-state");
const validateUserLoginEmail = require("./domain/users/validate-user-login-email");
const validateUserLoginEmailAvailability = require("./domain/users/validate-user-login-email-availability");
const validateUserLoginPassword = require("./domain/users/validate-user-login-password");
const validateUserPhoneNumberNumber = require("./domain/users/validate-user-phone-number-number");
const validateUserProfileBirthDate = require("./domain/users/validate-user-profile-birth-date");
const validateUserProfileCPF = require("./domain/users/validate-user-profile-cpf");
const validateUserProfileCPFAvailability = require("./domain/users/validate-user-profile-cpf-availability");
const validateUserProfileFirstName = require("./domain/users/validate-user-profile-first-name");
const validateUserProfileLastName = require("./domain/users/validate-user-profile-last-name");
const validateUserProfileSex = require("./domain/users/validate-user-profile-sex");

exports.createUser = () =>
	chain(
		validateUserAddressPublicArea(),
		validateUserAddressPublicAreaType(),
		validateUserAddressComplement(),
		validateUserAddressPostalCode(),
		validateUserAddressNeighbourhood(),
		validateUserAddressNumber(),
		validateUserAddressCity(),
		validateUserAddressState(),
		validateUserLoginEmail(),
		validateUserLoginPassword(),
		validateUserProfileCPF(),
		validateUserProfileSex(),
		validateUserProfileBirthDate(),
		validateUserProfileFirstName(),
		validateUserProfileLastName(),
		validateUserPhoneNumberNumber(),
		insideTransaction(),
		validateUserLoginEmailAvailability(),
		validateUserProfileCPFAvailability(),
		withoutErrors(),
		storeUser(),
	);
