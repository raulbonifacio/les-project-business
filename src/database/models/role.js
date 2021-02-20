const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Role extends Model {
		static associate({ Permission, User }) {
			Role.belongsToMany(Permission, {
				through: "PermissionsRoles",
				as: "permissions",
			});

			Role.hasMany(User, { foreignKey: "roleId", as: "users" });
		}
	}

	Role.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Role",
			paranoid: true,
		}
	);

	return Role;
};
