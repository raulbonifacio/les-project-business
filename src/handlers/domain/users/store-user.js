function storeUser() {
	return async ({ input, output, state }, next) => {

		const models = state.get("models");
		const transaction = state.get("transaction");

		const {
			loginEmail,
			loginPassword,
			profileFirstName,
			profileLastName,
			profileBirthDate,
			profileSex,
			profileCPF,
			phoneNumberNumber,
			phoneNumberTypeId,
			addressAddress,
			addressNumber,
			addressTypeId,
			addressCity,
			addressState,
			addressPostalCode,
			addressComplement,
			addressNeighbourhood,
			addressWithoutNumber = false,
		} = Object.fromEntries(input);

		const user = await models.User.create({}, { transaction });
		output.set("user", user.get());

		await user.createLogin(
			{ email: loginEmail, password: loginPassword },
			{ transaction }
		);

		const profile = await user.createProfile(
			{
				firstName: profileFirstName,
				lastName: profileLastName,
				birthDate: profileBirthDate,
				cpf: profileCPF,
				sex: profileSex,
			},
			{ transaction }
		);

		await profile.createPhoneNumber(
			{
				number: phoneNumberNumber,
				phoneNumberTypeId: phoneNumberTypeId,
			},
			{ transaction }
		);

		await profile.createAddress(
			{
				address: addressAddress,
				addressType: addressTypeId,
				number: addressNumber,
				city: addressCity,
				state: addressState,
				postalCode: addressPostalCode,
				withoutNumber: addressWithoutNumber,
				complement: addressComplement,
				neighbourhood: addressNeighbourhood,
			},
			{ transaction }
		);

		return next();
	};
}

module.exports = storeUser;
