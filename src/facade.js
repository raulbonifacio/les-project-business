const assert = require("assert");
const Context = require("./context");

function facade(actions = {}, globals = {}) {
	for (const [name, action] of Object.entries(actions)) {
		assert(typeof action == "function", `Action ${name} is not a function.`);
	}

	return new Proxy(actions, {
		get(actions, action) {
			if (typeof actions[action] == "undefined") return;

			return (input, overrides = {}) => {
				const context = new Context(input, { ...globals, ...overrides });
				return Promise.resolve(actions[action](context)).then(
					context => context.output
				);
			};
		},
	});
}

module.exports = facade;
