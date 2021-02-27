module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Addresses", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			personalInformationId: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: "PersonalInformations",
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
			address: {
				type: Sequelize.STRING,
			},
			state: {
				type: Sequelize.STRING,
			},
			number: {
				type: Sequelize.STRING,
			},
			complement: {
				type: Sequelize.STRING,
			},
			hasNumber: {
				type: Sequelize.BOOLEAN,
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

