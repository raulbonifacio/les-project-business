const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Profile extends Model {
		static associate({ User}) {
			Profile.belongsTo(User, {
				foreignKey: "userId",
				as: "user",
			});
		}
	}

	Profile.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			cpf: DataTypes.STRING,
			sex: DataTypes.STRING,
			birthDate: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "Profile",
			paranoid: true,
		}
	);

	return Profile;
};
