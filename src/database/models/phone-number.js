const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

	class PhoneNumber extends Model {
		static associate({ PhoneNumberType, Profile }) {
			PhoneNumber.belongsTo(PhoneNumberType, {
				foreignKey: "phoneNumberTypeId",
				as: "phoneNumberType",
			});

			PhoneNumber.belongsTo(Profile, {
				foreignKey: "profileId",
				as: "profile",
			});
		}
	}

	PhoneNumber.init(
		{
			number: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "PhoneNumber",
			paranoid: true,
		}
	);

	return PhoneNumber;
};
