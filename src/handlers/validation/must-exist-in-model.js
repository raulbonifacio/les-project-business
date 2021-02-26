function mustExistInModel({ field, label = field, model, message }) {
	return async ({ input, errors, state }, next) => {
		const { [field]: id } = input;
		const { [model]: Model } = state.models;

		if (field in errors || !(field in input)) return next();

		const exist = await Model.findByPk(id);

		if (!exist) {
			errors[field] = message || `The ${label} does not exist.`;
		}

		return await next();
	};
}

module.exports = mustExistInModel;
