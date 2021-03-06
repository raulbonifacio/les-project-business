const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

	class Address extends Model {
		static associate({ Profile, AddressType }) {
			Address.belongsTo(AddressType, {
				foreignKey: "addressTypeid",
				as: "addressType",
			});
			Address.belongsTo(Profile, {
				foreignKey: "profileId",
				as: "profile",
			});
		}
	}

	Address.init(
		{
			description: DataTypes.STRING,
			postalCode: DataTypes.STRING,
			publicArea: DataTypes.STRING,
			state: DataTypes.STRING,
			number: DataTypes.STRING,
			withoutNumber: DataTypes.BOOLEAN,
			complement: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Address",
			paranoid: true,
		}
	);

	return Address;
};
