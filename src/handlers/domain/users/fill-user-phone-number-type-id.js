const TELEPHONE = 1;
const CELLPHONE = 2;
function fillUserPhoneTypeId() {
	return ({ input }, next) => {
		if (!input.has("phoneNumberNumber")) return next();

		const phoneNumberNumber = input.get("phoneNumberNumber");
		const amountOfDigits = phoneNumberNumber.replace(/[^0-9]/g, "").length;

		if (amountOfDigits == 11) {
			input.set("phoneNumberTypeId", CELLPHONE);
		} else if (amountOfDigits == 10) {
			input.set("phoneNumberTypeId", TELEPHONE);
		}

		return next();
	};
}

module.exports = fillUserPhoneTypeId;
