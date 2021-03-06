exports.isInteger = function (number) {
	return !String(number).includes(".");
};

exports.hasPrecision = function (number, precision) {
	number = String(number);
	if (number.includes(".")) {
		return number.substr(number.indexOf(".")).length - 1 == precision;
	} else {
		return false;
	}
};
