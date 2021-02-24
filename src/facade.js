const assert = require("assert");
const Context = require("./context");

function facade(handlers = {}, initialState = {}) {
	for (const [name, handler] of Object.entries(handlers)) {
		assert(typeof handler == "function", `Handler ${name} is not a function.`);
	}

	const facade = new Proxy(handlers, {
		get(handlers, handler) {

			assert(typeof handlers[handler] == "function");

			return (input, overrides = {}, externalContext) => {
				const context =
					externalContext ||
					new Context(input, {
						...initialState,
						...overrides,
						facade,
					});

				handler = handlers[handler]();

				return Promise.resolve(handler(context)).then(() => [...context]);
			};
		},
	});

	return facade;
}

module.exports = facade;
