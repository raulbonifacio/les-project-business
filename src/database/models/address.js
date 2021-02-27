const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Address extends Model {
		static associate({ PersonalInformation, AddressType }) {
			Address.belongsTo(AddressType, {
				foreignKey: "addressTypeid",
				as: "addressType",
			});
			Address.belongsTo(PersonalInformation, {
				foreignKey: "personalInformationId",
				as: "personalInformation",
			});
		}
	}

	Address.init(
		{
			description: DataTypes.STRING,
			postalCode: DataTypes.STRING,
			address: DataTypes.STRING,
			state: DataTypes.STRING,
			number: DataTypes.STRING,
			complement: DataTypes.STRING,
			hasNumber: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Address",
			paranoid: true,
		}
	);

	return Address;
};
