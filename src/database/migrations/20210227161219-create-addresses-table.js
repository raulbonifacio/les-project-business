module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Addresses", {
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
			residenceTypeId: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: "ResidenceTypes",
					},
					key: "id",
				},
			},
			name: {
				type: Sequelize.STRING,
			},
			postalCode: {
				type: Sequelize.STRING,
			},
			publicArea: {
				type: Sequelize.STRING,
			},
			publicAreaType: {
				type: Sequelize.STRING,
			},
			state: {
				type: Sequelize.STRING,
			},
			city: {
				type: Sequelize.STRING,
			},
			number: {
				type: Sequelize.STRING,
			},
			withoutNumber: {
				type: Sequelize.BOOLEAN,
			},
			isBillingAddress: {
				type: Sequelize.BOOLEAN,
			},
			isDeliveryAddress: {
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

