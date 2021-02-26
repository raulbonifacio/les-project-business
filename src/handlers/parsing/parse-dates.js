function parseDates() {
	return (input, next) => {
		for (const possibleDateKey of Object.keys(input)) {

			const possibleDate = new Date(input[possibleDateKey]);

			if (possibleDate != "Invalid Date") {
				input[possibleDateKey] = possibleDate;
			}
		}

		return next();
	};
}

module.exports = parseDates;
