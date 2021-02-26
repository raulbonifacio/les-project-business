const validate = require("./validate");

function validateIfSent(rules) {
	const validator = (...args) => {
		const context = [...args].pop();

		if (!(rules.field in context.input)) return true;

		return rules.validator(...args);
	};

	return validate({ ...rules, validator });
}
module.exports = validateIfSent;
