// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

var jsonTest = "{'name':'John','age':28,'isMarried':false,'isFriendly':true,'isAngry':'YES','height':1.90}";

var parseJSON = function(json) {
  // your code goes here
  var tempKey = "";
  var tempValue = ""; 
  var values = [];
  var keys = [];
  var flagValue = false;
  var flagArray = false; 
  var flagObject = false;
  
  var parsedString = json.slice(1, json.length - 1);

  var i = 0;

  var nextChar = function() {
  	i++;
  }
  var removeQuotesToString = function(str) {
  	return str.slice(1, tempKey.length - 1);
  }

  var isString = function(str) {
  	if((str[0] === '"' || str[0] === "'") && (str[str.length - 1] === '"' || str[str.length - 1] === "'")) {
  		return true;
  	} else {
  		return false;
  	}
  }

  var isBool = function(str) {
  	return !isString(str) && (str.includes("false") || str.includes("true"));
  }

  var parseBoolean = function(str) {
  	if(str === "false") {
  		return false;
  	} else {
  		return true;
  	}
  }

  var isInt = function(str) {
  	var digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  	return !isString(str) && str[0] in digits && !str.includes(".");
  }
	var isFloat = function(str) {
		var digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
		return !isString(str) && str[0] in digits && str.includes(".");
	}


  var transformToCorrectType = function(valStr) {
    if(isString(valStr)) {
    	return removeQuotesToString(valStr);
    } else if(isBool(valStr)) {
    	return parseBoolean(valStr);
    } else if(isInt(valStr)) {
    	return parseInt(valStr);
    } else if(isFloat(valStr)) {
    	return parseFloat(valStr);
    } else {
    	return undefined;
    }
  }


	var getKey = function() {
	  var tempKey = ""
	  while(!(flagValue)) {
	    if(parsedString[i] !== ":") {
	      tempKey += parsedString[i];
	    } else {
	      keys.push(removeQuotesToString(tempKey));
	      tempKey = "";
	      flagValue = true;
	    }
	    nextChar();
	  }
	  getValue();
	}

	var getValue = function() {
	  if(flagValue && !(flagArray || flagObject)) {
	  	while(flagValue) {
	  		if(parsedString[i] !== ",") {
	  			tempValue += parsedString[i];
	  		} else {
	  			values.push(tempValue);	
	  		  tempValue = "";
	  		  flagValue = false;
	  		} 

	  		if(i >= parsedString.length - 1) {
	  			values.push(tempValue);	
	  			flagValue = false;
	  			return;
	  	  }

	  	  nextChar();
	    }
	    getKey();
	  }
	}

	var wrapObject = function(vals, ks) {
		var newObj = {};

		ks.forEach(function(k, index) {
			newObj[k] = transformToCorrectType(vals[index]);
		});

		return newObj;
	}

  getKey();

  return wrapObject(values, keys);
};

console.log(parseJSON(jsonTest));








