function alterLogin() {
	return (context, next) => {
		return next();
	};
}

module.exports = alterLogin;
