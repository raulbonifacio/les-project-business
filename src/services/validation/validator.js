function validator(...validationEntries) {
	return validationEntries
		.find(validationEntry => {
			return validationEntry.pop()();
		})
		?.shift();
}

module.exports = validator;
