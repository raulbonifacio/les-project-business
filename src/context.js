class Context {
	constructor(input = {}, state = {}) {
		this.input = input;
		this.state = state;
		this.errors = {};
		this.output = {};
	}

	*[Symbol.iterator]() {
		yield Object.keys(this.err).length && this.err;
		yield Object.keys(this.out).length && this.out;
	}
}

module.exports = Context;
