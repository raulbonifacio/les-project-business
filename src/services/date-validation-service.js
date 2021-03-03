exports.isDate = function (date) {
	return new Date(date || "") != "Invalid date";
};

exports.isAfter = function (date, after) {
	return new Date(date).getTime() < new Date(after).getTime();
};

exports.isBefore = function (date, after) {
	return new Date(date).getTime() > new Date(after).getTime();
};
