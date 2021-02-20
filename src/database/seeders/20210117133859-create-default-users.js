module.exports = {
	up: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkInsert("Users", [
			{
				id: 1,
				roleId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
