module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			password: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable("Users");
	},
};
