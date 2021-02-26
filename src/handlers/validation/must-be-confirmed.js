const validateIfSent = require("./validate-if-sent");

function mustBeConfirmed({ field, label = field }) {
	return validateIfSent({
		field,
		message: `A cofirmação do campo ${label} não confere.`,
		validator: (value, { input }) => {

			const confirmation = input[field + "Confirmation"];
			console.log(confirmation, value);
			return confirmation && confirmation == value;
		},
	});
}

module.exports = mustBeConfirmed;
