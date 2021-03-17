module.exports = {
	up: async (queryInterface, _Sequelize) => {
		queryInterface.bulkInsert("PhoneNumbers", [
			{
				id: 1,
				number: "(00) 00000-0000",
				phoneNumberTypeId: 2,
				userId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				id: 2,
				number: "(00) 00000-0000",
				phoneNumberTypeId: 2,
				userId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				id: 3,
				number: "(00) 00000-0000",
				phoneNumberTypeId: 2,
				userId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				id: 4,
				number: "(00) 00000-0000",
				phoneNumberTypeId: 2,
				userId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
		]);
	},

	down: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkDelete("PhoneNumbers", {});
	},
};
