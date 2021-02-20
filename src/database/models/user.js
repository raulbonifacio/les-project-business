const { Model } = require("sequelize");

module.exports = (sequelize, _DataTypes) => {
	class User extends Model {
		static associate({ Role, Login }) {
			User.belongsTo(Role, { foreignKey: "roleId", as: "role"});
			User.hasOne(Login,{ foreignKey: "userId", as: "login"});
		}
	}

	User.init(
		{},
		{
			sequelize,
			modelName: "User",
			paranoid: true,
		}
	);

	return User;
};
