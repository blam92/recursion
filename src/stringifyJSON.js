// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //whole element stringified (bool, int, obj, array, string etc...) 'false', '3', '{}', '[]', '"string"'
  if(typeof obj === "boolean" || typeof obj === "number" || obj === null || obj === undefined) {
    return "" + obj;
  } else if(typeof obj === "object") {
    if(Array.isArray(obj)) {
      var structure = "[";
      for(var i = 0; i < obj.length; i++) {
        structure += stringifyJSON(obj[i]);

        if(!(i + 1 === obj.length)) {
          structure += ",";
        }
      }
      structure += "]";
      return structure;
    } else {
      var structure = "{";
      var keys = Object.keys(obj);
      for(var i = 0; i < keys.length; i++) {

      if(!(typeof(obj[keys[i]]) === 'function' || obj[keys[i]] === undefined)) {
        structure +=  '"' + keys[i] + '":' + stringifyJSON(obj[keys[i]]);

        if(!(i + 1 === keys.length)) {
          structure += ",";
        }
      }
      }
      structure += "}";

      return structure;
    }
  } else if(typeof(obj) === "string") {
    return '"' + obj + '"';
  } else if(typeof(obj) === "function") {
    return;
  }
};


