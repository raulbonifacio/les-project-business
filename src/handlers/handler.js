class Handler {
	static chain(...handlers) {

		handlers.forEach(handler => assert(handler instanceof Handler));

		return new (class extends Handler {
			async handle(context, next) {

				const handlerStack = [...handlers];
				const previousHandler = null;

				const callHandlerStack = handler => {

					assert(handler != previousHandler);
					previousHandler = handler;

					return handler.handle(context, () =>
						callHandlerStack(handlerStack.shift())
					);
				};

				return Promise.resolve(callHandlerStack(handlerStack.shift())).then(
					next
				);
			}
		})();
	}

	async handle(_context, next) {
		return next();
	}
}

module.exports = Handler;
