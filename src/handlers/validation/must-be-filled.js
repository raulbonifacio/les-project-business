const validateIfSent = require("./validate-if-sent");

function mustBeFilled({ field, label = field }) {
	return validateIfSent({
		field,
		message: `O campo ${label} precisa estar preenchido.`,
		validator: val => String(val).length > 0,
	});
}

module.exports = mustBeFilled;
