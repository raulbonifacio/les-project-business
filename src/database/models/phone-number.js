const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class PhoneNumber extends Model {
		static associate({ PhoneNumberType, PersonalInformation }) {
			PhoneNumber.belongsTo(PhoneNumberType, {
				foreignKey: "phoneNumberTypeId",
				as: "phoneNumberType",
			});

			PhoneNumber.belongsTo(PersonalInformation, {
				foreignKey: "personalInformationId",
				as: "personalInformation",
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
