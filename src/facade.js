const assert = require("assert");
const Context = require("./context");

function facade(handlers = {}, state ) {

	for (const [name, handler] of Object.entries(handlers)) {
		assert(handler instanceof Function, `The ${name} is not a function.`);
	}

	const facade = new Proxy(handlers, {
		get(handlers, handler) {
			return (input, overrides = {}) => {
				const context = new Context(input, { ...state, ...overrides, facade });

				handler = handlers[handler]();

				return Promise.resolve(handler(context)).then(() => context);
			};
		},
	});

	return facade;
}

module.exports = facade;
