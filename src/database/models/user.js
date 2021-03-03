const { Model } = require("sequelize");

module.exports = (sequelize, _DataTypes) => {

	class User extends Model {
		static associate({ Role, Login, PersonalInformation }) {
			User.belongsTo(Role, { foreignKey: "roleId", as: "role" });
			User.hasOne(Login, { foreignKey: "userId", as: "login" });
			User.hasOne(PersonalInformation, {
				foreignKey: "userId",
				as: "personalInformation",
			});
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
