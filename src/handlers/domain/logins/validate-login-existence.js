const mustExistInModel = require("../../validation/must-exist-in-model");

function validateLoginExistence() {
	return mustExistInModel({ field: "id", label: "login", model: "Login" });
}

module.exports = validateLoginExistence;
