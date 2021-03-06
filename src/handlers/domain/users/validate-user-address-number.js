const chain = require("../../../chain");
const validateNumber = require("../../validation/validate-number");

function validateUserAddressNumber() {
	return chain(
		({ input }, next) => {
			if (
				input.has("addressWithoutNumber") &&
				input.get("addressWithoutNumber")
			) {
				return;
			}

			return next();
		},
		validateNumber({
			field: "addressNumber",
			label: "número de endereço",
			min: 1,
			mustBeAnInteger: true,
		})
	);
}

module.exports = validateUserAddressNumber;
