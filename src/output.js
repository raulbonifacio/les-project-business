class Output {
	constructor() {
		this.data = {};
		this.errors = {};
		this.warnings = {};
	}

	get hasErrors() {
		return Object.keys(this.errors).length;
	}
}

module.exports = Output;
