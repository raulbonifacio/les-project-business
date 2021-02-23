function setDefaultScopes(model) {
	model.addScope("raw", { raw: true, nest: true });
}

module.exports = setDefaultScopes;
