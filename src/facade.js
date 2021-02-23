const assert = require("assert");
const Context = require("./context");

function facade(handlers = {}, globals = {}) {

	for (const [name, handler] of Object.entries(handlers)) {
		assert(typeof handler == "function", `Handler ${name} is not a function.`);
	}

	const facade = new Proxy(handlers, {

		get(handlers, handler) {

			assert(typeof handlers[handler] == "function");

			return (input, overrides = {}) => {

				const context = new Context(input, { ...globals, ...overrides, facade });

				return Promise.resolve(handlers[handler]()(context)).then(() => context);
			};
		},
	});

	return facade;
}

module.exports = facade;
