const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

module.exports = {
	up: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkInsert("Logins", [
			{
				email: "root@email.com",
				password: await bcrypt.hash("!@#passWORD", SALT_ROUNDS),
				userId:1,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			}
		]);
	},

	down: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkDelete("Logins", {});
	},
};
