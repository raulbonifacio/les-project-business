module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("PermissionsRoles", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			roleId: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: "Roles",
					},
					key: "id",
				},
			},
			permissionId: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: "Permissions",
					},
					key: "id",
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},

			deletedAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});
	},

	down: async (queryInterface, _Sequelize) => {
		await queryInterface.dropTable("PermissionsRoles");
	},
};
