const chain = require("../chain");
const insideTransaction = require("./control/inside-transaction");
const withoutErrors = require("./control/without-errors");
const fetchAddressesByUserId = require("./domain/addresses/fetch-addresses-by-user-id");
const validateAddressUserId = require("./domain/addresses/validate-address-user-id");
const fetchLoginByUserId = require("./domain/logins/fetch-login-by-user-id");
const validateLoginUserId = require("./domain/logins/validate-login-user-id");
const fetchProfileByUserId = require("./domain/profile/fetch-profile-by-user-id");
const validateProfileUserId = require("./domain/profile/validate-profile-user-id");
const encryptUserLoginEmailPassword = require("./domain/users/encrypt-user-login-email-password");
const fetchUserByLoginCredentials = require("./domain/users/fetch-user-by-login-credentials");
const fillUserAddressDefaultValues = require("./domain/users/fill-user-address-default-values");
const fillUserPhoneTypeId = require("./domain/users/fill-user-phone-number-type-id");
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

exports.storeUser = () =>
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
		encryptUserLoginEmailPassword(),
		fillUserAddressDefaultValues(),
		fillUserPhoneTypeId(),
		storeUser()
	);

exports.fetchUserByLoginCredentials = () =>
	chain(
		validateUserLoginEmail(),
		validateUserLoginPassword(),
		withoutErrors(),
		fetchUserByLoginCredentials()
	);

exports.fetchProfileByUserId = () =>
	chain(validateProfileUserId(), fetchProfileByUserId());

exports.fetchLoginByUserId = () =>
	chain(validateLoginUserId(), fetchLoginByUserId());

exports.fetchAddressesByUserId = () =>
	chain(validateAddressUserId(), fetchAddressesByUserId());
