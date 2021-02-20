const Context = require("../../context");
const insidePipeline = require("./inside-pipeline");

function forkToPipeline({ field }, ...pipelines) {
	return async ({ input, output, globals }, next) => {

		const { [field]: forkInput } = input;

		const context = new Context(forkInput, globals);

		const forkOutput = await insidePipeline(...pipelines)(context);

		data[field] = forkOutput.data;
		errors[field] = forkOutput.field;
		warnings[field] = forkOutput.field;

		await next();
	};
}

module.exports = forkToPipeline;
