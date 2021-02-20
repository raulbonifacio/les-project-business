const pipeline = require("../../pipeline");

function insidePipeline(...actions) { 
	return pipeline(...actions); 
}

module.exports = insidePipeline;
