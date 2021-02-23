const insideTransaction = require("./control/inside-transaction");
const withoutErrors = require("./control/without-errors");
const storeCustomer = require("./domain/customers/store-customer");
const alterLogin = require("./domain/logins/alter-login");
const fetchLoginByCredentials = require("./domain/logins/fetch-login-by-credentials");
const storeLogin = require("./domain/logins/store-login");
const validateLoginEmail = require("./domain/logins/validate-login-email");
const validateLoginEmailAvalability = require("./domain/logins/validate-login-email-availability");
const validateLoginExistence = require("./domain/logins/validate-login-existence");
const validateLoginPassword = require("./domain/logins/validate-login-password");
const validateLoginPasswordConfirmation = require("./domain/logins/validate-login-password-confirmation");
const validateLoginUserAvailability = require("./domain/logins/validate-login-user-availability");
const validateLoginUserExistence = require("./domain/logins/validate-login-user-existence");
const validateLoginUserId = require("./domain/logins/validate-login-user-id");
const chain = require("../chain");

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
		storeLogin()
	);

exports.updateLogin = () =>
	chain(
		validateLoginPassword(),
		validateLoginPasswordConfirmation(),
		validateLoginEmail(),
		withoutErrors(),
		insideTransaction(),
		validateLoginEmailAvalability(),
		validateLoginExistence(),
		withoutErrors(),
		alterLogin()
	);

exports.createCustomer = () => chain(insideTransaction(), storeCustomer());

exports.createTransactions = () =>
	chain(
		insideTransaction(),
		insideTransaction(),
		insideTransaction(),
		insideTransaction()
	);
