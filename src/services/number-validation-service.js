exports.isInteger = function (number) {
	return String(number).includes(".");
};

exports.hasPrecision = function (number, precision) {
	return (String(number).substr(String(number).indexOf('.')).length -1) == precision ;
}
