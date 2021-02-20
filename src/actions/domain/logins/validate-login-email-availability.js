
function validateLoginEmailAvalability() { 
	return async ({input, output, globals }, next) => {
		await next();
	}
}

module.exports = validateLoginEmailAvalability;
