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
		output.user = user.get();

		const login = await user.createLogin(
			{ email: loginEmail, password: loginPassword },
			{ transaction }
		);
		output.user.login = login.get();

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
		output.user.profile = profile.get();

		const phoneNumber = await profile.createPhoneNumber(
			{
				number: phoneNumberNumber,
				phoneNumberTypeId: phoneNumberTypeId,
			},
			{ transaction }
		);
		output.user.phoneNumber = phoneNumber.get();

		const address = await profile.createAddress(
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
		output.user.address = address.get();

		return next();
	};
}

module.exports = storeUser;
