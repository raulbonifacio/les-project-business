
function fillUserAddressDefaultValues() {
	return ({ input }, next) => {

		if(!input.has("addressName")) { 
			input.set("addressName", "Endereço de entrega e cobrança padrão.");
		}

		if(!input.has("isBillingAddress")) { 
			input.set("isBillingAddress", true);
		}

		if(!input.has("isDeliveryAddress")) { 
			input.set("isDeliveryAddress", true);
		}

		return next();
	};
}

module.exports = fillUserAddressDefaultValues;
