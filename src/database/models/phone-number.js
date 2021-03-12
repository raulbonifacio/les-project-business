const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

	class PhoneNumber extends Model {
		static associate({ PhoneNumberType, User }) {
			PhoneNumber.belongsTo(PhoneNumberType, {
				foreignKey: "phoneNumberTypeId",
				as: "phoneNumberType",
			});

			PhoneNumber.belongsTo(User, {
				foreignKey: "userId",
				as: "user",
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
