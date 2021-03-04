const validateStateInitial = require("../../validation/validate-state-initial");

function validateUserState() { 
	return validateStateInitial( { field:  "state", label: "estado"});
}

module.exports = validateUserState;

