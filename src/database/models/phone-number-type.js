const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

	class PhoneNumberType extends Model {
		static associate({ PhoneNumber }) {
			PhoneNumberType.hasMany(PhoneNumber, {
				foreignKey: "phoneNumberTypeId",
				as: "phoneNumber",
			});
		}
	}

	PhoneNumberType.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "PhoneNumberType",
			paranoid: true,
		}
	);

	return PhoneNumberType;
};

