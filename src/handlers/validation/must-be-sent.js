const validate = require("./validate");

function mustBeSent({ field, label = field }) {
	return validate({
		field,
		message: `O campo ${label} precisa ser enviado.`,
		validator: (_, context) => field in context.input,
	});
}

module.exports = mustBeSent;
