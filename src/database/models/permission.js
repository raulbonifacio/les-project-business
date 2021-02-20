const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Permission extends Model {
		static associate({ Role }) {
			Permission.belongsToMany(Role, {
				through: "PermissionsRoles",
				as: "roles",
			});
		}
	}

	Permission.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Permission",
			paranoid: true,
		}
	);

	return Permission;
};
