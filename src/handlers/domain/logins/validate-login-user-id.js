const validateId = require("../../validation/validate-id");

function validateLoginUserId() {
	return validateId({ field: "userId", label: "id do usuário" });
}

module.exports = validateLoginUserId;
