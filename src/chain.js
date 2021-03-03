const assert = require("assert");

function chain(...handlers) {

	handlers.forEach(handler => assert(handler instanceof Function));

	return (context, next = () => true) => {
		let previousHandler = null;
		const handlerStack = [...handlers];

		const callHandlerStack = handler => {
			assert(handler !== previousHandler);
			previousHandler = handler;

			if (handler) {
				return handler(context, () => callHandlerStack(handlerStack.shift()));
			}
		};

		return Promise.resolve(callHandlerStack(handlerStack.shift()))
			.then(next)
			.then(() => context);
	};
}

module.exports = chain;
