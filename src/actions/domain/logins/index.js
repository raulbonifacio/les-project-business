const insidePipeline = require("../../control/inside-pipeline");
const insideTransaction = require("../../control/inside-transaction");
const withoutErrors = require("../../control/without-errors");
const fetchLoginByCredentials = require("./fetch-login-by-credentials");
const validateLoginEmail = require("./validate-login-email");
const validateLoginEmailAvalability = require("./validate-login-email-availability");
const validateLoginPassword = require("./validate-login-password");

exports.fetchLoginByCredentials = insidePipeline(
	validateLoginEmail(),
	validateLoginPassword(),
	withoutErrors(),
	fetchLoginByCredentials()
);

exports.storeLogin = insidePipeline(
	validateLoginPassword(),
	validateLoginEmail(),
	validateLoginEmailAvalability(),
	withoutErrors(),
	insideTransaction(),
);
