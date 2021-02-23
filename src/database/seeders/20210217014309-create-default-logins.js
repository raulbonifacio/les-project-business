const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

module.exports = {
	up: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkInsert("Logins", [
			{
				email: "master@email.com",
				password: await bcrypt.hash("!@#passWORD", SALT_ROUNDS),
				userId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				email: "admin@email.com",
				password: await bcrypt.hash("!@#passWORD", SALT_ROUNDS),
				userId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				email: "operator@email.com",
				password: await bcrypt.hash("!@#passWORD", SALT_ROUNDS),
				userId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				email: "customer1@email.com",
				password: await bcrypt.hash("!@#passWORD", SALT_ROUNDS),
				userId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				email: "customer2@email.com",
				password: await bcrypt.hash("!@#passWORD", SALT_ROUNDS),
				userId: 5,
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
