const chain = require("../chain");
const storeLogin = require("./domain/logins/store-login");
const withoutErrors = require("./control/without-errors");
const insideTransaction = require("./control/inside-transaction");
const fetchLoginByCredentials = require("./domain/logins/fetch-login-by-credentials");
const validateLoginEmail = require("./domain/logins/validate-login-email");
const validateLoginEmailAvalability = require("./domain/logins/validate-login-email-availability");
const validateLoginPassword = require("./domain/logins/validate-login-password");
const validateLoginPasswordConfirmation = require("./domain/logins/validate-login-password-confirmation");
const validateLoginUserAvailability = require("./domain/logins/validate-login-user-availability");
const validateLoginUserExistence = require("./domain/logins/validate-login-user-existence");
const validateLoginUserId = require("./domain/logins/validate-login-user-id");
const validatePersonalInformationFirstName = require("./domain/personal-informations/validate-personal-information-first-name");
const validatePersonalInformationLastName = require("./domain/personal-informations/validate-personal-information-last-name");
const validatePersonalInformationCPF = require("./domain/personal-informations/validate-personal-information-cpf");
const validatePersonalInformationSex = require("./domain/personal-informations/validate-personal-information-sex");
const validatePersonalInformationBirthDate = require("./domain/personal-informations/validate-personal-information-birth-date");
const validatePersonalInformationUserId = require("./domain/personal-informations/validate-personal-information-user-id");
const storePersonalInformation = require("./domain/personal-informations/store-personal-information");
const encryptLoginPassword = require("./domain/logins/encrypt-login-password");

exports.getLoginByCredentials = () =>
	chain(
		validateLoginEmail(),
		validateLoginPassword(),
		withoutErrors(),
		insideTransaction(),
		fetchLoginByCredentials()
	);

exports.createLogin = () =>
	chain(
		validateLoginPassword(),
		validateLoginPasswordConfirmation(),
		validateLoginEmail(),
		validateLoginUserId(),
		withoutErrors(),
		insideTransaction(),
		validateLoginEmailAvalability(),
		validateLoginUserExistence(),
		validateLoginUserAvailability(),
		withoutErrors(),
		encryptLoginPassword(),
		storeLogin()
	);

exports.createPersonalInformation = () => 
	chain(
		validatePersonalInformationFirstName(),
		validatePersonalInformationLastName(),
		validatePersonalInformationBirthDate(),
		validatePersonalInformationCPF(),
		validatePersonalInformationSex(),
		validatePersonalInformationUserId(),
		withoutErrors(),
		insideTransaction(),
		storePersonalInformation(),
	);

