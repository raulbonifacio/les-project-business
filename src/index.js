const facade = require("./facade");

const { transaction, sequelize, models } = require("./database");

const handlers = require("./handlers");

const state = {
	transaction,
	sequelize,
	models,
};

module.exports = facade(handlers, state);
