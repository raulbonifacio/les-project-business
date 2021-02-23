const facade = require("./facade");

const { transaction, sequelize, models } = require("./database");

const handlers = require("./handlers");

const globals = {
	transaction,
	sequelize,
	models,
};

module.exports = facade(handlers, globals);
