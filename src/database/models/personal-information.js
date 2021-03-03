const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

	class PersonalInformation extends Model {
		static associate({ User }) {
			PersonalInformation.belongsTo(User, { foreignKey: "userId", as: "user" });
		}
	}

	PersonalInformation.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			cpf: DataTypes.STRING,
			sex: DataTypes.STRING,
			birthDate: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "PersonalInformation",
			paranoid: true,
		}
	);

	return PersonalInformation;
};

