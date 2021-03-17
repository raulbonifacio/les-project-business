const defaultMessages = {};

function existInModel({ field, label = field, modelName }, messages = {}) {

	messages = { ...defaultMessages, ...messages };

	return async ({ input, errors, state }, next) => {
		const transaction = state.get("transaction");
		const models = state.get("models");

		if (!(model in models)) throw `Model ${modelName} not found in models`;
		if (!input.has(field)) throw `Field ${field} not found in input.`;

		const id = input.get(field);
		const model = models[modelName];
		const exist = await model.findByPk(id, { transaction });

		if (!exist) {
			errors.set(field, message.exist(label));
		}

		return next();
	};
}

module.exports = existInModel;
