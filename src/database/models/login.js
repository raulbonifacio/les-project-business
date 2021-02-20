const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Login extends Model {
		static associate({ User }) {
			Login.belongsTo(User, { foreinKey: "userId", as: "user" });
		}
	}

	Login.init(
		{
			email: DataTypes.STRING,
			password: DataTypes.STRING,
		},
		{
			sequelize,
			paranoid: true,
			modelName: "Login",
		}
	);

	return Login;
};
