const Handler = require("../handler");
const MustBeBetweenLength = require("../validation/must-be-between-length");

class DoSomething extends Handler {
	async handle(context, next) {
		const params = ["something", "something" ];

		return Handler
			.chain(new MustBeBetweenLength(...params, 2 ,10))
			.handle(context, next);
	}
}

module.exports = DoSomething;
