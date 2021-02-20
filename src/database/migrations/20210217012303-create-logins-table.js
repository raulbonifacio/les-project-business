module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Logins", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: "Users",
					},
					key: "id",
				},
			},
			email: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
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
	down: async (queryInterface) => {
		await queryInterface.dropTable("Logins");
	},
};

