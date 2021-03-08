class Context {
	constructor(input, state) {
		this.state = new Map(Object.entries(state));
		this.input = new Map(Object.entries(input));
		this.output = new Map();
		this.errors = new Map();
	}

	*[Symbol.iterator]() {
		yield this.errors.size ? Object.fromEntries(this.errors) : undefined;
		yield this.output.size ? Object.fromEntries(this.output) : undefined;
	}
}

module.exports = Context;
