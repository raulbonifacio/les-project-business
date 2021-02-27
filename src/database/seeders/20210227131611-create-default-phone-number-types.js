module.exports = {
	up: async (queryInterface, _Sequelize) => {
		queryInterface.bulkInsert("PhoneNumberTypes", [
			{
				id: 1,
				name: "Residencial",
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				id: 2,
				name: "Celular",
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
		]);
	},

	down: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkDelete("Logins", {});
	},
};
