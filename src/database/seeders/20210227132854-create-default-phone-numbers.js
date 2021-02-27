module.exports = {
	up: async (queryInterface, _Sequelize) => {
		queryInterface.bulkInsert("PhoneNumbers", [
			{
				id: 1,
				number: "(00) 00000-0000",
				phoneNumberTypeId: 2,
				personalInformationId: 0,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				id: 2,
				number: "(00) 00000-0000",
				phoneNumberTypeId: 2,
				personalInformationId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				id: 3,
				number: "(00) 00000-0000",
				phoneNumberTypeId: 2,
				personalInformationId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				id: 4,
				number: "(00) 00000-0000",
				phoneNumberTypeId: 2,
				personalInformationId: 4,
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
