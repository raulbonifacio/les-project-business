module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("PhoneNumbers", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			profileId: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: "Profiles",
					},
					key: "id",
				},
			},
			phoneNumberTypeId: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: "PhoneNumberTypes",
					},
					key: "id",
				},
			},
			number: {
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
	down: async (queryInterface, _Sequelize) => {
		await queryInterface.dropTable("PhoneNumbers");
	},
};
