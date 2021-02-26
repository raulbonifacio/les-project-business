const assert = require("assert");
const Context = require("./context");
const Handler = require("./handlers/handler");

function facade(handlers = {}, initialState = {}) {
	for (const [name, handler] of Object.entries(handlers)) {
		assert( handler instanceof Handler, `Handler ${name} is not a handler.`);
	}

	const facade = new Proxy(handlers, {
		get(handlers, handler) {

			assert( handlers[handler] instanceof Handler, `Handler ${handler} is not a handler.`);

			return (input, overrides = {}, externalContext) => {
				const context =
					externalContext ||
					new Context(input, {
						...initialState,
						...overrides,
						facade,
					});

				handler = handlers[handler];

				return Promise.resolve(handler.handle(context)).then(() => context);
			};
		},
	});

	return facade;
}

module.exports = facade;
