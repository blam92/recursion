// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

var jsonTest = "{'name':'John','age':28,'isMarried':false,'isFriendly':true,'isAngry':'YES'}";

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

	var getKey = function() {
		var tempKey = ""
	  while(!(flagValue)) {
	    if(parsedString[i] !== ":") {
	      tempKey += parsedString[i];
	    } else {
	    	keys.push(tempKey);
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

  getKey();

  return "values: " + values + " and keys: " + keys;
};

console.log(parseJSON(jsonTest));

