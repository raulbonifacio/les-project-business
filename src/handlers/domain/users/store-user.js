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
			addressPublicArea,
			addressName,
			addressPublicAreaType,
			addressNumber,
			addressCity,
			addressState,
			addressPostalCode,
			addressComplement,
			addressNeighbourhood,
			addressWithoutNumber = false,
			isBillingAddress,
			isDeliveryAddress,
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
		output.get("user").profile = await profile.get();

		await user.createPhoneNumber(
			{
				number: phoneNumberNumber,
				phoneNumberTypeId: phoneNumberTypeId,
			},
			{ transaction }
		);

		await user.createAddress(
			{
				name: addressName,
				publicArea: addressPublicArea,
				publicAreaType: addressPublicAreaType,
				number: addressNumber,
				city: addressCity,
				state: addressState,
				postalCode: addressPostalCode,
				withoutNumber: addressWithoutNumber,
				complement: addressComplement,
				neighbourhood: addressNeighbourhood,
				isDeliveryAddress,
				isBillingAddress,
			},
			{ transaction }
		);

		return next();
	};
}

module.exports = storeUser;
