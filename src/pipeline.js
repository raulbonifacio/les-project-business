
const assert = require("assert");

function pipeline(...middlewares) {
	middlewares.forEach(middleware => assert(typeof middleware == "function"));

	return (context, followUp = function () {}) => {
		assert(typeof followUp == "function", `The followUp must be a function.`);

		const stack = [...middlewares];

		let previousMiddleware = null;

		const next = middleware => {
			assert.notStrictEqual(
				previousMiddleware,
				middleware,
				"The 'next' function called twice"
			);

			previousMiddleware = middleware;

			if (middleware) {
				return middleware(context, () => next(stack.shift()));
			}
		};

		return Promise.resolve(next(stack.shift()))
			.then(followUp)
			.then(() => context);
	};
}

module.exports = pipeline;
