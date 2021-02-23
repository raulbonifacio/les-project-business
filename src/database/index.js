const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);

const {
	host,
	database,
	username,
	password,
	dialect,
	port,
} = require("./config");

const setDefaultScopes = require("./set-default-scopes");

const sequelize = new Sequelize(database, username, password, {
	host,
	dialect,
	port,
});

exports.models = {};

const MODELS = path.join(__dirname, "/models");

fs.readdirSync(MODELS)
	.filter(file => {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach(file => {
		const model = require(path.resolve(MODELS, file))(
			sequelize,
			Sequelize.DataTypes
		);

		exports.models[model.name] = model;

		setDefaultScopes(model);
	});

Object.keys(exports.models).forEach(modelName => {
	exports.models[modelName].associate?.(exports.models);
});

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;
