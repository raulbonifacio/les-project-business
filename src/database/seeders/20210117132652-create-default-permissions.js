module.exports = {
	up: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkInsert("Permissions", [
			{
				id: 1,
				name: "manage-users",
				description: "Permission to manage users.",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2,
				name: "manage-roles",
				description: "Permission to manage roles.",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 3,
				name: "manage-permissions",
				description: "Permission to manage permissions",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkDelete("Permissions", null, {});
	},
};
