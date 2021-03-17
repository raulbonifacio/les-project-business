const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Address extends Model {
		static associate({ User, ResidenceType }) {
			Address.belongsTo(ResidenceType, {
				foreignKey: "residenceTypeId",
				as: "residenceType",
			});
			Address.belongsTo(User, {
				foreignKey: "userId",
				as: "user",
			});
		}
	}

	Address.init(
		{
			name: DataTypes.STRING,
			postalCode: DataTypes.STRING,
			publicArea: DataTypes.STRING,
			state: DataTypes.STRING,
			city: DataTypes.STRING,
			number: DataTypes.STRING,
			withoutNumber: DataTypes.BOOLEAN,
			complement: DataTypes.STRING,
			isBillingAddress: DataTypes.BOOLEAN,
			isDeliveryAddress: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Address",
			paranoid: true,
		}
	);

	return Address;
};
