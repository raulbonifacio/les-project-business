const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

	class AddressType extends Model {
		static associate({ Address }) {
			AddressType.hasMany(Address, {
				foreignKey: "addressTypeId",
				as: "addressType",
			});
		}
	}

	AddressType.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "AddressType",
			paranoid: true,
		}
	);

	return AddressType;
};

