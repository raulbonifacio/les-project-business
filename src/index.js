const facade = require("./facade");

const { transaction, sequelize, models } = require("./database");
const DoSomething = require("./handlers/facade/do-something");


const handlers = { 
	doSomething: new DoSomething(),
}

const state = {
	transaction,
	sequelize,
	models,
};

module.exports = facade(handlers, state);
