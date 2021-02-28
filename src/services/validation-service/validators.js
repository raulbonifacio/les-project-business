const SUPER_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const SPECIAL_CHARACTERS_REGEX = /[^a-zA-Z0-9]/;
const NUMBERS_REGEX = /[0-9]/;
const BOOLEAN_REGEX = /^(false|true)$/;
const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/i;

exports.mustIncludeDifferentCases = () => (ctx, next) => {
	if (
		String(ctx.value).toUpperCase() != String(ctx.value) &&
		String(ctx.value).toLowerCase() != String(ctx.value)
	) {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não tem caracteres minúsculos e maiúsculos.`;
	}
};

exports.mustIncludeNumbers = () => (ctx, next) => {
	if (NUMBERS_REGEX.test(String(ctx.value))) {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não contém números.`;
	}
};

exports.mustIncludeSpecialCharacters = () => (ctx, next) => {
	if (SPECIAL_CHARACTERS_REGEX.test(String(ctx.value))) {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não contém caracteres especiais.`;
	}
};

exports.mustBeAnEmail = () => (ctx, next) => {
	if (SUPER_EMAIL_REGEX.test(String(ctx.value))) {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não é um e-mail válido.`;
	}
};

exports.mustBeADate = () => (ctx, next) => {
	if (new Date(ctx.value || "") != "Invalid Date") {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não é uma data válida.`;
	}
};

exports.mustBeEmpty = () => (ctx, next) => {
	if (String(ctx.value).length == 0) {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não está vazio.`;
	}
};

exports.mustBeABoolean = () => (ctx, next) => {
	if (BOOLEAN_REGEX.test(String(ctx.value))) {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não é um booleano.`;
	}
};

exports.isCPF = () => (ctx, next) => {
	if (CPF_REGEX.test(String(ctx.value))) {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não é um CPF válido.`;
	}
};

exports.mustMatchOneOf = (...regexes) => (ctx, next) => {
	if (regexes.some(regex => regex.test(ctx.value))) {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não possui um valor válido.`;
	}
};

exports.mustBeOneOf = (...values) => (ctx, next) => {
	if (values.some(oneOf => String(ctx.value) == oneOf)) {
		return next();
	} else {
		ctx.errors = `O campo ${ctx.field} não está entre os valores: ${values.join(
			", "
		)}.`;
	}
};

exports.mustBeInsideRange = (minLength = 1, maxLength = 255) => (ctx, next) => {
	if (ctx.value.length >= minLength && ctx.value.length <= maxLength) {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não está entre ${minLength} e ${maxLength} caracteres.`;
	}
};

exports.mustBeSent = () => (ctx, next) => {
	console.log(ctx.value);
	if (ctx.value != undefined) {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não foi enviado.`;
	}
};

exports.mustBeANumber = () => (ctx, next) => {
	if (Number.isNaN(Number(ctx.value))) {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não é um número.`;
	}
};

exports.mustBeABoolean = () => (ctx, next) => {
	if (/^(true|false)$/.test(String(ctx.value))) {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não é um booleano.`;
	}
};

exports.mustBeFilled = () => (ctx, next) => {
	if (String(ctx.value).length > 0) {
		return next();
	} else {
		ctx.error = `O campo ${ctx.field} não está preenchido.`;
	}
};
