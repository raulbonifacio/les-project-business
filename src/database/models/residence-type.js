const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

	class ResidenceType extends Model {
		static associate({ Address }) {
			ResidenceType.hasMany(Address, {
				foreignKey: "residenceTypeId",
				as: "residenceType",
			});
		}
	}

	ResidenceType.init(
		{
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "ResidenceType",
			paranoid: true,
		}
	);

	return ResidenceType;
};

