module.exports = {
	up: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkInsert("Roles", [
			{
				id: 1,
				name: "master",
				description: "The master user",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2,
				name: "admin",
				description: "The master user",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 3,
				name: "operator",
				description: "The master user",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 4,
				name: "customer",
				description: "The master user",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);

		await queryInterface.bulkInsert("PermissionsRoles", [
			{
				id: 1,
				roleId: 1,
				permissionId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2,
				roleId: 1,
				permissionId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 3,
				roleId: 1,
				permissionId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkDelete("PermissionsRoles", null, {});
		await queryInterface.bulkDelete("Roles", null, {});
	},
};
