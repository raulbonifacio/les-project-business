const store = require("../../database/store");

function storeLogin() {
	return store({ model: "Login", as: "login" });
}

module.exports = storeLogin;
