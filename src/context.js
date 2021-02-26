class Context {
	constructor(input = {}, state = {}) {
		this.input = input;
		this.output = {};
		this.errors = {};
		this.state = state;

		this.hasErrors = this.hasErrors.bind(this);
		this.hasInput = this.hasInput.bind(this);
		this.hasOutput = this.hasOutput.bind(this);
	}

	*[Symbol.iterator]() {
		yield this.hasErrors && this.errors;
		yield this.hasOutput && this.output;
	}

	_has(target, ...keys) {
		if (keys.length) {
			return keys.every(key => key in target);
		} else {
			return Object.keys(target).length > 0;
		}
	}

	hasErrors(...keys) {
		return this._has(this.errors, ...keys);
	}

	hasInput(...keys) {
		return this._has(this.input, ...keys);
	}

	hasOutput(...keys) {
		return this._has(this.output, ...keys);
	}
}

module.exports = Context;
