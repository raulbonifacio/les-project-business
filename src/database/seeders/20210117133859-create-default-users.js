module.exports = {
	up: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkInsert("Users", [
			{
				id: 1,
				roleId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2,
				roleId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 3,
				roleId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 4,
				roleId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 5,
				roleId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
