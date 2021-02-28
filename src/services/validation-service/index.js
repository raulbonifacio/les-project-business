const chain = require("../../chain");
const {
	mustBeSent,
	mustBeFilled,
	mustIncludeDifferentCases,
	mustIncludeSpecialCharacters,
	mustBeInsideRange,
	mustBeAnEmail,
} = require("./validators");

exports.validatePassword = async (value, field) => {
	const { error } = await chain(
		mustBeSent(),
		mustBeFilled(),
		mustBeInsideRange(8, 255),
		mustIncludeDifferentCases(),
		mustIncludeSpecialCharacters()
	)({ value, field, min: 8 });

	return error;
};

exports.validateEmail = async (value, field) => {
	const { error } = await chain(
		mustBeSent(),
		mustBeFilled(),
		mustBeInsideRange(),
		mustBeAnEmail(),
	)({ value, field});

	return error;
};
