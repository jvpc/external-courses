'use strict'; 
function deepClone(obj) { 
	var clone = {},key,i; 
	for (key in obj) { 
		if (Array.isArray(obj[key])) { 
			clone[key] = []; 
			for (i = 0; i < obj[key].length; i++) { 
				clone[key][i] = obj[key][i]; 
			} 
		} else if (typeof obj[key] === 'object') { 
			clone[key] = deepClone(obj[key]); 
		} else { 
			clone[key] = obj[key]; 
		} 
	} 
	return clone; 
} 
module.exports = makeClone;