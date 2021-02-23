module.exports = {

	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("PersonalInformations", {
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
			firstName: {
				type: Sequelize.STRING,
			},
			lastName: {
				type: Sequelize.STRING,
			},
			cpf: {
				type: Sequelize.STRING,
			},
			sex: {
				type: Sequelize.STRING,
			},
			birthDate: {
				type: Sequelize.DATE,
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
		await queryInterface.dropTable("PersonalInformations");
	},
};

