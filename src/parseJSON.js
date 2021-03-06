// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

var jsonTest = "{'name': 'John', 'age': 28, 'isMarried': false,'isFriendly': true,'isAngry': 'YES','height': 1.90}";

var parseJSON = function(json) {
  // your code goes here
//   var tempKey = "";
//   var tempValue = ""; 
//   var values = [];
//   var keys = [];
//   var flagValue = false;
//   var flagArray = false; 
//   var flagObject = false;
  
//   var parsedString = json.slice(1, json.length - 1);

//   var i = 0;
//   /////utility functions /////
//   var nextChar = function() {
//   	i++;
//   };
//   var removeQuotesAndSpacesToString = function(str) {
//   	var newString = "";
//   	var hasStringStarted = false;

//   	for(var i = 0; i < str.length; i++) {

//   		if(str[i] === "'" || str[i] === '"') {
//   			hasStringStarted = !hasStringStarted;
//   			newString += str[i];
//   		} else if(hasStringStarted) {
//   			newString += str[i];
//   		}
//   	}
//   	return newString.slice(1, newString.length - 1);
//   };

//   var isString = function(str) {
//   	for(var i = 0; i < str.length; i++) {
// 		if(str[i] === "'" || str[i] === '"') {
//   			return true;
//   		} else if(str[i] !== " ") {
//   			return false;
//   		}
//   	}
//   	return false;
//   };

//   var isBool = function(str) {
//   	return !isString(str) && (str.includes("false") || str.includes("true"));
//   };

//   var parseBoolean = function(str) {
//   	if(str === "false") {
//   		return false;
//   	} else {
//   		return true;
//   	}
//   };

//   var isInt = function(str) {
//   	var digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//   	str = str.split("");
//   	var hasDigits = str.reduce(function(accumulator, currentValue) {
//   		if(accumulator === true) {
//   			return true;
//   		} else if(currentValue in digits) {
//   			return true;
//   		} else {
//   			return false;
//   		}
//   	});

//   	return !isString(str) && hasDigits && !str.includes(".");
//   };
// 	var isFloat = function(str) {
// 		var digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// 		str = str.split("");
//   	var hasDigits = str.reduce(function(accumulator, currentValue) {
//   		if(accumulator === true) {
//   			return true;
//   		} else if(currentValue in digits) {
//   			return true;
//   		} else {
//   			return false;
//   		}
//   	});
// 		return !isString(str) && hasDigits && str.includes(".");
// 	};

//   // var isValueArrayObjectOrPrimitive = function(valStr) {
//   // 	if(valStr[1] === "[")
//   // }

//   var transformToCorrectType = function(valStr) {
//     if(isString(valStr)) {
//     	return removeQuotesAndSpacesToString(valStr);
//     } else if(isBool(valStr)) {
//     	valStr.replace(" ", "");
//     	return parseBoolean(valStr);
//     } else if(isInt(valStr)) {
//     	valStr.replace(" ", "");
//     	return parseInt(valStr);
//     } else if(isFloat(valStr)) {
//     	valStr.replace(" ", "");
//     	return parseFloat(valStr);
//     } else {
//     	return undefined;
//     }
//   };

// //\\\\\\\utility functions \\\\\\\\

// 	var getKey = function() {
// 	  var tempKey = "";
// 	  while(!(flagValue)) {
// 	    if(parsedString[i] !== ":") {
// 	      tempKey += parsedString[i];
// 	    } else {
// 	      keys.push(removeQuotesAndSpacesToString(tempKey));
// 	      tempKey = "";
// 	      flagValue = true;
// 	    }
// 	    nextChar();
// 	  }
// 	  getValue();
// 	};

// 	var getValue = function() {
// 	  if(flagValue && !(flagArray || flagObject)) {
// 	  	while(flagValue) {
// 	  		if(parsedString[i] !== ",") {
// 	  			tempValue += parsedString[i];
// 	  		} else {
// 	  			values.push(tempValue);	
// 	  		  tempValue = "";
// 	  		  flagValue = false;
// 	  		} 

// 	  		if(i >= parsedString.length - 1) {
// 	  			values.push(tempValue);	
// 	  			flagValue = false;
// 	  			return;
// 	  	  }

// 	  	  nextChar();
// 	    }
// 	    getKey();
// 	  }
// 	};

// 	//could be done when pushing keys/values to prevent an extra iteration.
// 	var wrapObject = function(vals, ks) {
// 		var newObj = {};

// 		ks.forEach(function(k, index) {
// 			newObj[k] = transformToCorrectType(vals[index]);
// 		});

// 		return newObj;
// 	};

//   getKey();

//   return wrapObject(values, keys);
};





