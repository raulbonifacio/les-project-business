const assert = require("assert");

function chain(...handlers) {
	handlers.forEach(handler => assert(typeof handler == "function"));

	return (ctx, followUp = () => ctx) => {

		assert(typeof followUp == "function", `The followUp must be a function.`);

		const stack = [...handlers];

		let previousHandler = null;

		const next = handler => {
			assert.notStrictEqual(
				previousHandler,
				handler,
				"'next()' handler called twice"
			);

			previousHandler = handler;

			if (handler) {
				return handler(ctx, () => next(stack.shift()));
			}
		};

		return Promise.resolve(next(stack.shift())).then(followUp);
	};
}

module.exports = chain;
