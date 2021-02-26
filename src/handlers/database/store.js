const chain = require("../../chain");
const withoutErrors = require("../control/without-errors");

function store({ model }) {
	return chain(withoutErrors(), async ({ input, output, state }, next) => {

		const { transaction, models } = state;

		const stored = await models[model].create(input, { transaction });

		output.data = stored;

		return await next();
	});
}

module.exports = store;
