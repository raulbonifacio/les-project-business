module.exports = {
	up: async (queryInterface, _Sequelize) => {
		queryInterface.bulkInsert("PersonalInformations", [
			{
				userId: 1,
				firstName: "Eric",
				lastName: "Voeglin",
				birthDate: new Date("january 3, 1901"),
				cpf: "000.000.000-00",
				sex: "male",
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				userId: 2,
				firstName: "Tomas",
				lastName: "Sowell",
				birthDate: new Date("june 30, 1930"),
				cpf: "000.000.000-00",
				sex: "male",
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				userId: 3,
				firstName: "Roger",
				lastName: "Scruton",
				birthDate: new Date("february 27, 1944"),
				cpf: "000.000.000-00",
				sex: "male",
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
			{
				userId: 4,
				firstName: "Gilbert",
				lastName: "K. Cherterton",
				birthDate: new Date("may 28, 1874"),
				cpf: "000.000.000-00",
				sex: "male",
				createdAt: new Date(),
				updatedAt: new Date(),
				deletedAt: null,
			},
		]);
	},

	down: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkDelete("PersonalInformations", null, {});
	},
};
