const validateId = require("../../validation/validate-id");

function validateProfileUserId() {
	return validateId({ field: "userId", label: "id do usuário" });
}

module.exports = validateProfileUserId;
