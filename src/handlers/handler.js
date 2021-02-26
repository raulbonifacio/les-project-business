class Handler {
	static chain(...handlers) {

		handlers.forEach(handler => assert(handler instanceof Handler));

		return new (class extends Handler {
			async handle(context, next = () => {}) {

				const stack = [...handlers];
				let previousHandler = null;

				const callStack = handler => {
					assert(handler != previousHandler);
					previousHandler = handler;
					if (handler) {
						return handler.handle(context, () => callStack(stack.shift()));
					}
				};

				return Promise.resolve(callStack(stack.shift()))
					.then(next)
					.then(() => context);
			}
		})();
	}

	async handle(_context, next) {
		return next();
	}
}

module.exports = Handler;
