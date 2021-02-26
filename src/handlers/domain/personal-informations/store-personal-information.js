const store = require("../../database/store");

function storePersonalInformation() {
	return store({ model: "PersonalInformation" });
}

module.exports = storePersonalInformation;
