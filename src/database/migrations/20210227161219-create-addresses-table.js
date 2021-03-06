module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Addresses", {
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
			addressTypeId: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: "AddressTypes",
					},
					key: "id",
				},
			},
			description: {
				type: Sequelize.STRING,
			},
			postalCode: {
				type: Sequelize.STRING,
			},
			publicArea: {
				type: Sequelize.STRING,
			},
			state: {
				type: Sequelize.STRING,
			},
			number: {
				type: Sequelize.STRING,
			},
			withoutNumber: {
				type: Sequelize.BOOLEAN,
			},
			complement: {
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
		await queryInterface.dropTable("Addresses");
	},
};

