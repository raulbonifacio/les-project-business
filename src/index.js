const facade = require("./facade");

const logins = require("./actions/domain/logins");

const { transaction, sequelize, models } = require("./database");

const globals = {
	transaction,
	sequelize,
	models,
};

const actions = {
	...logins,
};

module.exports = facade(actions, globals);
