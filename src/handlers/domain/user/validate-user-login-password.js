class ValidateUserLoginPassword extends Handler {
	async handle({ input, errors }, next) {
		const password = input?.login?.password;


		if(error) {
			errors.login = { ...errors.login };
			errors.login.password = error;
		}

		return next();
	}
}
