const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class PersonalInformation extends Model {
		static associate({ User, PhoneNumber, Address }) {
			PersonalInformation.belongsTo(User, {
				foreignKey: "userId",
				as: "user",
			});

			PersonalInformation.hasMany(PhoneNumber, {
				foreignKey: "profileId",
				as: "phoneNumbers",
			});

			PersonalInformation.hasMany(Address, {
				foreignKey: "profileId",
				as: "addresses",
			});
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
			modelName: "Profile",
			paranoid: true,
		}
	);

	return PersonalInformation;
};
