module.exports = {
	up: async (queryInterface, Sequelize) => {
		queryInterface.bulkInsert("ResidenceTypes", [ 
			{ 
				id: 1,
				name: "Casa",
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{ 
				id: 2,
				name: "Apartamento",
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			}
		]);

	},
	down: async (queryInterface, Sequelize) => {
		queryInterface.bulkDelete("ResidenceTypes", {});
	},
};
