const { isCPF } = require("../../services/stringValidationService");
const validateIfSent = require("./validate-if-sent");

class MustBeACPF extends validateIfSent {
	constructor(field, label = field) {
		super();
		this.field = field;
		this.message = `O campo ${label} não é um CPF válido.`;
		this.validator = isCPF;
	}
}
module.exports = MustBeACPF;
