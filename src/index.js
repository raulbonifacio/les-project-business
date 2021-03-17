const facade = require("./facade");

const { sequelize, models } = require("./database");

const handlers = require("./handlers");

const state = {
	sequelize,
	models,
};

module.exports = {
	facade: facade(handlers, state),
};
