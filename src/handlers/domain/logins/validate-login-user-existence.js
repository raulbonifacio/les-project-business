const mustExistInModel = require("../../validation/must-exist-in-model");

function validateLoginUserExistence() {
	return mustExistInModel({ field: "userId", label: "user", model: "User" });
}

module.exports = validateLoginUserExistence;
