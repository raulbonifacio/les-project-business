class Context {
	constructor(input = {}, state = {}) {
		this.input = new Map(Object.entries(input));
		this.output = new Map();
		this.errors = new Map();
		this.state = new Map(Object.entries(state));
	}

	*[Symbol.iterator]() {
		yield this.errors.size && Object.fromEntries(this.errors);
		yield this.errors.size && Object.fromEntries(this.output);
	}
}

module.exports = Context;
