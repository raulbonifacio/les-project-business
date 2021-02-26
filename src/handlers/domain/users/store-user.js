const store = require("../../database/store");

function storeUser() {
	return store({model: "User"});
}

module.exports = storeUser();
