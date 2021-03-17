const validateId = require("../../validation/validate-id");

function validateAddressUserId() {
	return validateId({ field: "userId", label: "id do usuário" });
}

module.exports = validateAddressUserId;
